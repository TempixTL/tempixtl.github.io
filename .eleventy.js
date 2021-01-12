module.exports = function(eleventyConfig) {
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
