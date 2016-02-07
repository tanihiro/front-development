// ==== MAIN ==== //

var gulp = require('gulp');

gulp.task('default', ['webserver']);

// Build a working copy of the theme
gulp.task('build', ['images', 'scripts', 'styles', 'theme']);

// Dist task chain: wipe -> build -> clean -> copy -> images/styles
gulp.task('dist', ['images-dist', 'styles-dist']);
