import {
  type CommerceEngineConfiguration,
  getSampleCommerceEngineConfiguration,
} from '@eternal-baguette/headless/commerce';
import {describe, expect, it, vi} from 'vitest';
import {getAnalyticsConfig} from './analytics-config';

vi.mock('@eternal-baguette/headless/commerce', {spy: true});

describe('#getAnalyticsConfig', () => {
  it('should return default configuration when analytics is not defined in commerceEngineConfig', () => {
    const commerceEngineConfig = {} as CommerceEngineConfiguration;
    const enabled = true;
    const config = getAnalyticsConfig(commerceEngineConfig, enabled);

    expect(config).toEqual({
      enabled,
      source: {
        '@eternal-baguette/atomic': '0.0.0',
      },
    });
  });

  it('should merge default configuration with commerceEngineConfig.analytics', () => {
    const commerceEngineConfig: CommerceEngineConfiguration =
      getSampleCommerceEngineConfiguration();
    const enabled = false;
    const config = getAnalyticsConfig(commerceEngineConfig, enabled);

    expect(config).toEqual({
      enabled,
      source: {
        '@eternal-baguette/atomic': '0.0.0',
      },
      trackingId: commerceEngineConfig.analytics.trackingId,
    });
  });
});
