const gulp          = require("gulp");
const webpack       = require('webpack');
const webpackConfig = require('./webpack.config.js');
const concatCss     = require('gulp-concat-css');
const inject        = require('gulp-inject');
const del           = require('del');
const autoprefixer  = require('gulp-autoprefixer');
const purify        = require('gulp-purifycss');
const cleanCSS      = require('gulp-clean-css');

function webpackRun() {
    return new Promise((resolve, reject) => {
        webpack(webpackConfig, (err, stats) => {
            if (err) {
                return reject(err);
            }
            if (stats.hasErrors()) {
                return reject(new Error(stats.compilation.errors.join('\n')));
            }
            resolve();
        });
    });
}

function purifyCss() {
    return gulp.src('./build/**/*.css')
               .pipe(purify(['./build/**/*.js', './src/app_popup/index.html']))
               .pipe(gulp.dest('./build'));
}


function cssRebase() {
    return gulp.src('./build/**/*.css')
               .pipe(concatCss("./styles/style.css"))
               .pipe(gulp.dest('./build/'));
}

function tempCssRemove() {
    return del([
                   './build/temp_style.css',
               ]);
}


async function cssPrefix() {
    gulp.src('./build/styles/style.css')
        .pipe(autoprefixer())
        .pipe(gulp.dest('./build/styles/'));
}


function cssClean() {
    return gulp.src('./build/styles/style.css')
               .pipe(cleanCSS())
               .pipe(gulp.dest('./build/styles/'));
}

function chromePolyfillCopy() {
    return gulp.src('./node_modules/webextension-polyfill/dist/browser-polyfill.js')
               .pipe(gulp.dest('./build/scripts'));
}

function htmlInit() {
    return gulp.src('./src/app_popup/index.html')
               .pipe(gulp.dest('./build'));
}


function copyManifestChrome() {
    return gulp.src('./manifest/Chrome/manifest.json')
               .pipe(gulp.dest('./build'));
}

function copyManifestFirefox() {
    return gulp.src('./manifest/Firefox/manifest.json')
               .pipe(gulp.dest('./build'));
}


function processHtml() {
    return gulp.src('./build/index.html')
               .pipe(inject(gulp.src(['./build/**/*.js', './build/**/*.css'], {read: false}), {relative: true}))
               .pipe(gulp.dest('./build'));
}


// default build for Firefox
exports.build_firefox = gulp.series(
    webpackRun,
    purifyCss,
    cssRebase,
    tempCssRemove,
    cssPrefix,
    cssClean,
    htmlInit,
    copyManifestFirefox,
    processHtml,
);

// optional build for Chrome
exports.build_chrome = gulp.series(
    webpackRun,
    purifyCss,
    cssRebase,
    tempCssRemove,
    cssPrefix,
    cssClean,
    chromePolyfillCopy,
    htmlInit,
    copyManifestChrome,
    processHtml,
);