import {afterEach, beforeEach, vi} from 'vitest';
import '../src/themes/coveo.css';
import '../src/utils/coveo.tw.css';
import '../src/utils/tailwind.global.tw.css';
import {fixtureCleanup} from './testing-helpers/fixture-wrapper.js';

vi.mock('@eternal-baguette/headless', {spy: true});
vi.mock('@eternal-baguette/headless/commerce', {spy: true});
vi.mock('@eternal-baguette/bueno', {spy: true});

// Suppress Lit dev mode warning during tests
(window.litIssuedWarnings as unknown) ??= new Set();
(window.litIssuedWarnings as unknown as Set<string>).add('dev-mode');

afterEach(() => {
  vi.unstubAllGlobals();
  vi.resetAllMocks();
});

beforeEach(async () => {
  vi.spyOn(console, 'error').mockImplementation(() => {});
  document.adoptedStyleSheets = [];
  fixtureCleanup();
});
