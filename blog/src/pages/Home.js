import Nav_Menu from "../navigations/Nav_Menu";
import Footer from "../navigations/Footer";
import HeroImage from "../assets/images/hero_image.svg";

function Home() {
  return (
    <div>
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
        
          <img src={HeroImage} alt="hero-image" className="hero-img" />

        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
