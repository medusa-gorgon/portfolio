module.exports = () => {
  $.gulp.task('dev:images', () => {
    return $.gulp
      .src([
        `${$.config.dev}/portfolio/images/**/*.*`,
        `!${$.config.dev}/portfolio/images/sprites/**/**.*`,
      ])
      .pipe($.gulp.dest(`${$.config.build}/portfolio/images`));
  });
};
