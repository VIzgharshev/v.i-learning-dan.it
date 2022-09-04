"use strict";
//----------Підключення модулів

const gulp = require("gulp"); //Підключення сборщика Gulp
const sass = require("gulp-sass")(require("sass")); //Підключення препроцесора
const browserSync = require("browser-sync").create(); //Сервер, автоматичне оновлення сорінки
const plumber = require("gulp-plumber"); //Контроль помилок
const notify = require("gulp-notify"); //Підключення повідомлень про помилки
const gulpClean = require("gulp-clean"); //Видалення директорій
const concat = require('gulp-concat'); //Об'єднання файлі в один
const autoprefixer = require('gulp-autoprefixer'); //Автоматично додає вендоні-префікси для роботи з різними браузерами

//----------Всі задачі

//Browser sync----- .pipe(browserSync.stream());-----додати в кінци потоку задачі в якій треб оновлювати сторінку браузера.
const server = () => {
	browserSync.init({
		server: {
			baseDir: "./dist",
		},
	});
};

//Виделення директорій
const clear = () => {
	gulp.src("./dist", { read: false })
   .pipe(gulpClean());
};
//Обробка CSS
//Обробка JS
//Обробка HTML

//----------Всі спостерігачі

//----------Фінальні задачі gulp
