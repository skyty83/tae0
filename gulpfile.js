const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const del = require('del');
const ejs = require("gulp-ejs");

gulp.task('del:js', function(){
  return del(['./dist/assets/all.js']);
});


gulp.task('sass', function(){
    return gulp.src('./src/scss/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./dist/assets'));
});

const EJSoption = {
}

gulp.task('js', function() {
  return gulp.src([
    './node_modules/jquery/dist/jquery.js',
    './src/js/ui.js'
  ]) 
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/assets/'));
});

gulp.task('ejs', function(){
  return gulp.src('./src/views/**/*.ejs')
  .pipe(ejs({},{},{ext: '.html'}))
  .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function () {
  gulp.watch('./src/scss/**/*.scss', ['sass']);
  gulp.watch('./src/js/**/*.js', ['del:js', 'js']);
  gulp.watch('./src/views/**/*.ejs', ['ejs']);
});

gulp.task('default', ['del:js', 'js', 'sass', 'ejs'], function() {});  