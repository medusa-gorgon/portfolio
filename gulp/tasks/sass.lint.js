module.exports = () => {
  $.gulp.task('sass:lint', cb => {
    $.exec(
      `npm run stylelint --fix ${$.config.dev}/styles/**/*.{scss,sass,css}`,
      (error, stdout) => {
        console.log(stdout);
        cb(error);
      }
    );
  });
};
