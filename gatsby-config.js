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
   `gatsby-plugin-react-helmet`
  ]
}
