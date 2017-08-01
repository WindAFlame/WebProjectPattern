// Main Dependancies
var gulp = require('gulp');
// Dependancies - Livereload
var connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true
  });
});
 
gulp.task('html', function () {
  gulp.src('./app/index.html')
    .pipe(connect.reload());
  gulp.src('./app/views/**/*.html')
    .pipe(connect.reload());
});
 
gulp.task('watch', function () {
  gulp.watch(['./app/index.html','./app/views/**/*.html'], ['html']);
});

gulp.task('serve', ['connect', 'watch']);