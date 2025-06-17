import { heroui } from '@heroui/react';
export const content = [
  './src/**/*.{js,ts,jsx,tsx}',
  './node_modules/@heroui/react/dist/**/*.{js,ts,jsx,tsx}'
];
export const theme = {
  extend: {}
};
export const darkMode = 'class';
export const plugins = [heroui()];
