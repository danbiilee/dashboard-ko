import path from 'path';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import webpack, { Configuration as WebpackConfiguration } from 'webpack';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import moment from 'moment';

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const isDevelopment = process.env['NODE_ENV'] !== 'production';

const config: Configuration = {
  name: 'setup-test',
  mode: isDevelopment ? 'development' : 'production',
  devtool: isDevelopment ? 'hidden-source-map' : 'eval',
  devServer: {
    port: 4000,
    static: { directory: path.join(__dirname, 'public') },
    historyApiFallback: true,
    compress: true,
  },
  entry: {
    app: './src/index.tsx',
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
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
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
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './public/index.html',
    }),
    new ForkTsCheckerWebpackPlugin({
      async: false,
      // eslint: {
      //   files: "./src/**/*",
      // },
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
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: isDevelopment ? '[name].js' : '[name].[contenthash].js',
    assetModuleFilename: 'assets/[name].[contenthash][ext]',
    clean: true,
  },
};

if (isDevelopment && config.plugins) {
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
  config.plugins.push(new ReactRefreshWebpackPlugin());
  // config.plugins.push(new BundleAnalyzerPlugin({ analyzerMode: 'server', openAnalyzer: false }));
}
if (!isDevelopment && config.plugins) {
  config.plugins.push(new webpack.LoaderOptionsPlugin({ minimize: true }));
  config.plugins.push(
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: `bundle-report-${moment().format('YYYY-MM-DD-HH-mm-ss')}.html`,
    }),
  );
}

export default config;
