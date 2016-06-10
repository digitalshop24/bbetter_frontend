import webpack from 'webpack';
import defaultWebpackConfig from './webpack';

const { plugins = [] } = defaultWebpackConfig;

export default Object.assign({}, defaultWebpackConfig, {
    devtool: '#inline-source-map',
    plugins: [
      ...plugins,
      new webpack.DefinePlugin({ DEVELOPMENT: true, PRODUCTION: false }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ]
});
