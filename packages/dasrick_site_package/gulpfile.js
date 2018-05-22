const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('img', function () {
  return gulp
    .src('Resources/Public/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('Resources/Public'))
});

gulp.task('copy-bootstrap', function () {
  return gulp
    .src('./node_modules/dasrick-bootstrap/dist/**/*.{css,js,map}')
    .pipe(gulp.dest('Resources/Public/Libs/dasrick-bootstrap'));
});

gulp.task('default', ['img', 'copy-bootstrap']);
