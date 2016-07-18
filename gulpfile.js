var gulp = require('gulp'),
		sass = require ('gulp-sass'),
		notify = require('gulp-notify'),
		mainBowerFiles = require('main-bower-files');
		filter = require('gulp-filter');

var dest = "public"

var config = {
	sassPath: './assets/styles',
	jsPath: './assets/scripts',
	bowerDir: './bower_components' 
}

gulp.task('js', function() {
	return gulp.src(mainBowerFiles())
		.pipe(filter('**/*.js'))
		.pipe(gulp.dest(dest + '/js'));
});

gulp.task('css', function() {
	return gulp.src('assets/styles/main.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest(dest + '/css'));
})

gulp.task('default', ['js', 'css']);
