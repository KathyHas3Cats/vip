var gulp       = require('gulp');
var minifyHtml = require('gulp-htmlmin');
var sass       = require('gulp-ruby-sass');
var minifyJS   = require('gulp-uglify');
var connect    = require('gulp-connect');
var concat     = require('gulp-concat');

/* gulp.task('minifyHtml',function(){
    var options = {
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        removeComments: true,
        removeEmptyAttributes: true
    };
    return gulp.src('./src/html/*.html').pipe(minifyHtml(options)).pipe(gulp.dest('./html/'));
}); */
gulp.task('sass',function(){
    return sass('./sass/*.scss',{
        sourcemap:false,
        style:'expanded'
    }).pipe(gulp.dest('./css/'));
});
/* gulp.task('minifyJS',function(){
    return gulp.src('./src/js/*.js').pipe(minifyJS()).pipe(gulp.dest('./dist/js/'));
}); */
gulp.task('html',['sass'],function(){
    return gulp.src('./*.html').pipe(connect.reload());
});
gulp.task('default',['sass'],function(){
    connect.server({
        port:9000,
        livereload:true
    });
    gulp.watch('./*.html',['html']);
    gulp.watch('./sass/*.scss',['html']);
    gulp.watch('./js/*.js',['html']);
});