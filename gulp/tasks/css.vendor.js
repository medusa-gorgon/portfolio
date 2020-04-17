module.exports = () => {
  $.gulp.task('css:vendor', () => {
    return $.gulp
      .src($.config.vendorCSS)
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.concatCss('vendor.css'))
      .pipe($.gp.csso())
      .pipe($.gp.rename('vendor.min.css'))
      .pipe($.gp.sourcemaps.write())
      .pipe($.gulp.dest(`${$.config.build}/css`));
  });
};
