/* import babel from 'rollup-plugin-babel';

export default {
  output: {
    file: './build/bundle.min.js',
    format: 'iife',
    name: 'bundle',
    globals: {
      preact: 'Preact',  
      'preact/hooks': 'preact/hooks',
    },
  },
  external: ['preact', 'preact/hooks'],
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
  ],
};
 */


import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

export default {
  input: 'lib/index.js',
  external: ['preact', 'preact/hooks'],
  output: [
    { file: pkg.main, format: 'cjs', exports: 'named' },
    { file: pkg.module, format: 'es', exports: 'named' },
  ],
  plugins: [
    resolve(),
    commonjs({ include: 'node_modules/**' }),
    babel({ exclude: 'node_modules/**' }),
    terser(),
  ],
};