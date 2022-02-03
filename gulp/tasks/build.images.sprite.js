module.exports = () => {
  $.gulp.task('build.images:sprite', () => {
    const spriteData = $.gulp
      .src(`${$.config.dev}/portfolio/images/sprites/png/*.png`)
      .pipe(
        $.gp.spritesmith({
          imgName: 'sprite.png',
          imgPath: '../portfolio/images/sprites/sprite.png',
          cssName: 'sprite.scss',
          cssFormat: 'css',
          padding: 5,
        })
      );

    const imgStream = spriteData.img.pipe(
      $.gulp.dest(`${$.config.build}/images/sprites`)
    );
    const cssStream = spriteData.css.pipe(
      $.gulp.dest(`${$.config.dev}/styles/misc`)
    );

    return $.merge(imgStream, cssStream);
  });
};
