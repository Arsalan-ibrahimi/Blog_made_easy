import { useRef, useState } from "react";


export default function Testimonils() {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      text: "Informed Opinions' workshop was informative and highly productive. My op-ed was translated into multiple languages and was the most read story across all Vice networks worldwide for a full day. The feedback has been phenomenal and exciting opportunities have emerged from it.",
      name: "Naila Keleta-Mae",
      title: "Professor of Theatre and Performance, University of Waterloo",
      image: "profile1.jpg",
      stars: "⭐⭐⭐⭐☆",
    },
    {
      text: "So much incredibly valuable content delivered in a consistently compelling, practical and enjoyable way.",
      name: "Jess Hadley",
      title: "Labour and Employment Specialist",
      image: "profile2.jpg",
      stars: "⭐⭐⭐⭐⭐",
    },
    {
      text: "The experience truly boosted my confidence and improved my professional communication skills.",
      name: "Amira Chen",
      title: "Marketing Consultant",
      image: "profile3.jpg",
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
            Hear directly from the women and gender-diverse experts we’ve
            empowered through our programs.
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
