const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('img', function () {
  return gulp
    .src('Resources/Public/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('Resources/Public'))
});

gulp.task('default', ['img']);
