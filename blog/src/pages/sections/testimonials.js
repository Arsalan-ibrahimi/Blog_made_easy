import { useRef, useState } from "react";


export default function Testimonils() {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
  {
    text: "I was spinning my wheels trying to launch my blog, but thanks to Blog Made Easy I got up and running in no time. The clean interface makes writing enjoyable—now I post every week without stress.",
    name: "Naila Keleta-Mae",
    title: "Lifestyle Blogger",
    image: "https://avatar.iran.liara.run/public/6",
    stars: "⭐⭐⭐⭐⭐",
  },
  {
    text: "Blog Made Easy transformed how I share my ideas. The simplicity and speed are unmatched—it feels like my creativity finally has a home.",
    name: "Jess Hadley",
    title: "Creative Content Strategist",
    image: "https://avatar.iran.liara.run/public/40",
    stars: "⭐⭐⭐⭐⭐",
  },
  {
    text: "I never thought managing a blog could be this easy. The layout is modern, intuitive, and helps me focus on what matters—my writing.",
    name: "Amira Chen",
    title: "Marketing Consultant",
    image: "https://avatar.iran.liara.run/public/13",
    stars: "⭐⭐⭐⭐⭐",
  },
  {
    text: "From drafting to publishing, everything just flows perfectly. Blog Made Easy is exactly what every writer needs to stay consistent and inspired.",
    name: "Liam Patel",
    title: "Freelance Writer",
    image: "https://avatar.iran.liara.run/public/21",
    stars: "⭐⭐⭐⭐⭐",
  },
];


  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <section className="testimonials padding-sides">
      <div className="container-testi">
        {/* Left Image Card */}
        <div className="image-card">
          
          <div className="overlay">
            <p>
              Every review is a reflection of our philosophy: accuracy, attention
              and respect for the individual
            </p>
            <button>Leave a review</button>
          </div>
        </div>

        {/* Right Section */}
        <div className="reviews">
          <h2>Real Stories. Real Impact.</h2>
          <p className="subtitle">
           Hear directly from bloggers who use Easy Blog everyday to make impact
          </p>

          <div className="review-slider">
            <div
              className="review-cards"
              ref={sliderRef}
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                transition: "transform 0.5s ease-in-out",
                display: "flex",
              }}
            >
              {cards.map((card, i) => (
                <div className="card-testi" key={i}>
                  <p>{card.text}</p>
                  <div className="profile">
                    <img src={card.image} alt={card.name} />
                    <div>
                      <div className="stars">{card.stars}</div>
                      <h4>{card.name}</h4>
                      <p>{card.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Arrows */}
            <div className="arrows">
              <span className="arrow prev" onClick={prevSlide}>
                &#10094;
              </span>
              <span className="arrow next" onClick={nextSlide}>
                &#10095;
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
