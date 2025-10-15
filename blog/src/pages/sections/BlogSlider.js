import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function BlogSlider(props) {
  const slides = [
    {
      title: "Post 1",
      content: "This is the content of post 1",
      background: "https://images.pexels.com/photos/1673978/pexels-photo-1673978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
   
  ];

  console.log(props.blogList)

    for ( let i = 0; i < props.blogList.length; i++) {
      slides.push({
        title: props.blogList[i].title,
        content: props.blogList[i].content,
        background: "https://i.pinimg.com/736x/9e/73/b7/9e73b75a3c478bbf418f6a836ba9e1a4.jpg",
        author: props.blogList[i].author
      })
    }

  
  
  return (
    <Swiper
   
      slidesPerView={1}
    
      loop={true}
      loopFillGroupWithBlank={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="blog-slider"
            style={{ backgroundImage: `url(${slide.background})`,   position: "relative", backgroundSize: "cover", backgroundPosition: "center", height: "75dvh" }}
          >
        <div className="slider-text-content">
            <h2 className="blog-card-title">{slide.title}</h2>
            {/* <p>{slide.content}</p> */}
            <p>{"by " + slide.author}</p>
        </div>
        <div className="overlay"></div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

