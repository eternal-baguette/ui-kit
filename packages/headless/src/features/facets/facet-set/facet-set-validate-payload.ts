import {NumberValue} from '@eternal-baguette/bueno';
import {requiredNonEmptyString} from '../../../utils/validate-payload.js';

export const facetValueDefinition = {
  value: requiredNonEmptyString,
  numberOfResults: new NumberValue({min: 0}),
  state: requiredNonEmptyString,
};
