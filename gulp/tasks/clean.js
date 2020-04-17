module.exports = () => {
  $.gulp.task('clean', cb => $.del($.config.build, cb));
};
