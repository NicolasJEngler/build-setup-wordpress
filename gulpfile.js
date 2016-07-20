var gulp = require('gulp'),
    sass = require('gulp-sass'),
    postcss = require('gulp-postcss'),
    cssNext = require('postcss-cssnext'),
    concatCss = require('gulp-concat-css'),
    cssnano = require('gulp-cssnano'),
    del = require('del'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

// gulp css - uses cssnext for prefixing and future css, concatenates all CSS files, and minifies the result
gulp.task('css', function () {
  return (
    gulp.src('./styles/src/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(concatCss('all.css'))
    .pipe(postcss([
      cssNext()
    ]))
    .pipe(cssnano())
    .pipe(gulp.dest('./styles/dist/'))
  )
});

gulp.task('scripts', function() {
  var source = './js/src/';
  return gulp.src([
      // source + 'scripts.js'
    ])
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./js/dist/'));
});

// gulp clean - cleans the dist folder
gulp.task('clean', function () {
  return del([
    './styles/dist/**/*',
    './js/dist/**/*'
  ]);
});

gulp.task('watch', ['build'], function() {
  gulp.watch('./styles/src/**/*.scss', ['css']);
  gulp.watch('./js/src/**/*.js', ['scripts']);
});

gulp.task('build', ['css', 'scripts']);

gulp.task('default', ['watch']);
