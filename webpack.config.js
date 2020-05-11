const path = require('path');
const watch = process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'localhml';
const publicPath = watch ? '/' : '/myspot/';
const plugins = require('./private/webpack/plugins');
const rules = require('./private/webpack/rules');

module.exports = {
  mode: watch ? 'development' : 'production',
  context: __dirname,
  //Content 
  entry: './src/index.js',
  // A SourceMap without column-mappings ignoring loaded Source Maps. 
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath,
  },
  module: rules,
  watch,
  plugins,
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'styled-components': path.resolve(__dirname, './node_modules', 'styled-components'),
      Components: path.resolve(__dirname, './src/components'),
      Atoms: path.resolve(__dirname, './src/components/atoms'),
      Molecules: path.resolve(__dirname, './src/components/molecules'),
      Organisms: path.resolve(__dirname, './src/components/organisms'),
      Themes: path.resolve(__dirname, './src/config/themes')
    }
   },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  }
}
