// ==== IMAGES ==== //

var gulp    = require('gulp');
var plugins = require('gulp-load-plugins')({ camelize: true });
var config  = require('../../gulpconfig').images;

gulp.task('images', function() {
  return gulp.src(config.build.src)
  .pipe(plugins.changed(config.build.dest))
  .pipe(gulp.dest(config.build.dest));
});

// Optimize images in the `dist` folder (slow)
gulp.task('images-dist', ['utils-dist'], function() {
  return gulp.src(config.dist.src)
  .pipe(plugins.imagemin(config.imagemin))
  .pipe(gulp.dest(config.dist.dest));
});
