var gulp 			= require("gulp");
var sass 			= require("gulp-sass");
var cleanCSS 	= require("gulp-clean-css");
var htmlmin 	= require("gulp-htmlmin");

/*TASK PARA MINIFICAR ARQUIVOS CSS*/
gulp.task('mini-css', function() {
  return gulp.src('./source/scss/*.scss')
		.pipe(sass())
    .pipe(cleanCSS({debug: true}, function(details) {
        console.log(details.name + ': ' + details.stats.originalSize);
        console.log(details.name + ': ' + details.stats.minifiedSize);
    }))
    .pipe(gulp.dest('./dist/css'));
});

/*TASK PARA MINIFICAR ARQUIVOS HTML*/
gulp.task('mini-html', function() {
  return gulp.src('./source/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dist'));
});

/*TASK MONITORAR ARQUIVOS*/
gulp.task('default', function(){
	gulp.watch('./source/index.html',['mini-html']);
	gulp.watch('./source/scss/*.scss',['mini-css']);
});

