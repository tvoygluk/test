'use strict';

const path = require('path');

const cssnano = require('cssnano');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const { CleanWebpackPlugin: CleanPlugin } = require('clean-webpack-plugin');
const dotenv = require('dotenv');
const HtmlPlugin = require('html-webpack-plugin');
const CssExtractPlugin = require('mini-css-extract-plugin');
const CssOptimizationPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { EnvironmentPlugin, ProgressPlugin } = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const PATH = {
  SRC: path.join(__dirname, 'src'),
  DIST: path.join(__dirname, 'dist'),
  DOTENV_LOCAL: path.join(__dirname, '.env.local'),
  ENTRY: path.join(__dirname, 'src/index.ts'),
  TEMPLATES: path.join(__dirname, 'src/pug/index.pug'),
  CSS_MODULES_IDENT_CONTEXT: path.join(__dirname, 'src/ts/components'),
};

const ALIAS = {
  '@': PATH.SRC,
  'common': path.join(__dirname, 'src/ts/components/common'),
  'components': path.join(__dirname, 'src/ts/components'),
  'react-dom': '@hot-loader/react-dom',
  'scss': path.join(__dirname, 'src/scss'),
  'store': path.join(__dirname, 'src/ts/store'),
  'ts': path.join(__dirname, 'src/ts'),
};

const getEnvPath = (envTarget) => path.join(__dirname, `.env.${envTarget}`);

module.exports = (env = {}) => {
  const {
    analyze: needAnalyze,
    target,
  } = env;

  process.env.NODE_ENV = target;

  dotenv.config({ path: PATH.DOTENV_LOCAL });
  dotenv.config({ path: getEnvPath(target) });
  const { PUBLIC_PATH, WDS_HOST, WDS_PORT } = process.env;

  const isDevelopment = (target === 'development');
  const isProduction = (target === 'production');
  const assetHash = isProduction ? '.[contenthash]' : '';

  const plugins = [
    new CaseSensitivePathsPlugin(),
    new CleanPlugin({
      cleanStaleWebpackAssets: false,
    }),
    new ProgressPlugin(),
    new EnvironmentPlugin([
      'API_HOST',
      'NODE_ENV',
      'PUBLIC_PATH',
    ]),
    new HtmlPlugin({
      filename: 'index.html',
      template: PATH.TEMPLATES,
    }),
    new CssExtractPlugin({
      filename: `css/[name]${assetHash}.css`,
    }),
  ];

  if (needAnalyze) {
    plugins.push(new BundleAnalyzerPlugin({
      analyzerPort: 9050,
    }));
  }

  return {
    context: PATH.SRC,

    devServer: isDevelopment ? {
      historyApiFallback: true,
      host: WDS_HOST,
      port: WDS_PORT,
      hot: true,
      inline: true,
      open: true,
      overlay: true,
      writeToDisk: false,
    } : {},

    devtool: isDevelopment ? 'eval-source-map' : false,

    entry: {
      app: ['react-hot-loader/patch', PATH.ENTRY],
    },

    mode: target,

    module: {
      rules: (() => {
        const scriptLoaderRule = {
          test: /\.[jt]sx?$/,
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        };

        const templateLoaderRule = {
          test: /\.pug$/,
          loader: 'pug-loader',
          options: {
            pretty: isDevelopment,
          },
        };

        const styleLoaderRule = {
          test: /\.s?css$/,
          use: [
            (isProduction ? CssExtractPlugin.loader : 'style-loader'),
            {
              loader: 'css-loader',
              options: {
                // TODO: customize localIdentName generator for dev mode
                modules: {
                  exportGlobals: true,
                  exportLocalsConvention: 'asIs',
                  exportOnlyLocals: false,
                  localIdentContext: PATH.CSS_MODULES_IDENT_CONTEXT,
                  localIdentName: isProduction ? '[hash:base64]' : '[path][local]',
                },
                esModule: true,
                importLoaders: 2,
                sourceMap: true,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: ['autoprefixer'],
                },
                sourceMap: true,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sassOptions: {
                  fiber: false,
                },
                sourceMap: true,
              },
            },
          ],
        };

        const getFileLoaderRule = ({ testRegexp, outputPath }) => ({
          test: testRegexp,
          loader: 'file-loader',
          options: {
            name: `[name]${assetHash}.[ext]`,
            outputPath,
          },
        });

        return [
          scriptLoaderRule,
          templateLoaderRule,
          styleLoaderRule,
          getFileLoaderRule({
            testRegexp: /\.ico$/,
            outputPath: 'favicons',
          }),
          getFileLoaderRule({
            testRegexp: /\.(jpe?g|png|svg)$/,
            outputPath: 'img',
          }),
          getFileLoaderRule({
            testRegexp: /\.woff2?$/,
            outputPath: 'fonts',
          }),
        ];
      })(),
    },

    optimization: (() => {
      const optimizationConfig = {
        nodeEnv: false,
        noEmitOnErrors: true,
        splitChunks: {
          chunks: 'all',
          minChunks: 2,
          cacheGroups: {
            default: false,
            reactDom: {
              name: 'react-dom',
              test: /[\\/]node_modules[\\/]@hot-loader[\\/]react-dom[\\/]/,
              priority: 1,
              enforce: true,
            },
            vendors: {
              name: 'vendors',
              test: /[\\/]node_modules[\\/]/,
              enforce: true,
            },
          },
        },
      };
      if (isProduction) {
        optimizationConfig.minimizer = [
          new TerserPlugin({
            extractComments: false,
            terserOptions: {
              compress: {
                drop_console: true,
                drop_debugger: true,
              },
              output: {
                comments: false,
              },
            },
          }),
          new CssOptimizationPlugin({
            assetNameRegExp: /\.css$/,
            cssProcessor: cssnano,
            cssProcessorPluginOptions: {
              preset: [
                'default',
                {
                  discardComments: true,
                },
                {
                  normalizeCharset: {
                    add: true,
                  },
                },
              ],
            },
            canPrint: true,
          }),
        ];
      }
      return optimizationConfig;
    })(),

    output: {
      filename: `js/[name]${assetHash}.js`,
      path: PATH.DIST,
      publicPath: PUBLIC_PATH,
    },

    plugins,

    resolve: {
      alias: ALIAS,
      extensions: [
        '.js',
        '.jsx',
        '.ts',
        '.tsx',
      ],
    },

    stats: (() => {
      const statsConfig = {
        colors: true,
      };
      if (isDevelopment) {
        Object.assign(statsConfig, {
          assets: false,
          entrypoints: false,
          modules: false,
        });
      }
      return statsConfig;
    })(),

    target: 'web',
  };
};
