import Nav_Menu from "../navigations/Nav_Menu";
import Footer from "../navigations/Footer";
import BentoGrid from './sections/bentoGrid';
import FeatureSection from "./sections/feature";
import Lottie from 'react-lottie';
import * as heroAnimation from '../assets/lotties/hero.json'
// import BlogSlider from './sections/BlogSlider';
import heroImage from '../assets/icons/hero.png'

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
      <div className="hero-image ">
      <div className="hero-mask">
        <div className="hero-text">
  
          <p className=" great-vibes-regular text-center">Write, Edit and Publish blogs anytime and anywhere hasslefree.</p>
         
        </div>
          <a className="universal-button border-button" href="/publish">Start Publishing</a>
  
        
        {/* <Lottie options={defaultOptions}
              height={100}
              width={100}
              speed={0.5}
             /> */}

        <img className="hero-image" src={heroImage}></img>
     
        
        
        </div>
      </div>

    <FeatureSection/>
{/* 
    <BentoGrid/> */}


      <Footer />
      </>
  );
}

export default Home;
