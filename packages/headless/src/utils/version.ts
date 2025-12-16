export const VERSION = process.env.VERSION || 'Test version';

export const COVEO_FRAMEWORK = [
  '@eternal-baguette/atomic',
  '@eternal-baguette/quantic',
] as const;

export type CoveoFramework = (typeof COVEO_FRAMEWORK)[number];
