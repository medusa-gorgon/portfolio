module.exports = () => {
  $.gulp.task('html', () =>
    $.gulp.src(`${$.config.dev}/*.html`).pipe($.gulp.dest($.config.build))
  );
};
