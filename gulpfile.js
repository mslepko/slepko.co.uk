var gulp = require('gulp');
var minifyInline = require('gulp-minify-inline');
var minifyhtml = require('gulp-minify-html');
var del = require('del');

gulp.task('minify-css-inline', function() {
  gulp.src('src/*.html')
    .pipe(minifyInline())
    .pipe(gulp.dest('dist/'))
});

gulp.task('minify-html', function () {
  var opts = {
    empty: true,
    comments: true
  };

  gulp.src('dist/*.html')
    .pipe(minifyhtml(opts))
    .pipe(gulp.dest("dist/"))
});

gulp.task('clean', function() {
	del(['dist/*.html']).then(paths => {
    	console.log('Deleted files and folders:\n', paths.join('\n'));
	});

})

gulp.task('default', ['clean', 'minify-css-inline', 'minify-html']);