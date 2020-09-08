const gulp = require('gulp');
const mocha = require('gulp-mocha');

/**
 * @desc run mocha test task
 * */
gulp.task('test', function (done) {
  gulp.src('./test/**/*.js')
    .pipe(mocha({ exit: true }))
    .on('end', function () {
      done();
      process.exit(0);
    })
    .on('error', function (err) {
      done(err);
      process.exit(1);
    });
});
