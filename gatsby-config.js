module.exports = {
  siteMetadata: {
    title: `Geek kang kopas`,
    name: `Kopikonfig`,
    siteUrl: `https://research.kopikonfig.com`,
    description: `Open Research Community that was wounded by Sandiko.R in 2018`,
    hero: {
      heading: `Landing Research Kopikonfig.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/sandiko_r`,
      },
      {
        name: `github`,
        url: `https://github.com/mh4nx7net`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/rsandi18`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/raqhni-sandiko-16b975175/`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
