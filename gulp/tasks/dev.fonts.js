module.exports = () => {
  $.gulp.task('dev:fonts', () => {
    return $.gulp
      .src(`${$.config.dev}/portfolio/fonts/**/*.*`, {
        since: $.gulp.lastRun('dev:fonts'),
      })
      .pipe($.gulp.dest(`${$.config.build}/portfolio/fonts`));
  });
};
