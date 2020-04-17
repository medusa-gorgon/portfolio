module.exports = () => {
  $.gulp.task('sass', () => {
    return $.gulp
      .src(`${$.config.dev}/styles/main.scss`)
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.sassGlob())
      .pipe($.gp.sass())
      .on('error', $.gp.notify.onError({ title: 'Styles' }))
      .pipe($.gp.autoprefixer())
      .pipe($.gp.csso())
      .pipe($.gp.sourcemaps.write())
      .pipe($.gp.rename('main.min.css'))
      .pipe($.gulp.dest(`${$.config.build}/css`))
      .pipe($.browserSync.stream());
  });
};
