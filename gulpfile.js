const { src, dest, series, parallel } = require("gulp");
const gutil = require("gulp-util");
const sourcemaps = require("gulp-sourcemaps");
const concat = require("gulp-concat");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

function css_fonts() {
  return src("./node_modules/typeface-quicksand/files/**/*")
    .pipe(dest("dist/css/files/"));
}

function css_postcss() {
  const stylesheets = [
    "./node_modules/normalize.css/normalize.css",
    "./node_modules/typeface-quicksand/index.css",
    "./src/css/base.css",
    "./src/css/styles.css"
  ];

  return src(stylesheets)
    .pipe(gutil.env.production ? gutil.noop() : sourcemaps.init())
      .pipe(concat("styles.min.css"))
      .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(gutil.env.production ? gutil.noop() : sourcemaps.write("."))
    .pipe(dest("dist/css/"));
}

exports.default = parallel(css_fonts, css_postcss);
