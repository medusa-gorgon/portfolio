module.exports = () => {
  $.gulp.task('build:fonts', () => {
    return $.gulp
      .src(`${$.config.dev}/portfolio/fonts/**/*.*`, {
        since: $.gulp.lastRun('build:fonts'),
      })
      .pipe($.gulp.dest(`${$.config.build}/fonts`));
  });
};
