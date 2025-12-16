// @ts-ignore Stencil does not support subpath exports.
import {defineCustomElements} from '@eternal-baguette/atomic/loader';

export function waitForAtomic() {
  defineCustomElements();
  return customElements.whenDefined('atomic-search-interface');
}
