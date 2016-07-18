var gulp = require('gulp'),
		sass = require ('gulp-sass'),
		notify = require('gulp-notify'),
		mainBowerFiles = require('main-bower-files');
		filter = require('gulp-filter');

var dest = "public";

var config = {
	stylesPath: './assets/styles',
	jsPath: './assets/scripts',
	bowerDir: './bower_components' 
}

gulp.task('js', function() {
	return gulp.src(mainBowerFiles())
		.pipe(filter('**/*.js'))
		.pipe(gulp.dest(dest + '/js'));
});

gulp.task('icons', function() { 
	return gulp.src(config.bowerDir + '/font-awesome/fonts/**.*') 
		.pipe(gulp.dest('./public/fonts')); 
});

gulp.task('css', function() {
	console.log(config.bowerDir + '/bootstrap-sass/assets/stylesheets'
);
	return gulp.src(config.stylesPath + '/main.scss')
		.pipe(sass({
				outputStyle: 'compressed',
				includePaths: [
					config.stylesPath,
					config.bowerDir + '/bootstrap-sass/assets/stylesheets',
					config.bowerDir + '/font-awesome/scss'
				]
			}).on('error', sass.logError))
		.pipe(gulp.dest(dest + '/css'));
})

gulp.task('default', ['js', 'css', 'icons']);
