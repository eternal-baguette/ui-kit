import {defineCommerceEngine} from '@eternal-baguette/headless/ssr-commerce-next';
import {engineConfig} from './engine-config.js';

const engineDefinition = defineCommerceEngine(engineConfig);

export const {searchEngineDefinition} = engineDefinition;
