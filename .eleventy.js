const yaml = require("js-yaml");

module.exports = function(eleventyConfig) {
  eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));

  // gulp-managed dependencies
  eleventyConfig.addWatchTarget("./src/css/");
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
