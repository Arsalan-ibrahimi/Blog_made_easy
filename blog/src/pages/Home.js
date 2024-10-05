import Nav_Menu from "../navigations/Nav_Menu";
import Footer from "../navigations/Footer";
import BentoGrid from './sections/bentoGrid';
import FeatureSection from "./sections/feature";
import Lottie from 'react-lottie';
import * as heroAnimation from '../assets/lotties/hero.json'

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
      <div className="hero-image hero-section">
      <div className="hero-mask">
        <div className="hero-text">
          <h1 className="great-vibes-regular text-center">
            Bringing Bloggers and Patrons <br/> Together
          </h1>
         
        </div>
        <div className="hero-illustration">
        
        <Lottie options={defaultOptions}
              height={100}
              width={100}
              speed={0.5}
             />

        </div>
        <p>Write, Edit and Publish blogs anytime and anywhere hasslefree.</p>
        <a className="universal-button border-button" href="/publish">Start Publishing</a>
        </div>
      </div>

    <FeatureSection/>
    <BentoGrid/>


      <Footer />
      </>
  );
}

export default Home;
