const babelJest = require('babel-jest');

module.exports = babelJest.default.createTransformer({
  presets: [
    [
      '@babel/preset-env',
      {
        targets: { node: 'current' },
        modules: 'commonjs',
      },
    ],
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
    [
      '@babel/preset-typescript',
      {
        allowNamespaces: true,
      },
    ],
  ],
  babelrc: false,
  configFile: false,
});
