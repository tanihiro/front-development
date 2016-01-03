// ==== UTILITIES ==== //

var gulp    = require('gulp');
var plugins = require('gulp-load-plugins')({ camelize: true });
var del     = require('del');
var config  = require('../../gulpconfig').utils;

gulp.task('utils-wipe', [], function() {
  return del(config.wipe);
});

gulp.task('utils-clean', ['build', 'utils-wipe'], function() {
  return del(config.clean);
});

gulp.task('utils-dist', ['utils-clean'], function() {
  return gulp.src(config.dist.src)
    .pipe(gulp.dest(config.dist.dest));
});

