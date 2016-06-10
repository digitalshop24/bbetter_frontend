import gulp from 'gulp';
import clean from 'del';

export default gulp.task('cleanup', () => {
  return clean([
    'public/**/*',
    '!public/index.html',
    '!public/favicon.ico'
  ]);
});
