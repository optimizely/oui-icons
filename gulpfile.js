var gulp        = require('gulp'),
    svgSymbols  = require('gulp-svg-symbols');

// Creates SVG sprite and demo page.
// gulp svg
gulp.task('svg:16', function () {
  return gulp.src('./src/16/*.svg')
    .pipe(svgSymbols({
      title:      false,
      templates: [
        'default-svg', // generates the SVG sprite
        'template/16.html' // example file
      ]
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['svg:16']);
