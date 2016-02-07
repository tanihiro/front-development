// ==== HTML ==== //

var gulp    = require('gulp');
var plugins = require('gulp-load-plugins')({ camelize: true });
var config  = require('../../gulpconfig').html;

gulp.task('html', function() {
  return gulp.src(config.src)
    .pipe(plugins.ejs())
    .pipe(plugins.rename({ extname: '.html' }))
    .pipe(gulp.dest(config.dest));
});
