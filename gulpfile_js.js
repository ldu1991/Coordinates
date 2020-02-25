module.exports = function (gulp, plugins) {
  function onError(e) {
    console.log(e.toString());
    this.emit('end');
  }

  /* Paths */
  let src = {
      main: 'src/**/[^_]*.js'
    },
    dist = {
      main: 'dist',
      demo: 'demo'
    };
  /* End Paths */

  return function () {

    gulp.src(src.main)
      .pipe(plugins.plumber({errorHandler: onError}))
      .pipe(plugins.changedInPlace({firstPass: true}))
      .pipe(plugins.rename({
        basename: 'coordinates'
      }))
      .pipe(gulp.dest(dist.main))
      .pipe(gulp.dest(dist.demo))
      .pipe(plugins.uglifyES())
      .pipe(plugins.rename({
        basename: "coordinates",
        suffix: ".min",
      }))
      .pipe(gulp.dest(dist.main));

  };
};