import Nav_Menu from "../navigations/Nav_Menu";
import Footer from "../navigations/Footer";

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
        <div className="hero-text">
          <h1>
            Write and Publish Blogs <br /> Faster and Easier
          </h1>
          <p>Write, Edit and Publish blogs anytime and anywhere hasslefree.</p>
          <button>Start Publishing</button>
        </div>
        <div className="hero-illustration">
        
        <Lottie options={defaultOptions}
              height={100}
              width={100}
              speed={0.5}
             />

        </div>
      </div>
      <Footer />
      </>
  );
}

export default Home;
