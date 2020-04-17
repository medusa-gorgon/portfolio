module.exports = () => {
  $.gulp.task('fonts', () => {
    return $.gulp
      .src(`${$.config.dev}/fonts/**/*.*`, { since: $.gulp.lastRun('fonts') })
      .pipe($.gulp.dest(`${$.config.build}/fonts`));
  });
};
