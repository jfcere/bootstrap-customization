const autoprefixer = require('autoprefixer');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [{
  entry: ['./index.scss', './index.js'],
  output: {
    filename: 'bundle.js',
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'bundle.css',
            },
          },
          { loader: 'extract-loader' },
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer()]
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: ['./node_modules'],
              }
            },
          },
        ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env'],
        },
      }
    ]
  },
  plugins: [
    new CopyPlugin([
      {
        from: 'package.json',
        to: 'package.json',
      },
    ]),
    new HtmlWebpackPlugin({
      template: './index.html',
      minify: {
        collapseInlineTagWhitespace: true,
        collapseWhitespace: true,
        conservativeCollapse: false,
      },
    }),
  ],
}];