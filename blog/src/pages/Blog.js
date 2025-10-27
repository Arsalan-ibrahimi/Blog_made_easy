import React, { useState, useEffect } from 'react';

import Footer from '../navigations/Footer'
import Navbar from '../navigations/Nav_Menu'

const MagdesignMagazine = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredPosts = [
    {
      image: "https://images.pexels.com/photos/1673978/pexels-photo-1673978.jpeg",
      category: "Real-time Analytics",
      title: "Exploring Kyoto: The City of Hidden Gardens and Cultural Tapestry",
      excerpt: "Tucked within the busy streets are pockets of peace, where time slows down and the hum of the city fades into whispers of ancient trees and trickling streams. From the iconic Arashiyama bamboo grove to the...",
      author: "Albert Flores",
      role: "Co-Founder",
      date: "October 25, 2025"
    },
    {
      image: "https://images.pexels.com/photos/1430677/pexels-photo-1430677.jpeg",
      category: "Lifestyle",
      title: "Summer Vibes: Creating Your Perfect Beach Getaway",
      excerpt: "Discover how embracing the coastal lifestyle can transform your daily routine and bring serenity to your mind and body through sun, sand, and sea.",
      author: "Michael Chen",
      role: "Writer",
      date: "October 24, 2025"
    },
    {
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop",
      category: "Adventure",
      title: "Epic Mountain Adventures Around the World",
      excerpt: "From the peaks of the Himalayas to the ranges of Patagonia, explore the most breathtaking mountain destinations that will ignite your sense of adventure.",
      author: "Emma Davis",
      role: "Explorer",
      date: "October 23, 2025"
    },
    {
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1920&h=1080&fit=crop",
      category: "Travel",
      title: "Wanderlust: The Ultimate Road Trip Guide",
      excerpt: "Hit the open road and discover hidden gems along the way. Your comprehensive guide to planning the perfect road trip adventure across continents.",
      author: "Alex Thompson",
      role: "Travel Guide",
      date: "October 22, 2025"
    }
  ];

  const posts = [
    {
      image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&h=400&fit=crop",
      category: "Lifestyle",
      title: "The Art of Minimalist Living in Modern Times",
      excerpt: "Discover how embracing minimalism can transform your daily life and bring clarity to your space and mind.",
      date: "October 24, 2025",
      readTime: "5 min read"
    },
    {
      image: "https://images.unsplash.com/photo-1445620466293-d6316372ab59?w=600&h=400&fit=crop",
      category: "Fashion",
      title: "Sustainable Fashion: The Future is Here",
      excerpt: "Exploring the rise of eco-conscious fashion brands and their impact on the industry's future.",
      date: "October 23, 2025",
      readTime: "7 min read"
    },
    {
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop",
      category: "Food",
      title: "Farm to Table: A Culinary Revolution",
      excerpt: "How local sourcing is changing the way we think about food and supporting communities.",
      date: "October 22, 2025",
      readTime: "6 min read"
    },
    {
      image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&h=400&fit=crop",
      category: "Travel",
      title: "Digital Nomad Guide to Remote Work",
      excerpt: "Essential tips for maintaining productivity while exploring the world as a digital nomad.",
      date: "October 21, 2025",
      readTime: "8 min read"
    }
  ];

  const popularPosts = [
    {
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=200&fit=crop",
      title: "Mountain Adventures You Can't Miss",
      date: "October 20, 2025"
    },
    {
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=200&h=200&fit=crop",
      title: "The Complete Guide to Travel Photography",
      date: "October 18, 2025"
    },
    {
      image: "https://images.unsplash.com/photo-1496412705862-e0088f16f791?w=200&h=200&fit=crop",
      title: "Healthy Morning Routines for Success",
      date: "October 15, 2025"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredPosts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [featuredPosts.length]);

  const moveSlide = (direction) => {
    setCurrentSlide((prev) => {
      const next = prev + direction;
      if (next < 0) return featuredPosts.length - 1;
      if (next >= featuredPosts.length) return 0;
      return next;
    });
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const styles = {
    body: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      margin: 0,
      padding: 0,
      color: '#333'
    },
    header: {
      background: '#fff',
      borderBottom: '1px solid #e5e5e5',
      position: 'sticky',
      top: 0,
      zIndex: 100
    },
    navContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    logo: {
      fontSize: '32px',
      fontWeight: 700,
      color: '#000',
      textDecoration: 'none',
      letterSpacing: '-1px'
    },
    nav: {
      display: 'flex',
      listStyle: 'none',
      gap: '35px',
      margin: 0,
      padding: 0
    },
    navLink: {
      textDecoration: 'none',
      color: '#666',
      fontSize: '14px',
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      transition: 'color 0.3s'
    },
    container: {
      margin: '0 auto',
    },
    sliderContainer: {
      position: 'relative',
      height: '80vh',
      overflow: 'hidden',
      marginBottom: '40px'
    },
    sliderWrapper: {
      position: 'relative',
      height: '100%',
      width: '100%'
    },
    slide: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '80vh',
      background: '#000',
      opacity: 0,
      transition: 'opacity 1s ease-in-out',
      pointerEvents: 'none'
    },
    slideActive: {
      opacity: 1,
      pointerEvents: 'auto'
    },
    slideImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: 1
    },
    slideOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(to right, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 100%)'
    },
    featuredContent: {
      position: 'absolute',
      top: '50%',
      right: '80px',
      transform: 'translateY(-50%)',
      color: '#fff',
      maxWidth: '600px',
      textAlign: 'left'
    },
    categoryTag: {
      display: 'inline-block',
      background: 'transparent',
      color: '#fff',
      padding: '0',
      fontSize: '13px',
      textTransform: 'uppercase',
      letterSpacing: '2px',
      marginBottom: '20px',
      fontWeight: '400',
      animation: 'fadeUp 0.8s ease-out 0.2s both'
    },
    featuredTitle: {
      fontSize: '56px',
      marginBottom: '25px',
      lineHeight: 1.2,
      fontWeight: '700',
      animation: 'fadeUp 0.8s ease-out 0.4s both'
    },
    featuredExcerpt: {
      fontSize: '16px',
      lineHeight: '1.6',
      marginBottom: '30px',
      opacity: '0.95',
      fontWeight: '300',
      animation: 'fadeUp 0.8s ease-out 0.6s both'
    },
    authorInfo: {
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
      marginBottom: '30px',
      fontSize: '14px',
      animation: 'fadeUp 0.8s ease-out 0.8s both'
    },
    readButton: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      background: 'transparent',
      color: '#fff',
      border: '1px solid rgba(255,255,255,0.5)',
      padding: '14px 30px',
      fontSize: '14px',
      textTransform: 'uppercase',
      letterSpacing: '1.5px',
      cursor: 'pointer',
      transition: 'all 0.3s',
      fontWeight: '500',
      animation: 'fadeUp 0.8s ease-out 1s both'
    },
    sliderArrow: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'rgba(255, 255, 255, 0.3)',
      color: '#fff',
      border: 'none',
      width: '50px',
      height: '50px',
      fontSize: '24px',
      cursor: 'pointer',
      transition: 'background 0.3s',
      zIndex: 10
    },
    sliderNav: {
      position: 'absolute',
      bottom: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: '10px',
      zIndex: 10
    },
    sliderDot: {
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      background: 'rgba(255, 255, 255, 0.5)',
      border: 'none',
      cursor: 'pointer',
      transition: 'background 0.3s'
    },
    sliderDotActive: {
      background: '#fff'
    },
    mainContent: {
      display: 'grid',
      gridTemplateColumns: '1fr 350px',
      gap: '60px',
      margin: '60px 0',
      maxWidth: '1400px',
      marginLeft: 'auto',
      marginRight: 'auto',
      padding: '0 40px'
    },
    postsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '40px'
    },
    postCard: {
      background: '#fff'
    },
    postImage: {
      width: '100%',
      height: '250px',
      background: '#f0f0f0',
      overflow: 'hidden',
      marginBottom: '20px'
    },
    postImageImg: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.3s'
    },
    postCategoryTag: {
      display: 'inline-block',
      background: '#ff6b6b',
      color: '#fff',
      padding: '5px 15px',
      fontSize: '12px',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      marginBottom: '15px'
    },
    postTitle: {
      fontSize: '22px',
      marginBottom: '12px',
      lineHeight: 1.3
    },
    postTitleLink: {
      color: '#000',
      textDecoration: 'none',
      transition: 'color 0.3s'
    },
    postExcerpt: {
      color: '#666',
      fontSize: '15px',
      lineHeight: 1.6,
      marginBottom: '15px'
    },
    postMetaSmall: {
      color: '#999',
      fontSize: '13px'
    },
    sidebar: {
      position: 'sticky',
      top: '100px',
      alignSelf: 'start'
    },
    widget: {
      background: '#f8f9fa',
      padding: '30px',
      marginBottom: '30px'
    },
    widgetTitle: {
      fontSize: '14px',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      marginBottom: '20px',
      paddingBottom: '10px',
      borderBottom: '2px solid #000'
    },
    popularPost: {
      display: 'flex',
      gap: '15px',
      marginBottom: '20px'
    },
    popularThumb: {
      width: '80px',
      height: '80px',
      flexShrink: 0,
      background: '#ddd',
      overflow: 'hidden'
    },
    popularThumbImg: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    popularTitle: {
      fontSize: '14px',
      lineHeight: 1.4,
      marginBottom: '5px'
    },
    popularTitleLink: {
      color: '#333',
      textDecoration: 'none',
      transition: 'color 0.3s'
    },
    popularDate: {
      fontSize: '12px',
      color: '#999'
    },
    newsletterInput: {
      width: '100%',
      padding: '12px',
      border: '1px solid #ddd',
      marginBottom: '10px',
      fontSize: '14px',
      boxSizing: 'border-box'
    },
    newsletterButton: {
      width: '100%',
      padding: '12px',
      background: '#000',
      color: '#fff',
      border: 'none',
      cursor: 'pointer',
      fontSize: '14px',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      transition: 'background 0.3s'
    },
    categoryList: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    categoryItem: {
      marginBottom: '10px'
    },
    categoryLink: {
      color: '#666',
      textDecoration: 'none',
      fontSize: '14px',
      transition: 'color 0.3s'
    },
    footer: {
      background: '#1a1a1a',
      color: '#aaa',
      padding: '60px 0 30px',
      marginTop: '80px'
    },
    footerContent: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '40px',
      marginBottom: '40px',
      maxWidth: '1200px',
      margin: '0 auto 40px',
      padding: '0 40px'
    },
    footerTitle: {
      color: '#fff',
      marginBottom: '20px',
      fontSize: '16px'
    },
    footerText: {
      fontSize: '14px',
      lineHeight: 1.8
    },
    footerLinks: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    footerLinkItem: {
      marginBottom: '10px'
    },
    footerLink: {
      color: '#aaa',
      textDecoration: 'none',
      fontSize: '14px',
      transition: 'color 0.3s'
    },
    copyright: {
      textAlign: 'center',
      paddingTop: '30px',
      borderTop: '1px solid #333',
      fontSize: '13px',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '30px 40px 0'
    }
  };

  return (
    <div style={styles.body}>
      <style>
        {`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
  
          <Navbar/>
  

      {/* Hero Slider */}
      <div style={styles.container}>
        <div style={styles.sliderContainer}>
          <button 
            onClick={() => moveSlide(-1)}
            style={{...styles.sliderArrow, left: '20px'}}
            onMouseEnter={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.5)'}
            onMouseLeave={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.3)'}
          >
            ‹
          </button>
          <button 
            onClick={() => moveSlide(1)}
            style={{...styles.sliderArrow, right: '20px'}}
            onMouseEnter={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.5)'}
            onMouseLeave={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.3)'}
          >
            ›
          </button>

          <div style={styles.sliderWrapper}>
            {featuredPosts.map((post, index) => (
              <div 
                key={index} 
                style={{
                  ...styles.slide,
                  ...(currentSlide === index ? styles.slideActive : {})
                }}
              >
                <img 
                  src={post.image} 
                  alt={post.title}
                  style={styles.slideImage}
                />
                <div style={styles.slideOverlay}></div>
                {currentSlide === index && (
                  <div style={styles.featuredContent}>
                    <div style={styles.categoryTag}>
                      {post.category}
                    </div>
                    <h1 style={styles.featuredTitle}>
                      {post.title}
                    </h1>
                    <p style={styles.featuredExcerpt}>
                      {post.excerpt}
                    </p>
                    <div style={styles.authorInfo}>
                      <span>{post.author}</span>
                      <span style={{opacity: 0.7}}>•</span>
                      <span style={{opacity: 0.8}}>{post.role}</span>
                    </div>
                    <button 
                      style={styles.readButton}
                      onMouseEnter={(e) => {
                        e.target.style.background = '#fff';
                        e.target.style.color = '#000';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'transparent';
                        e.target.style.color = '#fff';
                      }}
                    >
                      Read Complete Blog
                      <span style={{fontSize: '16px'}}>→</span>
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div style={styles.sliderNav}>
            {featuredPosts.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                style={{
                  ...styles.sliderDot,
                  ...(currentSlide === index ? styles.sliderDotActive : {})
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={styles.container}>
        <div style={styles.mainContent}>
          {/* Posts Grid */}
          <div>
            <div style={styles.postsGrid}>
              {posts.map((post, index) => (
                <div key={index} style={styles.postCard}>
                  <div style={styles.postImage}>
                    <img 
                      src={post.image} 
                      alt={post.title}
                      style={styles.postImageImg}
                      onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                      onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                    />
                  </div>
                  <div>
                    <span style={styles.postCategoryTag}>
                      {post.category}
                    </span>
                    <h3 style={styles.postTitle}>
                      <a 
                        href="#" 
                        style={styles.postTitleLink}
                        onMouseEnter={(e) => e.target.style.color = '#ff6b6b'}
                        onMouseLeave={(e) => e.target.style.color = '#000'}
                      >
                        {post.title}
                      </a>
                    </h3>
                    <p style={styles.postExcerpt}>
                      {post.excerpt}
                    </p>
                    <div style={styles.postMetaSmall}>
                      {post.date} • {post.readTime}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside style={styles.sidebar}>
            {/* Popular Posts */}
            <div style={styles.widget}>
              <h4 style={styles.widgetTitle}>Popular Posts</h4>
              {popularPosts.map((post, index) => (
                <div key={index} style={styles.popularPost}>
                  <div style={styles.popularThumb}>
                    <img 
                      src={post.image} 
                      alt={post.title}
                      style={styles.popularThumbImg}
                    />
                  </div>
                  <div>
                    <h5 style={styles.popularTitle}>
                      <a 
                        href="#" 
                        style={styles.popularTitleLink}
                        onMouseEnter={(e) => e.target.style.color = '#ff6b6b'}
                        onMouseLeave={(e) => e.target.style.color = '#333'}
                      >
                        {post.title}
                      </a>
                    </h5>
                    <div style={styles.popularDate}>{post.date}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Newsletter */}
            <div style={styles.widget}>
              <h4 style={styles.widgetTitle}>Newsletter</h4>
              <p style={{marginBottom: '15px', fontSize: '14px', color: '#666'}}>
                Subscribe to get the latest articles delivered to your inbox.
              </p>
              <input 
                type="email" 
                placeholder="Your email address"
                style={styles.newsletterInput}
              />
              <button 
                style={styles.newsletterButton}
                onMouseEnter={(e) => e.target.style.background = '#333'}
                onMouseLeave={(e) => e.target.style.background = '#000'}
              >
                Subscribe
              </button>
            </div>

            {/* Categories */}
            <div style={styles.widget}>
              <h4 style={styles.widgetTitle}>Categories</h4>
              <ul style={styles.categoryList}>
                <li style={styles.categoryItem}>
                  <a 
                    href="#" 
                    style={styles.categoryLink}
                    onMouseEnter={(e) => e.target.style.color = '#000'}
                    onMouseLeave={(e) => e.target.style.color = '#666'}
                  >
                    Lifestyle (24)
                  </a>
                </li>
                <li style={styles.categoryItem}>
                  <a 
                    href="#" 
                    style={styles.categoryLink}
                    onMouseEnter={(e) => e.target.style.color = '#000'}
                    onMouseLeave={(e) => e.target.style.color = '#666'}
                  >
                    Travel (18)
                  </a>
                </li>
                <li style={styles.categoryItem}>
                  <a 
                    href="#" 
                    style={styles.categoryLink}
                    onMouseEnter={(e) => e.target.style.color = '#000'}
                    onMouseLeave={(e) => e.target.style.color = '#666'}
                  >
                    Fashion (15)
                  </a>
                </li>
                <li style={styles.categoryItem}>
                  <a 
                    href="#" 
                    style={styles.categoryLink}
                    onMouseEnter={(e) => e.target.style.color = '#000'}
                    onMouseLeave={(e) => e.target.style.color = '#666'}
                  >
                    Food (12)
                  </a>
                </li>
                <li style={styles.categoryItem}>
                  <a 
                    href="#" 
                    style={styles.categoryLink}
                    onMouseEnter={(e) => e.target.style.color = '#000'}
                    onMouseLeave={(e) => e.target.style.color = '#666'}
                  >
                    Technology (9)
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>

      <Footer/>
    </div>
  );
};

export default MagdesignMagazine;