import type {NavigatorContextProvider} from '@eternal-baguette/headless/ssr';

export const createMockNavigatorContextProvider =
  (): NavigatorContextProvider => () => ({
    clientId: 'test-commerce-client',
    location: 'https://commerce.test.com',
    referrer: 'https://search.test.com',
    userAgent: 'Test Commerce Agent',
  });
