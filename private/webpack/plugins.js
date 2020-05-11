const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const historyApiFallback = require('connect-history-api-fallback');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const proxyMiddleware = require('http-proxy-middleware');
const env = require('../env.config');

const copyPlugin = () => {
  if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'localhml') {
    return [
      {
        from: `${process.env.ROOT_PATH}src/index.html`,
        to: `${process.env.ROOT_PATH}`
      },
      {
        from: `${process.env.ROOT_PATH}src/assets/`,
        to: `${process.env.ROOT_PATH}assets/`,
        ignore: ['fonts/**/*']
      },
      {
        from: `${process.env.ROOT_PATH}src/assets/`,
        to: `${process.env.ROOT_PATH}myspot/assets/`,
        ignore: ['images/**/*']
      }
    ];
  }
  if (process.env.NODE_ENV === 'production') {
    return [
      {
        from: `${process.env.ROOT_PATH}src/index.html`,
        to: `${process.env.ROOT_PATH}`
      },
      {
        from: `${process.env.ROOT_PATH}src/assets/`,
        to: `${process.env.ROOT_PATH}assets/`
      }
    ];
  }
  return [
    {
      from: `${process.env.ROOT_PATH}src/index.html`,
      to: `${process.env.ROOT_PATH}`
    },
    {
      from: `${process.env.ROOT_PATH}src/assets/`,
      to: `${process.env.ROOT_PATH}assets/`,
      ignore: ['fonts/**/*']
    },
    {
      from: `${process.env.ROOT_PATH}src/assets/`,
      to: `${process.env.ROOT_PATH}/assets/`,
      ignore: ['images/**/*']
    }
  ];
};

const ifDev = (arr) => {
  let plugins = arr;
  if (process.env.NODE_ENV === 'production') {
    const UglyJS = new UglifyJsPlugin({});
    const IgnorePlugin = new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/);
    const NameModules = new webpack.NamedModulesPlugin();
    const NoEmit = new webpack.NoEmitOnErrorsPlugin();

    plugins.splice(2, 0, UglyJS);
    plugins = plugins.concat(IgnorePlugin, NameModules, NoEmit);
  }
  if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'localhml') {
    const config = {
      logLevel: 'debug',
      logPrefix: 'MySpot Frontend',
      host: 'localhost',
      port: 8111,
      cors: true,
      server: {
        baseDir: ['dist'],
        middleware: [
          proxyMiddleware('/api/', {
            target: 'http://localhost:8070',
            changeOrigin: true,
            logLevel: 'debug',
            pathRewrite: {
              '^/myspot/api/': ''
            }
          }),
          function (req, res, next) {
            res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
            res.setHeader('Access-Control-Allow-Origin', '*');
            next();
          },
          historyApiFallback()
        ]
      }
    };
    const BrowserSync = new BrowserSyncPlugin(config);
    const BundleAnalyser = new BundleAnalyzerPlugin({analyzerPort: 8101});
    plugins = plugins.concat(BrowserSync, BundleAnalyser);
  }
  return plugins;
};

const WEBPACK_NONCE = 'N2M0MDhkN2EtMmRkYi00MTExLWFhM2YtNDhkNTc4NGJhMjA3';

const initialPlugins = [
  new HtmlWebpackPlugin({
    hash: true,
    minify: {
      html5: true,
      collapseWhitespace: true,
      collapseInlineTagWhitespace: true,
      removeComments: true,
      removeRedundantAttributes: true,
      minifyJS: true
    },
    filename: 'index.html',
    template: './src/index.html'
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      ROOT_PATH: JSON.stringify(process.env.ROOT_PATH),
      HOST: JSON.stringify(process.env.HOST),
      PORT: JSON.stringify(process.env.PORT),
      API_BASE_URL_EXTERNAL: JSON.stringify(process.env.API_BASE_URL_EXTERNAL),
      API_URL: JSON.stringify(env.API_URL),
      SPOTIFY_AUTHORIZE_URL: JSON.stringify(env.SPOTIFY_AUTHORIZE_URL),
      SPOTIFY_AUTH_SCOPES: JSON.stringify(env.SPOTIFY_AUTH_SCOPES),
      SPOTIFY_CLIENT_ID: JSON.stringify(env.SPOTIFY_CLIENT_ID)
    },
    __ENV__: false,
    'global.__webpack_nonce__': JSON.stringify(WEBPACK_NONCE)
  }),
  new CleanWebpackPlugin(['dist'], {
    root: path.resolve(__dirname, '../../')
  }),
  new MiniCssExtractPlugin({
    filename: 'styles.css'
  }),
  new CopyWebpackPlugin(copyPlugin()),
  new webpack.optimize.AggressiveMergingPlugin({
    minSizeReduce: 1.5,
    moveToParents: true
  }),
  new webpack.optimize.ModuleConcatenationPlugin()
];
//ddd
module.exports = ifDev(initialPlugins);
