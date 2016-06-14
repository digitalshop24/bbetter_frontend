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
    'angular': 'angular',
    'swagger-client': 'SwaggerClient'
  },
  resolve: {
    extensions: ['', '.js', '.json', '.html', '.scss']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: ExtractText.extract('style', 'css')
      },
      {
        test: /\.scss$/,
        loader: ExtractText.extract('style', 'css!sass'),
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loaders: [
          'file-loader?name=img/[hash].[ext]',
          'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
        ]
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
    new NgAnnotate({add: true}),
    new ExtractText('app.min.css', {allChunks: true})
  ]
};
