import type {CommerceEngineConfiguration} from '@eternal-baguette/headless/commerce';
import {augmentAnalyticsConfigWithAtomicVersion} from '../../common/interface/analytics-config';

export function getAnalyticsConfig(
  commerceEngineConfig: CommerceEngineConfiguration,
  enabled: boolean
): CommerceEngineConfiguration['analytics'] {
  return {
    enabled,
    ...commerceEngineConfig.analytics,
    ...augmentAnalyticsConfigWithAtomicVersion(),
  };
}
