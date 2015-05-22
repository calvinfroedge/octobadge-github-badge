var gulp      = require('gulp');
var uglify    = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');

gulp.task('css', function(){
  return gulp.src('*.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'));
});

gulp.task('js', function(){
  return gulp.src('*.js') 
    .pipe(uglify())
    .pipe(gulp.dest('dist')); //the destination folder
});

gulp.task('default', ['js', 'css']);
