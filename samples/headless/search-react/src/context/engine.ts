import type {SearchEngine} from '@eternal-baguette/headless';
import type {CommerceEngine} from '@eternal-baguette/headless/commerce';
import type {RecommendationEngine} from '@eternal-baguette/headless/recommendation';
import {createContext} from 'react';

interface AppContextType {
  engine: SearchEngine;
  recommendationEngine: RecommendationEngine;
  commerceEngine: CommerceEngine;
}

export const AppContext = createContext<Partial<AppContextType>>({});
