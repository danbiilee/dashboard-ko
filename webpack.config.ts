import path from 'path';
import childProcess from 'child_process';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import webpack, { Configuration as WebpackConfiguration } from 'webpack';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const isDevelopment = process.env['NODE_ENV'] !== 'production';

const removeNewLine = (buffer: Buffer) => {
  return buffer.toString().replace('\n', '');
};
const banner = `/*
  Build Date :: ${new Date().toLocaleString()}
  Commit Version :: ${removeNewLine(childProcess.execSync('git rev-parse --short HEAD'))}
  Auth.name :: ${removeNewLine(childProcess.execSync('git config user.name'))}
*/`;

const config: Configuration = {
  name: 'kolonbenit-setting',
  mode: isDevelopment ? 'development' : 'production',
  entry: {
    app: './src/index.tsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: isDevelopment ? '[name].js' : '[name].[contenthash].js',
    assetModuleFilename: 'assets/[hash][ext][query]',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: { browsers: ['last 2 chrome versions'] },
                debug: isDevelopment,
              },
            ],
            '@babel/preset-react',
            '@babel/preset-typescript',
          ],
          env: {
            development: {
              plugins: [require.resolve('react-refresh/babel')],
            },
          },
        },
        exclude: path.join(__dirname, 'node_modules'),
      },
      {
        test: /\.(p|s)?css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.(svg|png|jpe?g|gif|ico)$/i,
        type: 'asset/resource',
      },
      {
        test: /.(woff2?|eot|(o|t)tf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@images': path.resolve(__dirname, 'src/assets/images'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@layouts': path.resolve(__dirname, 'src/layouts'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@contexts': path.resolve(__dirname, 'src/contexts'),
      '@customUtils': path.resolve(__dirname, 'src/utils'),
      '@customTypes': path.resolve(__dirname, 'src/types'),
    },
  },
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  devtool: isDevelopment ? 'eval-cheap-module-source-map' : false,
  devServer: {
    port: 4000,
    static: { directory: path.join(__dirname, 'public') },
    historyApiFallback: true,
    compress: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './public/index.html',
    }),
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
    new webpack.EnvironmentPlugin({ NODE_ENV: isDevelopment ? 'development' : 'production' }),
    new CopyPlugin({
      patterns: [
        {
          from: './public/lib',
          to: './lib',
        },
        {
          from: './public/config',
          to: './config',
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: isDevelopment ? '[name].css' : '[name].[contenthash].css',
    }),
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /ko/),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          format: {
            preamble: banner,
            comments: false,
          },
        },
        extractComments: false,
        exclude: /config\//,
      }),
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            'default',
            {
              discardComments: { removeAll: true },
            },
          ],
        },
      }),
    ],
    splitChunks: {
      minSize: 250000,
      maxSize: 512000,
    },
  },
};

if (isDevelopment && config.plugins) {
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
  config.plugins.push(new ReactRefreshWebpackPlugin());
}
if (!isDevelopment && config.plugins) {
  config.plugins.push(
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: `report_${Date.now()}.html`,
      openAnalyzer: false,
    }),
  );
}

export default config;
