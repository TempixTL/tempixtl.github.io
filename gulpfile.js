const { src, dest, series, parallel, watch } = require("gulp");
// util
const gutil = require("gulp-util");
const sourcemaps = require("gulp-sourcemaps");
const del = require("del");
const concat = require("gulp-concat");
// css
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
// img
const responsive = require("gulp-responsive");
const image = require("gulp-image");

const stylesheets = [
  "./node_modules/normalize.css/normalize.css",
  "./node_modules/typeface-quicksand/index.css",
  "./src/css/base.css",
  "./src/css/styles.css",
];

const scripts = [
  "./node_modules/vanilla-tilt/dist/vanilla-tilt.min.js",
  "./src/js/**/*.js",
];

const cleanDirs = [
  "./dist/css/**/*",
  "./dist/js/**/*",
  "./dist/img/**/*",
  "./dist/dat/**/*",
];

function clean() {
  return del(cleanDirs);
}

function css_fonts() {
  return src("./node_modules/typeface-quicksand/files/**/*")
    .pipe(dest("dist/css/files/"));
}

function css_postcss() {
  return src(stylesheets)
    .pipe(gutil.env.production ? gutil.noop() : sourcemaps.init())
      .pipe(concat("styles.min.css"))
      .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(gutil.env.production ? gutil.noop() : sourcemaps.write("."))
    .pipe(dest("dist/css/"));
}

function js() {
  return src(scripts)
    .pipe(dest("dist/js/"));
}

function img() {
  const imageConfig = {
    svgo: false,
  };
  const responsiveConfig = {
    errorOnUnusedImage: false,
    passThroughUnused: true,
    silent: true,
  };

  return src("./src/img/**/*")
    .pipe(responsive({
      "experience/*": {
        width: 72*2,
      },
    }, responsiveConfig))
    .pipe(image(imageConfig))
    .pipe(dest("./dist/img/"));
}

function dat() {
  return src("./src/dat/**/*")
    .pipe(dest("./dist/dat/"));
}

function watch_task() {
  watch("./src/css/**/*", css_postcss);
  watch("./src/js/**/*", js);
  watch("./src/img/**/*", img);
  watch("./src/dat/**/*", dat);
}

exports.clean = clean;
exports.css = parallel(css_fonts, css_postcss);
exports.js = js;
exports.img = img;
exports.dat = dat;
exports.watch = watch_task;
exports.build = parallel(
  exports.css,
  exports.js,
  exports.img,
  exports.dat,
);
exports.default = exports.build;
