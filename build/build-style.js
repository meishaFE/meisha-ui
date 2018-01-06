'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');
const pkg = require('../package.json');

gulp.task('compile', function() {
  return gulp
    .src('../packages/theme-default/src/*.scss')
    .pipe(sass.sync())
    .pipe(
      autoprefixer({
        browsers: pkg.browserslist,
        cascade: false
      })
    )
    .pipe(cssmin())
    .pipe(gulp.dest('../lib/styles/'));
});

// 拷贝字体文件
gulp.task('fonts', function() {
  gulp.src('../packages/theme-default/src/fonts/*.*').pipe(gulp.dest('../lib/styles/fonts'));
});

gulp.task('build', ['compile', 'fonts']);
