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
    .pipe(gulp.dest('./dist/16'));
});

gulp.task('svg:24', function () {
  return gulp.src('./src/24/*.svg')
    .pipe(svgSymbols({
      title:      false,
      templates: [
        'default-svg', // generates the SVG sprite
        'template/24.html' // example file
      ]
    }))
    .pipe(gulp.dest('./dist/24'));
});

gulp.task('svg:combined', function () {
  return gulp.src('./src/**/*.svg')
    .pipe(svgSymbols({
      title:      false,
      templates: [
        'default-svg' // generates the SVG sprite
      ]
    }))
    .pipe(gulp.dest('./dist/combined'));
});


gulp.task('default', ['svg:16','svg:24']);
