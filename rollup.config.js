import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';

export default [
  {
    input: 'dist/index.js',
    output: {
      file: 'public/js/bundle.js',
      format: 'iife',
      sourcemap: true
    },
    plugins: [
      nodeResolve({
        jsnext: true,
        main: true,
        browser: true,
      }),
      commonjs(),
    ]
  }
];
