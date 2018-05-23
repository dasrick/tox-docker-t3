const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('img', function () {
  return gulp
    .src('Resources/Public/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('Resources/Public'))
});

gulp.task('copy-dasrick-bootstrap', function () {
  return gulp
    .src('./node_modules/dasrick-bootstrap/dist/**/*.{css,js,map}')
    .pipe(gulp.dest('Resources/Public/Libs/dasrick-bootstrap'));
});
gulp.task('copy-dasrick-styleguide', function () {
  return gulp
    .src('./node_modules/dasrick-styleguide/public/css/style.css')
    .pipe(gulp.dest('Resources/Public/Libs/dasrick-styleguide'));
});
gulp.task('copy-open-sans', function () {
  return gulp
    .src('./node_modules/npm-font-open-sans/**/*.{css,eot,svg,ttf,woff,woff2}')
    .pipe(gulp.dest('Resources/Public/Libs/npm-font-open-sans'));
});
gulp.task('copy-open-sans-condensed', function () {
  return gulp
    .src('./node_modules/npm-font-open-sans-condensed/**/*.{css,eot,svg,ttf,woff,woff2}')
    .pipe(gulp.dest('Resources/Public/Libs/npm-font-open-sans-condensed'));
});
gulp.task('copy-font-awesome', function () {
  return gulp
    .src('./node_modules/font-awesome/**/*.{css,map,eot,svg,ttf,woff,woff2}')
    .pipe(gulp.dest('Resources/Public/Libs/font-awesome'));
});

gulp.task('default', ['img', 'copy-dasrick-bootstrap', 'copy-dasrick-styleguide', 'copy-open-sans', 'copy-open-sans-condensed', 'copy-font-awesome']);
