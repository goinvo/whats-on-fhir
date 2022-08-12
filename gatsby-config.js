module.exports = {
  siteMetadata: {
    title: `whats-on-fhir`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-emotion", "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
    resolve: '@chakra-ui/gatsby-plugin',
    options: {
      resetCSS: true,
      isUsingColorMode: true,
    },
  },]
};