module.exports = () => {
  $.gulp.task('js:app', () => {
    return $.gulp
      .src($.config.appJS)
      .pipe(
        $.gp.babel({
          presets: ['@babel/env'],
        })
      )
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.concat('app.js'))
      .pipe($.gp.sourcemaps.write())
      .pipe($.gulp.dest(`${$.config.build}/js`));
  });
};
