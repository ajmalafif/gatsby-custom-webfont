module.exports = {
  siteMetadata: {
    title: 'Gatsby v2 custom webfont',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sass',
    'gatsby-plugin-subfont',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-v2-interUI',
        short_name: 'gaterUI',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}
