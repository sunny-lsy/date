const gulp = require('gulp');
const minifyCss = require('gulp-minify-css');
const concat = require('gulp-concat');
const webserver = require('gulp-webServer');
const uglifys = require('gulp-uglify');
const rename = require('gulp-rename');
console.log(uglifys)
gulp.task('minify',function(){
    gulp.src('./Content/css/style.css')
       .pipe(concat('new.css'))
       .pipe(minifyCss())
       .pipe(gulp.dest('./Content/css'))
});

gulp.task('server',function(){
    gulp.src('.')
        .pipe(webserver({
            host:'localhost',
            port:8080,
            fallback:'index.html',
            middleware:function(req,res,next){
                if(req.url=='/favicon.ico'){
                    return;
                }
                if(req.url=='/'){
                    res.end('111');
                }
            }
        }))

})

gulp.task('watch',function(){
    gulp.watch('./Content/js/date_format.js',function(){
         gulp.src('./Content/js/date_format.js')
             .pipe(concat('new.js'))
             .pipe(rename('date_format.min.js'))
             .pipe(uglifys())
             .pipe(gulp.dest('./Content/js'))
    })
});
gulp.task('default',['server','watch']);