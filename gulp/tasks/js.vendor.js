module.exports = () => {
  $.gulp.task('js:vendor', () => {
    return $.gulp
      .src($.config.vendorJS)
      .pipe($.gp.concat('vendor.js'))
      .pipe(
        $.gp.minify({
          ext: {
            min: '.min.js',
          },
          noSource: true,
        })
      )
      .pipe($.gulp.dest(`${$.config.build}/js`));
  });
};
