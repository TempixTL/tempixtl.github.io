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
  eleventyConfig.addPassthroughCopy({
    "node_modules/typeface-quicksand/index.css": "css/quicksand.css"
  });
  eleventyConfig.addPassthroughCopy({
    "node_modules/typeface-quicksand/files/*": "css/files"
  });

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
