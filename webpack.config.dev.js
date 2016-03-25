var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    './src/index'
  ],
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.scss']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
    }, {
      test: /\.scss$/,
      loaders: [
        'style-loader',
        'css-loader',
        'autoprefixer?browsers=last 2 version',
        'sass-loader?includePaths[]=' + path.join(__dirname, 'src/styles')
      ]
    }, {
      test: /\.tsx?$/,
      loader: 'babel!ts-loader'
    }]
  },
  devServer: {
    contentBase: './dist',
    hot: true
  }
};
