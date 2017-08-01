// Main Dependancies
var gulp = require('gulp');
// Dependancies - Livereload
var connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    root: 'src',
    livereload: true
  });
});
 
gulp.task('html', function () {
  gulp.src('./src/index.html')
    .pipe(connect.reload());
  gulp.src('./src/views/**/*.html')
    .pipe(connect.reload());
});
 
gulp.task('watch', function () {
  gulp.watch(['./src/index.html','./src/views/**/*.html'], ['html']);
});

gulp.task('serve', ['connect', 'watch']);