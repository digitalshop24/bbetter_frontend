import webpack from 'webpack';
import NgAnnotate from 'ng-annotate-webpack-plugin';
import ExtractText from 'extract-text-webpack-plugin';
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
    extensions: ['', '.js', '.html', '.scss']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loader: ExtractText.extract('style', 'css!sass'),
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: 'file-loader?name=img/[hash].[ext]'
      },
      {
        test: /\.(woff|woff2|ttf|eot|otf)$/,
        loader: 'file-loader?name=fonts/[hash].[ext]'
      },
      {
        test: /\.html$/,
        loader: 'html'
      }
    ]
  },
  plugins: [
    new NgAnnotate({ add: true }),
    new ExtractText('app.min.css', { allChunks: true })
  ]
}
