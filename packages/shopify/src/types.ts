import type {CommerceEngineOptions} from '@eternal-baguette/headless/commerce';

export interface AppProxyOptions {
  appProxyUrl?: string;
  marketId: string;
}

export interface CoveoShopifyOptions {
  accessToken: string;
  organizationId: string;
  environment: CommerceEngineOptions['configuration']['environment'];
  trackingId: string;
}

export interface CoveoShopifyCustomEvent extends CoveoShopifyOptions {
  clientId: string;
}
