// rollup.config.js
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import resolve from '@rollup/plugin-node-resolve'
import pkg from './package.json'
import image from '@rollup/plugin-image'
import replace from '@rollup/plugin-replace'
import { terser } from 'rollup-plugin-terser'

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: 'dist/index.iife.js',
      format: 'iife',
    },
    {
      file: 'dist/index.umd.js',
      format: 'umd',
      name: 'umdBundle',
    },
    {
      file: 'dist/index.system.js',
      format: 'system',
    },
    {
      file: 'dist/index.amd.js',
      format: 'amd',
    },
    {
      file: pkg.module,
      format: 'es',
    },
  ],
  external: ['react', ''],
  plugins: [
    resolve(),
    commonjs(),
    terser(),
    typescript({
      useTsconfigDeclarationDir: true,
    }),
    image(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
}
