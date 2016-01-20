'use strict';

import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import babelify from 'babelify';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import BrowserSync from 'browser-sync';

const browserSync = BrowserSync.create();
const $ = gulpLoadPlugins();

gulp.task('styles', () => {
    return gulp.src([
            './node_modules/typo.css/typo.css',
            './src/styles/app.scss'
        ])
        .pipe($.concat('app.css'))
        .pipe($.sass())
        .pipe($.autoprefixer())
        .pipe($.rename({
            suffix: '.min'
        }))
        .pipe($.cssnano())
        .pipe(gulp.dest('./static/styles'));
});

gulp.task('scripts', () => {
    return browserify('./src/scripts/app.js')
            .transform(babelify)
            .bundle()
            .pipe(source('app.js'))
            .pipe(buffer())
            .pipe($.sourcemaps.init({
                loadMaps: true
            }))
            .pipe($.uglify())
            .pipe($.sourcemaps.write('./'))
            .pipe($.rename({
                suffix: '.min'
            }))
        	.pipe(gulp.dest('./static/scripts'));
});

gulp.task('build', ['styles', 'scripts']);

gulp.task('watch', ['styles', 'scripts'], () => {
    browserSync.init({
        server: './'
    });

    gulp.watch('./src/scripts/**/*.js', ['scripts']);
    gulp.watch('./src/styles/**/*.scss', ['styles']);

    gulp.watch([
        './**/*.html',
        './static/**/**'
    ]).on('change', browserSync.reload);
});

gulp.task('default', ['watch']);
