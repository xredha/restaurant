const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const {InjectManifest} = require('workbox-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;
const ImageminMozjpeg = require('imagemin-mozjpeg');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/scripts/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      maxSize: 70000,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      automaticNameDelimiter: '~',
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.(png|jpg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/templates/index.html'),
      filename: 'index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
          globOptions: {
            ignore: [
              '**/images',
              '**/icons/icon_manifest',
            ],
          },
        },
      ],
    }),
    new WebpackPwaManifest({
      name: 'Restobook',
      short_name: 'Restobook',
      description: 'Tempat Menemukan Restoran Terbaik',
      background_color: '#FFA45B',
      theme_color: '#FFA45B',
      crossorigin: 'use-credentials',
      icons: [
        {
          src: path.resolve('src/public/icons/icon_manifest/icon-72x72.png'),
          size: '72x72',
          destination: path.join('icons', 'icon_manifest'),
        },
        {
          src: path.resolve('src/public/icons/icon_manifest/icon-96x96.png'),
          size: '96x96',
          destination: path.join('icons', 'icon_manifest'),
        },
        {
          src: path.resolve('src/public/icons/icon_manifest/icon-128x128.png'),
          size: '128x128',
          destination: path.join('icons', 'icon_manifest'),
        },
        {
          src: path.resolve('src/public/icons/icon_manifest/icon-144x144.png'),
          size: '144x144',
          destination: path.join('icons', 'icon_manifest'),
        },
        {
          src: path.resolve('src/public/icons/icon_manifest/icon-152x152.png'),
          size: '152x152',
          destination: path.join('icons', 'icon_manifest'),
        },
        {
          src: path.resolve('src/public/icons/icon_manifest/icon-192x192.png'),
          size: '192x192',
          destination: path.join('icons', 'icon_manifest'),
        },
        {
          src: path.resolve('src/public/icons/icon_manifest/icon-384x384.png'),
          size: '384x384',
          destination: path.join('icons', 'icon_manifest'),
        },
        {
          src: path.resolve('src/public/icons/icon_manifest/icon-512x512.png'),
          size: '512x512',
          purpose: 'any maskable',
          destination: path.join('icons', 'icon_manifest'),
        },
      ],
      options: {
        filename: 'manifest.json',
        name: 'App',
      },
    }),
    new InjectManifest({
      swSrc: './src/scripts/sw.js',
      swDest: 'sw.js',
      exclude: [
        /sw\.js$/,
      ],
    }),
    new ImageminWebpackPlugin({
      plugins: [
        ImageminMozjpeg({
          quality: 50,
          progressive: true,
        }),
      ],
    }),
    new BundleAnalyzerPlugin(),
  ],
};
