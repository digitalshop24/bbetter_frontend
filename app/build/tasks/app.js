import gulp from 'gulp';
import util from 'gulp-util';
import webpack from 'webpack';
import config from '../config/webpack.prod';

export default gulp.task('app', callback => {
  webpack(config, (err, stats) => {
    if (err) throw new util.PluginError("webpack", err);

    util.log("[webpack]", stats.toString({
      exclude: ['node_modules'],
      colors: true
    }));

    callback();
  });
});
