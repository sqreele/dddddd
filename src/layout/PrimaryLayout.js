import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
const PrimaryLayout=(props)=>(
    <div>
    <SEO/>
    <Header></Header>
    <main>

       <div className="container">
       <div className="col-12">
           <div className={props.column}>
             {props.children}
        
   
            </div>
        </div>
        
    </div>
    </main>
  
     <Footer></Footer>
     </div>
);

export default PrimaryLayout;