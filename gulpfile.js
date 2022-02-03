/* eslint-disable */

global.$ = {
  gulp: require('gulp'),
  gp: require('gulp-load-plugins')(),
  config: require('./gulp/configs/config'),
  path: {
    tasks: require('./gulp/configs/tasks.js'),
  },

  browserSync: require('browser-sync').create(),
  del: require('del'),
  exec: require('child_process').exec,
  fs: require('fs'),
  webpack: require('webpack-stream'),
  merge: require('merge-stream'),
};

$.path.tasks.forEach(function(taskPath) {
  require(taskPath)();
});

$.gulp.task(
  'core',
  $.gulp.parallel(
    // 'html',
    'pug',
    'css:vendor',
    'sass',
    // 'js:vendor',
    // 'js:app',
    'js:app-minify'
  )
);

$.gulp.task('dev:assets', $.gulp.parallel('dev:fonts', 'dev:images'));

$.gulp.task('build:assets', $.gulp.parallel('build:fonts', 'build:images'));

$.gulp.task(
  'dev:images',
  $.gulp.series(
    'images:minify',
    $.gulp.parallel('dev.images:sprite', 'dev.svg:sprite')
  )
);

$.gulp.task(
  'build:images',
  $.gulp.series(
    'images:minify',
    $.gulp.parallel('dev.images:sprite', 'dev.svg:sprite')
  )
);

$.gulp.task(
  'default',
  $.gulp.series(
    'clean',
    'js:lint',
    'sass:lint',
    'dev:images',
    'core',
    'dev:assets',
    $.gulp.parallel('watch', 'serve')
  )
);

$.gulp.task(
  'build',
  $.gulp.series('clean', 'build:images', 'core', 'build:assets')
);
