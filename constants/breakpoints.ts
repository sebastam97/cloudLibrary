export const size = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400
};

export enum sizeNamed {
  sm = 576,
  md = 768,
  lg = 992,
  xl = 1200,
  xxl = 1400
}

export const device = {
  sm: `@media (min-width: ${size.sm}px)`,
  md: `@media (min-width: ${size.md}px)`,
  lg: `@media (min-width: ${size.lg}px)`,
  xl: `@media (min-width: ${size.xl}px)`,
  xxl: `@media (min-width: ${size.xxl}px)`
};
