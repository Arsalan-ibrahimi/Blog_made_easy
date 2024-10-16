import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function BlogSlider() {
  const slides = [
    {
      title: "Post 1",
      content: "This is the content of post 1",
      background: "https://picsum.photos/id/1015/800/600",
    },
    {
      title: "Post 2",
      content: "This is the content of post 2",
      background: "https://picsum.photos/id/1016/800/600",
    },
    {
      title: "Post 3",
      content: "This is the content of post 3",
      background: "https://picsum.photos/id/1019/800/600",
    },
    {
      title: "Post 4",
      content: "This is the content of post 4",
      background: "https://picsum.photos/id/1022/800/600",
    },
    {
      title: "Post 5",
      content: "This is the content of post 5",
      background: "https://picsum.photos/id/1023/800/600",
    },
    {
      title: "Post 6",
      content: "This is the content of post 6",
      background: "https://picsum.photos/id/1024/800/600",
    },
    {
      title: "Post 7",
      content: "This is the content of post 7",
      background: "https://picsum.photos/id/1025/800/600",
    },
    {
      title: "Post 8",
      content: "This is the content of post 8",
      background: "https://picsum.photos/id/1026/800/600",
    },
    {
      title: "Post 9",
      content: "This is the content of post 9",
      background: "https://picsum.photos/id/1027/800/600",
    },
  ];

  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={3}
      slidesPerGroup={3}
      loop={true}
      loopFillGroupWithBlank={true}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="blog-slider"
            style={{ backgroundImage: `url(${slide.background})`, backgroundSize: "cover" }}
          >
            <h2 className="blog-card-title">{slide.title}</h2>
            <p>{slide.content}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

