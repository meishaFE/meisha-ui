'use strict'

var gulp = require('gulp')
var sass = require('gulp-sass')
var autoprefixer = require('gulp-autoprefixer')
var cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')
var pkg = require('../package.json')

gulp.task('compile', function() {
  return gulp
    .src('../src/styles/index.scss')
    .pipe(sass.sync())
    .pipe(
      autoprefixer({
        browsers: pkg.browserslist,
        cascade: false
      })
    )
    .pipe(cssmin())
    .pipe(rename('meisha.css'))
    .pipe(gulp.dest('../dist/styles'))
})

// 拷贝字体文件
gulp.task('fonts', function() {
  gulp.src('../src/styles/common/iconfont/fonts/*.*').pipe(gulp.dest('../dist/styles/fonts'))
})

gulp.task('default', ['compile', 'fonts'])
