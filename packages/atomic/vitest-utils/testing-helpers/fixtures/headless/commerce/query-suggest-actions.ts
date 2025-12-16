import type {loadQuerySuggestActions} from '@eternal-baguette/headless/commerce';
import {vi} from 'vitest';

export const defaultMockedActions = {
  selectQuerySuggestion: vi.fn(),
  clearQuerySuggest: vi.fn(),
  registerQuerySuggest: vi.fn(),
  fetchQuerySuggestions: vi.fn(),
};

defaultMockedActions satisfies ReturnType<typeof loadQuerySuggestActions>;

export const buildFakeLoadQuerySuggestActions = (
  returnValues: Partial<
    ReturnType<typeof loadQuerySuggestActions>
  > = defaultMockedActions
) => ({...defaultMockedActions, ...returnValues});
