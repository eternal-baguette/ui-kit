import {readFileSync} from 'node:fs';

const buenoJsonPath = new URL('../../bueno/package.json', import.meta.url);
const buenoJson = JSON.parse(readFileSync(buenoJsonPath, 'utf-8'));

const headlessJsonPath = new URL(
  '../../headless/package.json',
  import.meta.url
);
const headlessJson = JSON.parse(readFileSync(headlessJsonPath, 'utf-8'));

const isNightly = process.env.IS_NIGHTLY === 'true';
const isPrRelease =
  process.env.IS_PRERELEASE === 'true' && process.env.PR_NUMBER;
console.log(
  `isNightly: ${isNightly}, isPrRelease: ${isPrRelease}, PR_NUMBER: ${process.env.PR_NUMBER}`
);
const headlessVersion = isNightly
  ? `v${headlessJson.version.split('.').shift()}-nightly`
  : isPrRelease
    ? `v${headlessJson.version.split('-').shift()}.${process.env.PR_NUMBER}`
    : `v${headlessJson.version}`;

const buenoVersion = isNightly
  ? `v${buenoJson.version.split('.').shift()}-nightly`
  : isPrRelease
    ? `v${buenoJson.version.split('-').shift()}.${process.env.PR_NUMBER}`
    : `v${buenoJson.version}`;

export function generateExternalPackageMappings() {
  return {
    '@eternal-baguette/headless/commerce': {
      cdn: `/headless/${headlessVersion}/commerce/headless.esm.js`,
    },
    '@eternal-baguette/headless/insight': {
      cdn: `/headless/${headlessVersion}/insight/headless.esm.js`,
    },
    '@eternal-baguette/headless/recommendation': {
      cdn: `/headless/${headlessVersion}/recommendation/headless.esm.js`,
    },
    '@eternal-baguette/headless/case-assist': {
      cdn: `/headless/${headlessVersion}/case-assist/headless.esm.js`,
    },
    '@eternal-baguette/headless': {
      cdn: `/headless/${headlessVersion}/headless.esm.js`,
    },
    '@eternal-baguette/bueno': {
      cdn: `/bueno/${buenoVersion}/bueno.esm.js`,
    },
  };
}
