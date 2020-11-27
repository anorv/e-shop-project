const gulp = require('gulp');
const concat = require('gulp-concat')


gulp.task('concat', function(){
return  gulp.src('assets/pre-js/*.js')
.pipe(concat('all.js'))
.pipe(gulp.dest('assets/js'))

});