import {
  defineProductList,
  defineSearchBox,
  defineSummary,
  getSampleCommerceEngineConfiguration,
} from '@eternal-baguette/headless/ssr-commerce-next';

export const engineConfig = {
  configuration: getSampleCommerceEngineConfiguration(),
  controllers: {
    searchBox: defineSearchBox(),
    summary: defineSummary(),
    productList: defineProductList(),
  },
};
