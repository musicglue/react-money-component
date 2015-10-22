import gulp from 'gulp';
import babel from 'gulp-babel';

gulp.task('default', () => {
  return gulp.src('./src/**')
             .pipe(babel())
             .pipe(gulp.dest('lib'));
});
