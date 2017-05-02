var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
  return gulp.src('stylesheets/scss/*.scss')
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(autoprefixer('last 2 versions'))
        .pipe(gulp.dest('./public/css/'));
});

gulp.task('watch', function () {
  gulp.watch('stylesheets/scss/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);
