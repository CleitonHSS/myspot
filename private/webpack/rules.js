const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');

const assetsPath = path.resolve(`${__dirname}/../../src/assets`);
const fontsPath = path.resolve(`${__dirname}/../../src/assets/fonts`);
const fileName = `./assets/[name]-[hash:5].[ext]`;
const fontsName = `./assets/fonts/[name].[ext]`;

const ifDev = (rules) => {
  if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'localhml') {
    rules.rules.unshift({
      test: /\.js$/,
      use: ['source-map-loader'],
      enforce: 'pre',
      exclude: /node_modules/
    });
  }
  return rules;
};

const devMode = process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'localhml';

const rules = {
  rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader']
    },
    {
      test: /\.(jpg|png|svg)/,
      include: assetsPath,
      exclude: [fontsPath, /node_modules/],
      use: {
        loader: 'file-loader',
        options: {name: fileName}
      }
    },
    {
      test: /\.(png|jpg|gif|svg)$/,
      exclude: /node_modules/,
      use: 'url-loader?limit=10000&name=assets/images/[name].[hash:8].[ext]'
    },
    {
      test: /\.(css|sass|scss)$/,
      use: [
        devMode ? require.resolve('style-loader') : MiniCssExtractPlugin.loader,
        {
          loader: require.resolve('css-loader'),
          options: {
            importLoaders: 1
          }
        },
        {
          loader: require.resolve('postcss-loader'),
          options: {
            ident: 'postcss',
            plugins: () => [
              require('postcss-flexbugs-fixes'),
              autoprefixer({
                browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9'],
                flexbox: 'no-2009'
              })
            ]
          }
        }
      ]
    },
    {
      test: /\.less$/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            url: false,
            minimize: true,
            sourceMap: true
          }
        },
        {
          loader: 'less-loader',
          options: {
            sourceMap: true
          }
        }
      ]
    },
    {
      test: /\.(ico|otf|pdf)/,
      include: assetsPath,
      exclude: /node_modules/,
      use: {
        loader: 'file-loader',
        options: {name: fileName}
      }
    },
    {
      test: /\.(eot|ttf|woff|woff2|svg)(\?v=\d+\.\d+\.\d+)?$/,
      include: fontsPath,
      exclude: /node_modules/,
      use: {
        loader: 'file-loader',
        options: {name: fontsName}
      }
    }
  ]
};

module.exports = ifDev(rules);
