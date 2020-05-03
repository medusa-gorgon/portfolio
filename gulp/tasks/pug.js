module.exports = () => {
  $.gulp.task('pug', () => {
    return $.gulp
      .src(`${$.config.dev}/pug/pages/*.pug`)
      .pipe(
        $.gp.pug({
          locals: JSON.parse($.fs.readFileSync('content.json', 'utf8')),
          pretty: '\t',
        })
      )
      .on(
        'error',
        $.gp.notify.onError(error => {
          return {
            title: 'Pug',
            message: error.message,
          };
        })
      )
      .pipe($.gulp.dest($.config.build));
  });
};
