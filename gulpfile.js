// Section 0: Load Requirements
var gulp = require('gulp');

//// Section 0.1: Load from HTML files, concat & minify (html, css & js)
var useref = require('gulp-useref');
var gulpIf = require('gulp-if');
var htmlmin = require('gulp-htmlmin');
var uglify = require('gulp-uglify');
var csso = require('gulp-csso');

//// Section 0.2: Images
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');

//// Section 0.3: BowerFonts
var flatten = require('gulp-flatten');

//// Section 0.4: Delete
var del = require('del');

//// Section 0.5: Parallel Tasks
var runSequence = require('run-sequence');

//// Section 0.6: Serve
var serve = require('gulp-serve');

//// Section 0.7: LiveReload
var browserSync = require('browser-sync').create();

//// Section 0.8: RevAll
var RevAll = require('gulp-rev-all');

// Section 1: Build Tasks
//// Section 1.0: Check HTML & Minify included HTML, CSS & JS
gulp.task('useref', function(){
  return gulp.src('index.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.css', csso()))
    .pipe(gulpIf('*.html', htmlmin({removeComments: true, collapseWhitespace: true})))
    .pipe(gulp.dest('dist'));
});

//// Section 1.1: Minify Images and move
gulp.task('copy:images', function(){
  return gulp.src('assets/images/**/*.+(png|jpg|jpeg|gif|svg)')
  // Caching images that ran through imagemin
    .pipe(imagemin({ progressive: true}))
    .pipe(gulp.dest('dist/assets/images'));
});

//// Section 1.2: Move fonts
gulp.task('copy:libs-fonts', function () {
  return gulp.src('app/bower_components/**/*.{eot,svg,ttf,woff,woff2}')
    .pipe(flatten())
    .pipe(gulp.dest('dist/assets/fonts'));
});

//// Section 1.3: Copy Views
gulp.task('copy:views', function(){
  return gulp.src('app/**/*.html')
    .pipe(gulpIf('*.html', htmlmin({collapseWhitespace: true})))
    .pipe(gulp.dest('dist/app/'));
});

//// Section 1.4: Delete previous version
gulp.task('clean:dist', function() {
  return del.sync('dist');
});

//// Section 1.5: Build Task
gulp.task('build:dist', function (callback) {
  runSequence(
    ['clean:dist'], 
    ['useref', 'copy:images', 'copy:libs-fonts', 'copy:views'],
    callback
  );
});

// Section 2: Watch Tasks
//// Section 2.0: Browser Sync - Server
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: '.'
    }
  });
});

// Section 3: Servers
//// Section 3.0: Watch HTML, CSS & JS
gulp.task('serve:dev', ['browserSync'], function (){
  gulp.watch('index.html', browserSync.reload); 
  gulp.watch('app/**/*.html', browserSync.reload); 
  gulp.watch('app/**/*.js', browserSync.reload);
  gulp.watch('assets/styles/**/*.css', browserSync.reload); 
});

//// Section 3.1: Build Serve
gulp.task('serve:dist', serve('./dist'));

//// Section 3.2: Rev-All
gulp.task('rev:all', function () {
    var revAll = new RevAll();
    gulp.src('dist/**')
        .pipe(revAll.revision())
        .pipe(gulp.dest('dist-all'));

});

//// Section 3.1: Build Serve
gulp.task('serve:all', serve('./dist-all'));

