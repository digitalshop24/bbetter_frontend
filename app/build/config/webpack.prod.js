import webpack from 'webpack';
import defaultWebpackConfig from './webpack';

const { plugins = [] } = defaultWebpackConfig;

export default Object.assign({}, defaultWebpackConfig, {
  plugins: [
      ...plugins,
      new webpack.DefinePlugin({ DEVELOPMENT: false, PRODUCTION: true }),
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: false,
        compress: {
          warnings: false
        }
      })
    ]
});
