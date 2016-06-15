import gulp from 'gulp';
import app from './app/build/tasks/app';
import vendor from './app/build/tasks/vendor';
import cleanup from './app/build/tasks/cleanup';
import watch from './app/build/tasks/watch';

gulp.task('build', ['vendor', 'app']);
gulp.task('rebuild', ['cleanup', 'build']);
gulp.task('dev-server', ['vendor', 'watch']);
