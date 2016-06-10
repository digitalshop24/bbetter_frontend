import webpack from 'webpack';
import ngAnnotate from 'ng-annotate-webpack-plugin';
import path from 'path';

export default {
  entry: './src/index.js',
  output: {
    path: path.resolve(process.cwd(), 'public'),
    publicPath: '/',
    filename: 'app.min.js'
  },
  externals: {
    angular: true
  },
  resolve: {
    extensions: ['', '.js', '.html']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: 'file?name=/img/[name].[ext]'
      },
      {
        test: /\.(woff|woff2|ttf|eot)$/,
        loader: 'file?name=/fonts/[name].[ext]'
      }
    ]
  },
  plugins: [
    new ngAnnotate({
      add: true
    })
  ]
}
