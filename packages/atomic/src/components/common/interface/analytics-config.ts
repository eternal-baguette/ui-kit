import type {
  AnalyticsClientSendEventHook,
  AnalyticsConfiguration,
  EngineConfiguration,
  SearchEngineConfiguration,
} from '@eternal-baguette/headless';
import type {InsightEngineConfiguration} from '@eternal-baguette/headless/insight';
import type {RecommendationEngineConfiguration} from '@eternal-baguette/headless/recommendation';
import {getAtomicVersion} from '../../../global/environment';

export type AnalyticsPayload = Parameters<AnalyticsClientSendEventHook>[1];

export function augmentWithExternalMiddleware(
  event: string,
  payload: AnalyticsPayload,
  config:
    | InsightEngineConfiguration
    | SearchEngineConfiguration
    | RecommendationEngineConfiguration
) {
  if (config.analytics?.analyticsClientMiddleware) {
    return config.analytics.analyticsClientMiddleware(event, payload);
  }
  return payload;
}

export function augmentAnalyticsWithAtomicVersion(payload: AnalyticsPayload) {
  if (payload.customData) {
    payload.customData.coveoAtomicVersion = getAtomicVersion();
  }
  return payload;
}

export function augmentAnalyticsConfigWithDocument(): AnalyticsConfiguration {
  return {
    documentLocation: document.location.href,
    ...(document.referrer && {originLevel3: document.referrer}),
  };
}

const versionMatcher = /^(\d+\.\d+\.\d+)/;

export function augmentAnalyticsConfigWithAtomicVersion(): Required<
  Pick<AnalyticsConfiguration, 'source'>
> {
  return {
    source: {
      '@eternal-baguette/atomic':
        versionMatcher.exec(getAtomicVersion())?.[0] || '0.0.0',
    },
  };
}

export function getNextAnalyticsConfig(
  searchEngineConfig: EngineConfiguration,
  enabled: boolean
): AnalyticsConfiguration {
  const configuration: AnalyticsConfiguration = {
    enabled,
    documentLocation: document.location.href,
    ...(document.referrer && {originLevel3: document.referrer}),
  };

  const analyticsConfiguration = searchEngineConfig.analytics ?? {};
  Object.assign(
    analyticsConfiguration,
    augmentAnalyticsConfigWithAtomicVersion()
  );
  Object.assign(configuration, analyticsConfiguration);

  return configuration;
}
