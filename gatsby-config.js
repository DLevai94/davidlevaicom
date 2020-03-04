module.exports = {
  siteMetadata: {
    title: `Coding, Freelancing & Productivity`,
    author: `Dávid Lévai`,
    description: `A blog about coding, freelancing, business & productivity.`,
    siteUrl: `https://davidlevai.com/`,
    social: {
      twitter: `davidlevaicodes`,
      instagram: `davidlevai.codes`,
      linkedin: `dlevai94`,
      github: `dlevai94`,
    },
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-feed-mdx`,
    `gatsby-plugin-advanced-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              withWebp: true,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-vscode`,
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
          },
          {
            resolve: `gatsby-remark-smartypants`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-50359249-4`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dávid Lévai Blog`,
        short_name: `Dávid Lévai`,
        start_url: `/`,
        lang: `en`,
        background_color: `#ffffff`,
        theme_color: `#391f70`,
        display: `standalone`,
        icon: `content/assets/apple-touch-icon.png`,
        icons: [
          {
            src: "android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "android-chrome-384x384.png",
            sizes: "384x384",
            type: "image/png",
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
