const yaml = require("js-yaml");

module.exports = function(eleventyConfig) {
  eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));

  eleventyConfig.addPassthroughCopy("src/css"); // css styles
  eleventyConfig.addPassthroughCopy("src/img"); // images
  eleventyConfig.addPassthroughCopy("src/js");  // js files
  eleventyConfig.addPassthroughCopy("src/dat"); // other data

  return {
    dir: {
      input: "src",
      output: "dist",
    }
  }
}
