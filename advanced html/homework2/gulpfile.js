"use strict";
//----------Підключення модулів

const gulp = require("gulp"); //Підключення збирача Gulp
const sass = require("gulp-sass")(require("sass")); //Підключення препроцесора
const browserSync = require("browser-sync").create(); //Сервер, автоматичне оновлення сорінки
const plumber = require("gulp-plumber"); //Контроль помилок
const notify = require("gulp-notify"); //Підключення повідомлень про помилки
const clean = require("gulp-clean"); //Видалення директорій
const concat = require("gulp-concat"); //Об'єднання файлів в один
const autoprefixer = require("gulp-autoprefixer"); //Автоматично додає вендоні-префікси для роботи з різними браузерами
const shorthand = require("gulp-shorthand"); //Автоматично змінює властивості СSS на їх короткі форми
const rename = require("gulp-rename"); //Змінює ім'я файлу
const jsminify = require("gulp-uglify"); //Мініфікує файли JavaScript
const cssminify = require("gulp-csso"); //Мініфікує та оптимізує CSS
const babel = require("gulp-babel"); //Змінює і оптимізує файли JavaScript
const imgmin = require("gulp-imagemin"); //Оптимізує зображення 

//----------Всі задачі

//Browser sync----- .pipe(browserSync.stream());-----додати в кінци потоку задачі в якій треб оновлювати сторінку браузера.
function server() {
	return browserSync.init({
		server: {
			baseDir: "./",
		},
	});
}

//----------Виделення директорій
function clear() {
	return gulp.src("./dist/*", { read: false }).pipe(clean());
}
exports.clear = clear;

//----------Обробка HTML
//function buildHtml() {
//   return gulp.src("./*.html")
//   .pipe(
//      plumber({
//         errorHandler: notify.onError((error) => ({
//            title: "HTML",
//            message: error.message,
//         }))
//      })
//   )
//   .pipe(gulp.dest("./"));
//}
//exports.buildHtml = buildHtml

//function watchHtml(){
//   gulp.watch('./*.html', buildHtml).on('change', browserSync.reload);
//}
//exports.watchHtml = watchHtml;

//----------Обробка CSS
function buildStyles() {
	return gulp
		.src("./src/scss/**/styles.scss")
		.pipe(
			plumber({
				errorHandler: notify.onError((error) => ({
					title: "SCSS",
					message: error.message,
				})),
			})
		)
		.pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
		.pipe(autoprefixer())
		.pipe(shorthand())
		.pipe(gulp.dest("./dist/"))
		.pipe(rename({ suffix: ".min" }))
		.pipe(cssminify())
		.pipe(gulp.dest("./dist/"));
}
exports.buildStyles = buildStyles;

function watchStyles() {
	return gulp
		.watch("./src/scss/**/*.scss", buildStyles)
		.on("change", browserSync.reload);
}
exports.watchStyles = watchStyles;

//----------Обробка JS
function buildScripts() {
	return gulp
		.src("./src/js/**/*.js")
		.pipe(
			plumber({
				errorHandler: notify.onError((error) => ({
					title: "JS",
					message: error.message,
				})),
			})
		)
		.pipe(babel({
         presets: ['@babel/env']
      }))
		.pipe(concat("scripts.js"))
		.pipe(gulp.dest("./dist/"))
		.pipe(rename({ suffix: ".min" }))
		.pipe(jsminify())
		.pipe(gulp.dest("./dist/"));
}
exports.buildScripts = buildScripts;

function watchScripts() {
	return gulp
		.watch("./src/js/**/*.js", buildScripts)
		.on("change", browserSync.reload);
}
exports.watchScripts = watchScripts;

//----------Обробка зображень 
function img() {
	return gulp
		.src("./src/img/**/*.{png,jpg,jpeg,gif,svg}")
		.pipe(
			plumber({
				errorHandler: notify.onError((error) => ({
					title: "IMG",
					message: error.message,
				})),
			})
		)
      .pipe(imgmin({
         verbose: true
      }))
		.pipe(gulp.dest("./dist/img"));
}
exports.img = img;

function watchImg() {
	return gulp
		.watch("./src/img/**/*.{png,jpg,jpeg,gif,svg}", img)
		.on("change", browserSync.reload);
}
exports.watchImg = watchImg;

//----------Фінальні задачі gulp
exports.dev = 
	gulp.parallel(watchStyles, watchScripts, server);
exports.build = gulp.series(
	clear,
	gulp.parallel(buildStyles, buildScripts, img));
