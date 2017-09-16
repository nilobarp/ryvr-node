const browserify = require('browserify');
const del = require('del');
const gulp = require('gulp');
const ts = require('gulp-typescript');
const path = require('path');
const buffer = require('vinyl-buffer');
const source = require('vinyl-source-stream');

const tsProject = ts.createProject('tsconfig.json');

const PATHS = {
    destination: './build/',
    tempFolder: './build/.tmp',
    watchList: ['./src/**/*.ts']
};

gulp.task('default', () => {
    gulp.watch(PATHS.watchList, ['ts-compile']);
});

gulp.task('ts-compile', () => {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest(PATHS.destination));
});

gulp.task('clean', () => {
    del(PATHS.destination).catch((err) => console.log(err));
});