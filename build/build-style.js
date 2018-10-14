'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');
const pkg = require('../package.json');

const task = gulp
  .src('../packages/theme-default/src/*.scss')
  .pipe(sass.sync())
  .pipe(
    autoprefixer({
      browsers: pkg.browserslist,
      cascade: false
    })
  )
  .pipe(cssmin());

gulp.task('testCompile', function() {
  return task.pipe(gulp.dest('../packages/theme-default/lib/'));
});

gulp.task('compile', function() {
  return task.pipe(gulp.dest('../lib/styles/'));
});

// 拷贝字体文件
gulp.task('testFonts', function() {
  gulp.src('../packages/theme-default/src/fonts/*.*').pipe(gulp.dest('../packages/theme-default/lib/fonts'));
});

gulp.task('fonts', function() {
  gulp.src('../packages/theme-default/src/fonts/*.*').pipe(gulp.dest('../lib/styles/fonts'));
});

gulp.task('build', ['compile', 'fonts']);
gulp.task('test', ['testCompile', 'testFonts']);
