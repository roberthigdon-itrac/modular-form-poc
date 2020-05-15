import filesize from 'rollup-plugin-filesize';
import { terser } from 'rollup-plugin-terser';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from '@rollup/plugin-replace';

export default {
  input: 'modular-form-poc.js',
  output: {
    file: 'modular-form-poc.bundled.js',
    format: 'es',
  },
  onwarn(warning) {
    if (warning.code !== 'THIS_IS_UNDEFINED') {
      console.error(`(!) ${warning.message}`);
    }
  },
  plugins: [
    replace({'Reflect.decorate': 'undefined'}),
    resolve({ jsnext: true, preferBuiltins: true, browser: true }),
    commonjs(),
    terser({
      module: true,
      warnings: true,
      mangle: {
        properties: {
          regex: /^__/,
        },
      },
    }),
    filesize({
      showBrotliSize: true,
    }),
  ]
}
