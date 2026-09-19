const Image = require("@11ty/eleventy-img");
const path = require("path");

/** Async shortcode: optimises an image (webp + original format, responsive widths) */
async function imageShortcode(src, alt, cls, sizes, widths) {
  if (alt === undefined) {
    throw new Error(`Missing alt text for image: ${src}`);
  }

  const metadata = await Image(path.join("src/images", src), {
    widths: widths || [400, 800],
    formats: ["webp", "auto"],
    outputDir: "./_site/images/optimized/",
    urlPath: "/images/optimized/",
  });

  const imageAttributes = {
    alt,
    class: cls || undefined,
    sizes: sizes || "(max-width: 600px) 100vw, 400px",
    loading: "lazy",
    decoding: "async",
  };

  return Image.generateHTML(metadata, imageAttributes);
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addAsyncShortcode("image", imageShortcode);
  eleventyConfig.addGlobalData("buildYear", () => new Date().getFullYear());

  eleventyConfig.addPassthroughCopy({ "src/styles": "styles" });
  eleventyConfig.addPassthroughCopy({ "src/fonts": "fonts" });
  // building.jpg is used as a CSS background-image, so it is copied as-is
  eleventyConfig.addPassthroughCopy({ "src/images/building.jpg": "images/building.jpg" });
  eleventyConfig.addPassthroughCopy({ "src/images/favicon.svg": "images/favicon.svg" });
  eleventyConfig.addPassthroughCopy({ "src/robots.txt": "robots.txt" });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
