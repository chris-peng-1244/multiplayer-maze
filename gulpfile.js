const gulp = require('gulp');
const browserify = require('gulp-browserify');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');

function scripts() {
  return gulp.src('src/js/app.js')
  .pipe(browserify({
    insertGlobals: true,
  }))
  .pipe(gulp.dest('./public/js'))
}

function css() {
  return gulp.src('src/sass/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./public/css'));
}

exports.default = scripts;
exports.css = css;
