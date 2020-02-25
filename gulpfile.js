'use strict';

const browserSync = require('browser-sync').create(),
      gulp        = require('gulp'),
      plugins     = require('gulp-load-plugins')(),
      uglifyES    = require('uglify-es'),
      composer    = require('gulp-uglify/composer');

plugins.fs                      = require('fs');
plugins.path                    = require('path');
plugins.uglifyES                = composer(uglifyES, console);


gulp.task('pl', function () {
  console.log(plugins);
});

/*
gulp-load-plugins:
  (+)autoprefixer
  (+)changed
  (+)changedInPlace
  (+)clean
  (+)combineMq
  (+)concat
  (+)csso
  (+)debug
  (+)fileInclude
  (+)htmlBeautify
  (+)htmlmin
  (+)if
  (+)imagemin
  (+)plumber
  (+)rename
  (+)sass
  (+)sequence
  (+)sourcemaps
  (+)uglify
  (+)watch
  (+)spritesmith
  (+)imagemin-jpeg-recompress
  (+)imagemin-pngquant
  (+)fs
  (+)path
  (+)merge
  (+)repl
*/


/* Paths and variables */
let src = {
    main: 'src',
    js: 'src'
  },
  dist = {
    main: 'dist',
    demo: 'demo',
    js: 'dist/js'
  },
  domain = false;
/* End Paths and variables */


gulp.task('js', require('./gulpfile_js')(gulp, plugins));

gulp.task('browser-sync', function () {
  if(domain) {
    browserSync.init({
      proxy: domain,
      notify: false,
      port: 9000
    })
  } else {
    browserSync.init({
      server: {
        baseDir: dist.demo
      },
      port: 4000
    })
  }

  browserSync.watch('./**/*.html').on('change', browserSync.reload);

  browserSync.watch(dist.js + '/*.js', function (event, file) {
    if (event === 'change') browserSync.reload();
  });
});

gulp.task('watch', function () {
  gulp.watch(src.js + '/**/*.js', {cwd: './'}, ['js']);
});

gulp.task('default', plugins.sequence('js', ['browser-sync', 'watch']));
