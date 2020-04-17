module.exports = () => {
  $.gulp.task('serve', () => {
    $.browserSync.init({
      open: false,
      server: $.config.build,
    });
    $.browserSync.watch(
      [`${$.config.build}/**/*.*`, `!**/*.css`],
      $.browserSync.reload
    );
  });
};
