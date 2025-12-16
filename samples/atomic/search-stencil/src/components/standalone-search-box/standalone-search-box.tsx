import type {AtomicSearchInterface} from '@eternal-baguette/atomic/components';
import {getSampleSearchEngineConfiguration} from '@eternal-baguette/headless';
// biome-ignore lint/correctness/noUnusedImports: <>
import {Component, h, Prop} from '@stencil/core';
import type {Router} from 'stencil-router-v2';

@Component({
  tag: 'standalone-search-box',
  shadow: false,
})
export class StandaloneSearchBox {
  @Prop() router!: Router;
  componentDidLoad() {
    const searchInterface: AtomicSearchInterface = document.querySelector(
      'atomic-search-interface#searchbox'
    )!;

    searchInterface.initialize(getSampleSearchEngineConfiguration());
  }

  render() {
    return (
      <atomic-search-interface id="searchbox" reflect-state-in-url="false">
        <atomic-search-box
          redirection-url="/search"
          onRedirect={(e) => {
            e.preventDefault();
            const {redirectTo, value} = e.detail;
            const path = `${redirectTo}#q=${value}`;
            this.router.push(path);
          }}
        ></atomic-search-box>
      </atomic-search-interface>
    );
  }
}
