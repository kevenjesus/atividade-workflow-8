var gulp = require("gulp");
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');

/*TASK PARA MOVER ARQUIVOS CSS*/
gulp.task('mover-css', function(){
	return gulp.src('./source/scss/*.scss')
		.pipe(gulp.dest('./dist/css/'));
	});

/*TASK PARA MINIFICAR ARQUIVOS CSS*/
gulp.task('mini-css', function() {
    return gulp.src('./source/scss/*.scss')
        .pipe(cleanCSS({debug: true}, function(details) {
            console.log(details.name + ': ' + details.stats.originalSize);
            console.log(details.name + ': ' + details.stats.minifiedSize);
        }))
        .pipe(gulp.dest('./dist/css'));
	});

/*TASK PARA MOVER ARQUIVOS HTML*/
gulp.task('mover-html', function(){
	return gulp.src('./source/*.html')
		.pipe(gulp.dest('./dist'));
	});

/*TASK PARA MINIFICAR ARQUIVOS HTML*/
gulp.task('mini-html', function() {
  return gulp.src('./source/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dist'));
});

/*TASK MONITORAR ARQUIVOS*/
gulp.task('back', function(){
	gulp.watch('./source/index.html',['mover-html', 'mini-html']);
	gulp.watch('./source/scss/*.scss',['mover-css', 'mini-css']);
	});

