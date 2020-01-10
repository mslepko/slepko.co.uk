var gulp = require('gulp');
var minifyInline = require('gulp-minify-inline');
var minifyhtml = require('gulp-minify-html');
var del = require('del');
var copy = require('gulp-copy');

gulp.task('minify-css-inline', function(done) {
  gulp.src('src/*.html')
    .pipe(minifyInline())
    .pipe(gulp.dest('dist/'));

  done();
});

gulp.task('minify-html', function(done) {
  var opts = {
    empty: true,
    comments: true
  };

  gulp.src('dist/*.html')
    .pipe(minifyhtml(opts))
    .pipe(gulp.dest("dist/"));

  done();
});

gulp.task('clean', function(done) {
  del(['dist/*.*']).then(function(paths) {
    console.log('Deleted files and folders:\n', paths.join('\n'));

    done();
  });
})

gulp.task('copy-robots', function() {
  return gulp.src('./src/robots.txt')
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', gulp.series('clean', 'minify-css-inline', 'minify-html', 'copy-robots'), function(done){
  done();
});