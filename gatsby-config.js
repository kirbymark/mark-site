/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `kirbymark's Site`,
    siteUrl: `https://marksitemaster.gatsbyjs.io/`,
    description: `My initial Gatsby site from tutorial`,
    twitterUsername: `@kirbymark`,
    image: `/src/images/kirbymark-mg.svg`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog-folder",
        path: `${__dirname}/blog`,
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          "gatsby-remark-prismjs",
        ],
      },
    },
  ],
}
