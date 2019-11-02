require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Open Fortress`,
    description: `Open Fortress is a free and open-source passion project, lovingly crafted by nearly a hundred members of the Team Fortress community with an ideal of fun gameplay as well as maximum customizability..`,
    author: `EmNudge`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Open-Fortress`,
        short_name: `Open-Fortress`,
        start_url: `/`,
        background_color: `#342166`,
        theme_color: `#342166`,
        display: `minimal-ui`,
        icon: `src/images/openfortress-icon.png`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-json`,
    `gatsby-transformer-toml`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
