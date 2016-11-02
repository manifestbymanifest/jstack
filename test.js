import mocha from 'gulp-mocha';

const paths = {
  // [...]
  allLibTests: 'lib/test/**/*.js',
};

// [...]

gulp.task('main', ['test'], () => /* ... */ );
  gulp.src(paths.allLibTests)
    .pipe(mocha())
);
