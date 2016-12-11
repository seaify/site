var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');


var livereload = require('gulp-livereload');


gulp.task('styles', function() {
  console.log('style convert')
    gulp.src('src/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('app.css'))
        .pipe(gulp.dest('src/css/'))
        .pipe(livereload());
});

gulp.task('html', function() {
  gulp.src('src/files/*.html')
    .pipe(livereload());
});


//Watch task
gulp.task('default', function() {
  gulp.watch('src/sass/*.scss',['styles']);
  gulp.watch('src/files/*.html', ['html']);
  livereload.listen();
});
