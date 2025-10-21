import Nav_Menu from "../navigations/Nav_Menu";
import Footer from "../navigations/Footer";
import './sections/section.css'
import heroImage from '../assets/icons/hero.png'
import heroMobile from '../assets/icons/hero-mobile.png'
import Loader from "./sections/loaderGlobal";
import { useState } from 'react';
import Services from "./sections/Services";
import FeatureSection from "./sections/feature";
import RollingCards from "./sections/rollingCards";
import FAQ from './sections/WhyUs';
import BlogList from './sections/blogList'

function Home() {


 
  const [loading, setLoading] = useState(true);
  

  return (

    <>
     
   
            {loading ? <Loader /> : null}
            
                <>
            <Nav_Menu />
            <div className="square-bg" style={ {overflow: 'hidden', height: '100dvh'}}>
            <div className="hero-mask" >
              <div className="hero-text" style={{ overflow: 'hidden'}}>
        
                <p className=" great-vibes-regular  text-center" >Where Ideas Flow and Stories Glow</p>
          <p className="text-center">

      Publish without limits, connect with your audience, <br/> and grow with every post.
          </p>          


              
              </div>
        
              
              {/* <Lottie options={defaultOptions}
                    height={100}
                    width={100}
                    speed={0.5}
                  /> */}
                {/* <a className="universal-button border-button" href="/publish">Start Publishing</a> */}

                <div className="padding-sides" style={{ overflow: 'hidden', height: '70dvh'}}>
              <img className="hero-image" src={heroImage} style={{position: 'relative'}} onLoad={() => setLoading(false)}  />
              <img className="hero-image-mobile" src={heroMobile} style={{position: 'relative'}} onLoad={() => setLoading(false)}  ></img>
                
              
              
              
                </div>
          
              
              
              </div>
            </div>

              
          <RollingCards/>
          <FeatureSection/>
          <Services/>
          <FAQ/>
          <BlogList/>
            
            
            
            
            <Footer />        
                </>
      </>
  );
}

export default Home;

