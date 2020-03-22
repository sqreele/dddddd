import React from "react";
import {graphql} from "gatsby"
import Header from "../components/Header";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import innertext from "innertext"
const BlogpostLayout=({data})=> {
    const post = data.wordpressPost;
    return(
        <div>
        <SEO 
            title={innertext(post.title)}
            description={innertext(post.excerpt)}
            image={post.featured_media.source_url}
            keyword={post.categories.map(res=>res.name).join(', ') }
        />
        <Header></Header>
        <main>
       
        <div className="container">
          <div className="col-12">
                 <div className="justify-content-md">
          
                     <h1 dangerouslySetInnerHTML={{ __html: post.title }}/>
                      <div dangerouslySetInnerHTML={{ __html: post.content }}/>
     
                     </div>
     
       
            </div>
          </div>
          
        </main>
      
         <Footer></Footer>
         </div>
    )
    
}
export default BlogpostLayout;

export const  query = graphql`
  query($slug:String!){
    wordpressPost(slug:{eq: $slug}){
        content
        title
        featured_media {
          source_url
        }
        categories {
          name
        }
        excerpt
    }
  }

`