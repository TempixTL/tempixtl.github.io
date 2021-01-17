const htmlmin = require("html-minifier");
const yaml = require("js-yaml");

const htmlminConfig = {
  useShortDoctype: true,
  removeComments: true,
  collapseWhitespace: true,
};

module.exports = function(eleventyConfig) {
  eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
    if (outputPath.endsWith(".html")) {
      const minified = htmlmin.minify(content, htmlminConfig);
      return minified;
    } else {
      return content;
    }
  })
  eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));

  // gulp-managed dependencies
  eleventyConfig.addWatchTarget("./src/_scss/");
  eleventyConfig.addWatchTarget("./src/js/");
  eleventyConfig.addWatchTarget("./src/img/");
  eleventyConfig.addWatchTarget("./src/dat/");

  // give gulp 500 millis to build before refresh
  eleventyConfig.setWatchThrottleWaitTime(500);

  return {
    dir: {
      input: "src",
      output: "dist",
    }
  }
}
