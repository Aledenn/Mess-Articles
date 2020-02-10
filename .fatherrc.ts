import { IBundleOptions } from 'father';

const options: IBundleOptions = {
  entry: 'index.js',
  esm: 'babel',
  cjs: 'babel',
  umd: {
    name: 'cbsama-ui',
    globals: {
      react: 'React',
    },
  },
  doc: {
    base: '/cbsama-ui/',
  },
  disableTypeCheck: true,
  preCommit: {
    eslint: true,
    prettier: true,
  },
  pkgs: ['cbsama-ui'],
};

export default options;
