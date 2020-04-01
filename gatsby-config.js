/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata:{
    title:"Bootrap gatsby",
    description:"this is descripion",
    keyword:"gatsby,gatsby bootrap control",
    image:"/static/gats.jpg",
    url:"https://www.gatsbyjs.org/",

  },
  plugins: [

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {resolve: `gatsby-transformer-remark`},
    {resolve: `gatsby-source-wordpress`,
      options:{
      baseUrl: `nokfruits.com`,
      protocol: `https`,
      hostingWPCOM: false,
    },
   },
   `gatsby-plugin-react-helmet`,
   {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `GatsbyJS bootrap nokfurist`,
      short_name: `GatsbyJS nokfurist`,
      start_url: `/`,
      background_color: `#f8f9fa`,
      theme_color: `#ffffff`,
      display: `standalone`,
    },
  },
  `gatsby-plugin-offline`,
  {
    resolve:`gatsby-plugin-google-analytics`,
    options: {
      trackingId: "google-site-verification=SFxG99JE5h0BDawClNzTqCCjr14cuflcPovltRmM_bE",
      head: false,
    },

  },
  ]
}
