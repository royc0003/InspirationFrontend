var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  devServer: {
    contentBase: "./dist",
    historyApiFallback: true,
    hot: true,
},
  entry: [
    './client/inspiration.js'
  ],
  output: {
    clean: true,
    path: path.join(__dirname, "dist"),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': "'production'"
      }
    })
  ],
  module: {
    loaders: [
    // js
    {
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'client')
    },
    // CSS
    { 
      test: /\.styl$/, 
      include: path.join(__dirname, 'client'),
      loader: 'style-loader!css-loader!stylus-loader'
    }
    ]
  }
};
