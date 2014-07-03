'use strict';

var gulp = require('gulp');
var sauce = require('gulp-cortex-html-sauce');
var rename = require('gulp-rename');

var dest = './';


gulp.task('default', function() {
  gulp.src(["demo.html"])
    .pipe(sauce({
      base: dest
    }))
    .pipe(rename(function(path) {
      path.basename = 'index';
    }))
    .pipe(gulp.dest(dest));
});