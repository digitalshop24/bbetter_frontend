import gulp from 'gulp';
import concat from 'gulp-concat';
import config from '../config/vendor.json';

export default gulp.task('vendor', ['vendor:scripts', 'vendor:styles', 'vendor:fonts']);

gulp.task('vendor:scripts', () => {
  return gulp.src(config.scripts)
    .pipe(concat('vendor.min.js'))
    .pipe(gulp.dest('public/'));
});

gulp.task('vendor:styles', () => {
  return gulp.src(config.styles)
    .pipe(concat('vendor.min.css'))
    .pipe(gulp.dest('public/'));
});

gulp.task('vendor:fonts', () => {
  return gulp.src(config.fonts)
    .pipe(gulp.dest('public/fonts'));
});
