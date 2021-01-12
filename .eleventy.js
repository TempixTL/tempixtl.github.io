const yaml = require("js-yaml");

module.exports = function(eleventyConfig) {
  eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));

  // npm dependencies
  eleventyConfig.addPassthroughCopy({
    "node_modules/normalize.css/normalize.css": "css/normalize.css"
  });
  eleventyConfig.addPassthroughCopy({
    "node_modules/vanilla-tilt/dist/vanilla-tilt.js": "js/vanilla-tilt.js"
  });

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
