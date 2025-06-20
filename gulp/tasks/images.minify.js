module.exports = () => {
  $.gulp.task('images:minify', () => {
    return $.gulp
      .src(`${$.config.dev}/portfolio/images/**/*.*`, {
        since: $.gulp.lastRun('images:minify'),
      })
      .pipe(
        $.gp.imagemin([
          $.gp.imagemin.svgo({
            plugins: [
              { cleanupIDs: false },
              { removeUselessDefs: false },
              { removeViewBox: true },
            ],
          }),
        ])
      )
      .pipe($.gulp.dest(`${$.config.dev}/portfolio/images`));
  });
};
