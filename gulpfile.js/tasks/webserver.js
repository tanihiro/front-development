// ==== WEB SERVER ==== //

var gulp    = require('gulp');
var plugins = require('gulp-load-plugins')({ camelize: true });
var config  = require('../../gulpconfig').webserver;

gulp.task('webserver', ['watch'], function() {
  return gulp.src(config.src)
    .pipe(plugins.webserver({ livereload: true }));
});
