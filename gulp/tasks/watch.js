module.exports = () => {
  $.gulp.task('watch', () => {
    // $.gulp.watch(`${$.config.dev}/js/**/*.js`, $.gulp.series('js:lint', 'js:app'));
    $.gulp.watch(`${$.config.dev}/js/**/*.js`, $.gulp.series('js:lint', 'js:app-minify'));
    $.gulp.watch(`${$.config.dev}/styles/**/*.{scss,sass,css}`, $.gulp.series('sass:lint', 'sass'));
    // $.gulp.watch(`${$.config.dev}/*.html`, $.gulp.series('html'));
    $.gulp.watch(`${$.config.dev}/pug/**/*.pug`, $.gulp.series('pug'));
    $.gulp.watch(`${$.config.dev}/fonts/**/*.*`, $.gulp.series('fonts'));
    $.gulp.watch(`${$.config.dev}/images/**/*.*`, $.gulp.series('images'));
  });
};
