// ==== MAIN ==== //

var gulp = require('gulp');
var buildTask  = require('../../gulpconfig').build;

gulp.task('default', ['webserver']);

// Build a working copy of the theme
gulp.task('build', buildTask);

// Dist task chain: wipe -> build -> clean -> copy -> images/styles
gulp.task('dist', ['images-dist', 'styles-dist']);
