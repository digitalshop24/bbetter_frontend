import gulp from 'gulp';
import util from 'gulp-util';
import webpack from 'webpack';
import DevServer from 'webpack-dev-server';
import config from '../config/webpack.dev';

export default gulp.task('watch', callback => {
  const compiler = webpack(config);

  new DevServer(compiler, {
      hot: true,
      inline: true,
      historyApiFallback: true,
      stats: {
        colors: true,
        exclude: ['node_modules']
      },
      contentBase: 'public'
    })
    .listen(8080, err => {
      if (err) throw new util.PluginError("webpack-dev-server", err);

      util.log('[webpack-dev-server] starts on port localhost:8080')
    });
});
