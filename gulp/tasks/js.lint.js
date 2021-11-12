module.exports = () => {
  $.gulp.task('js:lint', cb => {
    $.exec(
      `npm run pretty-quick --pattern "${$.config.dev}/js/**/*.js"`,
      (error, stdout) => {
        console.log(stdout);
        cb(error);
      }
    );
    $.exec(
      `npm run eslint "${$.config.dev}/js/**/*.js" --fix`,
      (error, stdout) => {
        console.log(stdout);
        cb(error);
      }
    );
  });
};
