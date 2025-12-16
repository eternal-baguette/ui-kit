import {resolve} from 'node:path';

process.env.INIT_CWD = resolve('./projects/atomic-angular');
await import('@eternal-baguette/ci/bump-package.mjs');
