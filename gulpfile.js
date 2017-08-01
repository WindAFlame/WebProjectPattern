// Main Dependancies
var gulp = require('gulp');
// Dependancies - Livereload
var browserSync = require('browser-sync');

/**
 * Task to deploy webseite for dev
 */
gulp.task('serve', function(){
    browserSync({
        server: {
            baseDir: ".",
            index: "index.html"
        }
    })
})