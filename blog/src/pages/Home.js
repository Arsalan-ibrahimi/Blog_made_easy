import Nav_Menu from "../navigations/Nav_Menu";
import Footer from "../navigations/Footer";
import BentoGrid from './sections/bentoGrid';
import FeatureSection from "./sections/feature";
import Lottie from 'react-lottie';
import * as heroAnimation from '../assets/lotties/hero.json'
// import BlogSlider from './sections/BlogSlider';
import heroImage from '../assets/icons/hero.png'
import RollingCards from "./sections/rollingCards";
// import Showcase from "./sections/showcase";

function Home() {
  const defaultOptions = {
    loop: false,
    autoplay: true, 
    animationData: heroAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
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
        <img className="hero-image" src={heroImage} style={{position: 'relative'}}>
          
        </img>
        
          </div>
     
        
        
        </div>
      </div>


      <RollingCards/>

    <FeatureSection/>

{/* 
    <BentoGrid/> */}


      <Footer />
      </>
  );
}

export default Home;
