// ==== WATCH ==== //

var gulp    = require('gulp');
var plugins = require('gulp-load-plugins')({ camelize: true });
var config  = require('../../gulpconfig').watch;

gulp.task('watch', ['livereload'], function() {
  gulp.watch(config.src.styles, ['styles']);
  gulp.watch(config.src.scripts, ['scripts']);
  gulp.watch(config.src.images, ['images']);
  gulp.watch(config.src.theme, ['theme']);
  gulp.watch(config.src.livereload).on('change', function(file) {
    plugins.livereload.changed(file.path);
  });
});
