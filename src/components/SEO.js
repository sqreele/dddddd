import React from "react";
import {StaticQuery,graphql} from "gatsby";
import {Helmet} from "react-helmet";

const SEO =({title,description,image,keyword})=> (
    <StaticQuery
   
        query={query}
        render={({
            site: {
                siteMetadata:{
                    defaultTitle,
                    defaultDescription,
                    defaultImage,
                    url,
                    defaultKeyword
                }
            }
        })=>{
            const seo = {
                title: title ||defaultTitle,
                description: description||defaultDescription,
                keyword:keyword||defaultKeyword,
                image:`${image ? image: url+defaultImage}`,
            
            }
            return(
          <Helmet>
           <title>{seo.title}</title>
           <meta name="image"content={seo.image}/>
           <meta name="description" content={seo.description}/>
           <meta name="keyword" content={seo.keyword}/>
           <meta name="robots" content="index,follow"/>
           <meta lang="th" />
          </Helmet>
          )
       
        }}

    />

)
export default SEO
const query = graphql`
{
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription:description
        defaultKeyword:keyword
        defaultImage:image
        url
      }
    }
  }
  `