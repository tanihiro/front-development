// ==== STYLES ==== //

var gulp         = require('gulp');
var plugins      = require('gulp-load-plugins')({ camelize: true });
var config       = require('../../gulpconfig').styles;
var autoprefixer = require('autoprefixer');
var processors   = [autoprefixer(config.autoprefixer)];

gulp.task('styles-libsass', function() {
  return gulp.src(config.build.src)
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.sass(config.libsass))
    .pipe(plugins.postcss(processors))
    .pipe(plugins.sourcemaps.write('./')) // Writes an external sourcemap
    .pipe(gulp.dest(config.build.dest));
});

gulp.task('styles-dist', ['utils-dist'], function() {
  return gulp.src(config.dist.src)
    .pipe(plugins.cssnano())
    .pipe(gulp.dest(config.dist.dest));
});

gulp.task('styles', ['styles-libsass']);
