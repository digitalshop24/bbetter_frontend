import gulp from 'gulp';
import concat from 'gulp-concat';
import insert from 'gulp-insert';
import uglify from 'uglify-js';
import config from '../config/vendor.json';
import generateSwaggerApi from './swagger';

export default gulp.task('vendor', ['vendor:scripts', 'vendor:styles', 'vendor:fonts']);

gulp.task('vendor:scripts', () => {
  const swaggerSource = generateSwaggerApi();
  console.log(swaggerSource);
  const uglifiedSource = uglify.minify(swaggerSource, {fromString: true}).code;

  return gulp.src(config.scripts)
    .pipe(concat('vendor.min.js'))
    .pipe(insert.append(uglifiedSource))
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
