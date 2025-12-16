import type {FoldedResult, Result} from '@eternal-baguette/headless';
import type {Product} from '@eternal-baguette/headless/commerce';
import type {Result as InsightResult} from '@eternal-baguette/headless/insight';

export type AnyItem = FoldedResult | AnyUnfoldedItem | Product;
export type AnyUnfoldedItem = Result | InsightResult;

export function extractUnfoldedItem(anyResult: AnyItem): AnyUnfoldedItem {
  return (anyResult as FoldedResult).result || anyResult;
}
