const { src, dest, series, parallel } = require("gulp");
const sourcemaps = require("gulp-sourcemaps");
const concat = require("gulp-concat");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

function copyFonts() {
  return src("./node_modules/typeface-quicksand/files/**/*")
    .pipe(dest("dist/css/files/"));
}

function css() {
  const stylesheets = [
    "./node_modules/normalize.css/normalize.css",
    "./node_modules/typeface-quicksand/index.css",
    "./src/css/base.css",
    "./src/css/styles.css"
  ];


  return src(stylesheets)
    .pipe(sourcemaps.init())
      .pipe(concat("styles.min.css"))
      .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write("."))
    .pipe(dest("dist/css/"));
}

exports.default = parallel(copyFonts, css);
