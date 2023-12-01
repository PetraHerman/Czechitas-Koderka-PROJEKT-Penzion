module.exports = function(eleventyConfig) {

    // toto se přidává, aby byla vídět i druhá adresa pro lokální síť
      eleventyConfig.setServerOptions({
        showAllHosts: true,
      });
  
      // Výchozí výstupní složka: _site
  
      // Zkopírovat images/ do _site/images
      eleventyConfig.addPassthroughCopy("images");
  
      // Zkopírovat css/ to _site/css/
      eleventyConfig.addPassthroughCopy("css");
  
    return {
      // možné formáty šablon
      templateFormats: ["njk", "html", "md", "liquid"],
  
      // jako šablonovací jazyk zvolíme Nunjucks
      markdownTemplateEngine: "njk",
      htmlTemplateEngine: "njk",
      dataTemplateEngine: "njk",
    }
  
  
  
  };
  