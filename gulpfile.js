var gulp        = require('gulp'),
    svgSymbols  = require('gulp-svg-symbols');

// Creates SVG sprite and demo page.
// gulp svg
gulp.task('svg', function () {
  return gulp.src('./src/*.svg')
    .pipe(svgSymbols({
      title:      false,
      templates: ['template/svg-template.html']
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('default');
