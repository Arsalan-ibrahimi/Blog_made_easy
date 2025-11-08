import React, { useState } from 'react';
import Navbar from '../navigations/Nav_Menu'
import Footer from '../navigations/Footer'
import RollingCards from "./sections/rollingCards";
import { ArrowRight, CheckCircle } from 'lucide-react';
import { FileText, Sparkles, TrendingUp, Clock, Users, Zap } from 'lucide-react';
import bgAbout from '../assets/images/bgabout.png'
import Testimonials from './sections/testimonials'
export default function TeamwayLanding() {
  const [hoveredCard, setHoveredCard] = useState(null);
  return (
    <>
    <style>{`
        @keyframes bounce {
          0%, 80%, 100% {
            transform: scale(1);
            opacity: 0.5;
          }
          40% {
            transform: scale(1.2);
            opacity: 1;
          }
        }
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          background: #f5f7fa;
        }
      `}</style>
    <div  style={{
      height: '100%',
      background: '#fff',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      paddingTop: '1rem'
    }}>
    <Navbar/>
      {/* Main Content */}
      <main className='padding-sides' style={{
        maxWidth: '100dvw',

        margin: '0 auto',
        paddingTop: "5%"
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '4rem', alignItems: 'center' }}>
          {/* Left Column */}
          <div>
            <h1 style={{
              fontSize: '4.5rem',
              fontWeight: '700',
              lineHeight: '1.1',
              marginBottom: '2rem',
              color: '#000'
            }}>
              Write your Blogs<br /> with AI.
            </h1>
            
            <p style={{
              fontSize: '1.1rem',
              color: '#555',
              marginBottom: '2.5rem',
              lineHeight: '1.6'
            }}>
              Use fine-tuned AI agents to make your blogs<br />
              stand out and create an impact.
            </p>
            
            <button style={{
              background: '#000',
              color: '#fff',
              border: 'none',
              borderRadius: '32px',
              padding: '1rem 2rem',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              transition: 'transform 0.2s'
            }}>
              Interested? Sign Up Now
              <ArrowRight size={20} />
              <div style={{
                display: 'flex',
                marginLeft: '1rem',
                alignItems: 'center'
              }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: '#ddd',
                  border: '2px solid #000',
                  marginLeft: '-8px'
                }}></div>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: '#ccc',
                  border: '2px solid #000',
                  marginLeft: '-8px'
                }}></div>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: '#bbb',
                  border: '2px solid #000',
                  marginLeft: '-8px'
                }}></div>
                <span style={{ marginLeft: '0.5rem', fontSize: '0.9rem' }}>+728</span>
              </div>
            </button>
          </div>

          {/* Right Column - Bento Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1rem',
            gridAutoRows: 'minmax(180px, auto)'
          }}>
            {/* Mike Card */}
            <div style={{
              background: 'linear-gradient(135deg, #e8e8e8 0%, #d8d8d8 100%)',
              borderRadius: '20px',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              position: 'relative',
              overflow: 'hidden',
              gridRow: 'span 2'
            }}>
              <div style={{
                width: '100%',
                height: '100%',
                background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.1) 100%)',
                position: 'absolute',
                top: 0,
                left: 0,
                backgroundImage:`url('https://i.pinimg.com/1200x/d9/af/40/d9af4062fd4e92dbb3df25af5103e215.jpg')`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
              }}></div>
              <div style={{
                position: 'relative',
                zIndex: 1,
                
                background: 'rgba(255,255,255,0.9)',
                backdropFilter: 'blur(10px)',
                borderRadius: '12px',
                padding: '0.75rem 1rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                width: 'fit-content'
              }}>
                <span style={{ fontWeight: '600', color: '#000' }}>Mike</span>
                <CheckCircle size={18} fill="#000" color="#fff" />
              </div>
              <span style={{
                fontSize: '0.85rem',
                color: '#666',
                marginTop: '0.25rem',
                position: 'relative',
                zIndex: 1
              }}>Frontend Dev...</span>
            </div>

            {/* Quick Card */}
            <div style={{
              background: 'linear-gradient(135deg, #d4f4dd 0%, #b8e6c4 100%)',
              borderRadius: '20px',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                marginBottom: '1rem',
                color: '#000'
              }}>Quick<br />and adaptable</h3>
              <p style={{
                fontSize: '0.85rem',
                color: '#333',
                lineHeight: '1.5'
              }}>
                Hire within a mere 72 hours. Easily adjust your team size from month to month as required.
              </p>
            </div>

            

            {/* Remote Talent Pool */}
            <div style={{
              background: 'linear-gradient(135deg, #e8d5f2 0%, #d4c5e8 100%)',
              borderRadius: '20px',
              padding: '1.5rem',
              gridColumn: 'span 1',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              backgroundImage: `url('https://i.pinimg.com/736x/10/9d/9d/109d9d64fe2c4249008a01b1328f23c2.jpg')`,
              backgroundSize: 'cover',
              
              backgroundPosition: 'center',
              
            }}>
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: '700',
                marginBottom: '1rem',
                color: '#000'
              }}>Remote Talent<br />Pool</h3>
              
            </div>

            {/* Asger Card */}
            <div style={{
              background: 'linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%)',
              borderRadius: '20px',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'relative',
                gridRow: 'span 2',
                zIndex: 1,
                background: 'rgba(255,255,255,0.9)',
                backdropFilter: 'blur(10px)',
                borderRadius: '12px',
                padding: '0.75rem 1rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                width: 'fit-content'
              }}>
                <span style={{ fontWeight: '600', color: '#000' }}>Asger</span>
                <CheckCircle size={18} fill="#000" color="#fff" />
              </div>
              <span style={{
                fontSize: '0.85rem',
                color: '#999',
                marginTop: '0.25rem',
                position: 'relative',
                zIndex: 1
              }}>UI/UX Designer</span>
            </div>

            {/* Rest Assured Card */}
            <div style={{
             
              borderRadius: '20px',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gridRow: 'span 1',
              backgroundImage: `url('https://i.pinimg.com/736x/ab/cc/81/abcc819b3fb765aa790ae64375f6db76.jpg')`,
              backgroundSize: 'cover',
              backgroundRepeat:'no-repeat',
              backgroundPosition: 'center'
              
            }}>
              
            </div>
          </div>
        </div>


      </main>
      <RollingCards/>




             <div style={{
        minHeight: '100vh',
   
        padding: '40px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}>
        {/* Header */}
        <div style={{
          paddingTop: '5%',
          display: 'flex',
          justifyContent: 'center',
          fontSize: '16px',
          fontWeight: '500',
          marginBottom: '40px',
          paddingLeft: '8px',
        }}>
          <h1> Discover </h1>
        </div>

        {/* Main Container */}
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '600px',
       backgroundImage: `url(${bgAbout})`,
       backgroundSize: 'cover',
       backgroundPosition: 'center'

        }}>
          {/* Top Left Card - Draft Generated */}
          <div
            onMouseEnter={() => setHoveredCard(0)}
            onMouseLeave={() => setHoveredCard(null)}
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              width: '280px',
              background: 'white',
              borderRadius: '16px',
              padding: '20px',
              boxShadow: hoveredCard === 0 ? '0 8px 24px rgba(0,0,0,0.12)' : '0 2px 8px rgba(0,0,0,0.08)',
              transition: 'all 0.3s ease',
              transform: hoveredCard === 0 ? 'translateY(-4px)' : 'translateY(0)',
              cursor: 'pointer',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '8px' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: '#fee2e2',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                <FileText size={24} color="#ef4444" />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '15px', fontWeight: '600', color: '#111827' }}>
                  Draft Generated
                </div>
                <div style={{ fontSize: '13px', color: '#6b7280', marginTop: '2px' }}>
                  AI created new content
                </div>
              </div>
            </div>
            <div style={{ fontSize: '12px', color: '#9ca3af', marginTop: '12px' }}>
              2min ago
            </div>
          </div>

          {/* Top Right Card - Trending */}
          <div
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
            style={{
              position: 'absolute',
              top: '0',
              right: '0',
              width: '280px',
              background: 'white',
              borderRadius: '16px',
              padding: '20px',
              boxShadow: hoveredCard === 1 ? '0 8px 24px rgba(0,0,0,0.12)' : '0 2px 8px rgba(0,0,0,0.08)',
              transition: 'all 0.3s ease',
              transform: hoveredCard === 1 ? 'translateY(-4px)' : 'translateY(0)',
              cursor: 'pointer',
            }}
          >
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: '#d1fae5',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '12px',
            }}>
              <TrendingUp size={24} color="#10b981" />
            </div>
            <div style={{ fontSize: '15px', fontWeight: '600', color: '#111827', marginBottom: '4px' }}>
              Analytics Update
            </div>
            <div style={{ fontSize: '13px', color: '#6b7280' }}>
              Performance insights ready
            </div>
          </div>

          {/* Center Card - Main Icon */}
          <div style={{
            width: '240px',
            height: '240px',
            background: 'white',
            borderRadius: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
            position: 'relative',
            zIndex: 10,
          }}>
            <div style={{
              width: '160px',
              height: '160px',
              borderRadius: '28px',
              background: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 32px rgba(139, 92, 246, 0.4)',
            }}>
              <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                  <div
                    key={i}
                    style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      background: 'white',
                      animation: 'bounce 1.4s ease-in-out infinite',
                      animationDelay: `${i * 0.12}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Left Card - Smart Suggestions */}
          <div
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
            style={{
              position: 'absolute',
              left: '0',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '240px',
              background: 'white',
              borderRadius: '16px',
              padding: '20px',
              boxShadow: hoveredCard === 2 ? '0 8px 24px rgba(0,0,0,0.12)' : '0 2px 8px rgba(0,0,0,0.08)',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
            }}
          >
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: '#e0e7ff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '12px',
            }}>
              <Sparkles size={24} color="#6366f1" />
            </div>
            <div style={{ fontSize: '15px', fontWeight: '600', color: '#111827', marginBottom: '4px' }}>
              Smart Suggestions
            </div>
            <div style={{ fontSize: '13px', color: '#6b7280', lineHeight: '1.5' }}>
              AI suggests quick ideas for new blog posts
            </div>
          </div>

          {/* Right Card - Collaboration */}
          <div
            onMouseEnter={() => setHoveredCard(3)}
            onMouseLeave={() => setHoveredCard(null)}
            style={{
              position: 'absolute',
              right: '0',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '280px',
              background: 'white',
              borderRadius: '16px',
              padding: '20px',
              boxShadow: hoveredCard === 3 ? '0 8px 24px rgba(0,0,0,0.12)' : '0 2px 8px rgba(0,0,0,0.08)',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <div style={{ display: 'flex', marginLeft: '12px' }}>
                <img src="https://i.pravatar.cc/150?img=1" style={{ width: '32px', height: '32px', borderRadius: '50%', border: '2px solid white', marginLeft: '-12px' }} />
                <img src="https://i.pravatar.cc/150?img=2" style={{ width: '32px', height: '32px', borderRadius: '50%', border: '2px solid white', marginLeft: '-12px' }} />
                <img src="https://i.pravatar.cc/150?img=3" style={{ width: '32px', height: '32px', borderRadius: '50%', border: '2px solid white', marginLeft: '-12px' }} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '15px', fontWeight: '600', color: '#111827' }}>
                  Team Review
                </div>
              </div>
            </div>
            <div style={{ fontSize: '13px', color: '#6b7280', marginTop: '8px' }}>
              Collaborating on AI drafts
            </div>
            <div style={{ fontSize: '12px', color: '#9ca3af', marginTop: '12px' }}>
              20min ago
            </div>
          </div>

          {/* Bottom Left Card - Scheduled */}
          <div
            onMouseEnter={() => setHoveredCard(4)}
            onMouseLeave={() => setHoveredCard(null)}
            style={{
              position: 'absolute',
              bottom: '0',
              left: '80px',
              width: '240px',
              background: 'white',
              borderRadius: '16px',
              padding: '20px',
              boxShadow: hoveredCard === 4 ? '0 8px 24px rgba(0,0,0,0.12)' : '0 2px 8px rgba(0,0,0,0.08)',
              transition: 'all 0.3s ease',
              transform: hoveredCard === 4 ? 'translateY(4px)' : 'translateY(0)',
              cursor: 'pointer',
            }}
          >
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: '#fef3c7',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '12px',
            }}>
              <Clock size={24} color="#f59e0b" />
            </div>
            <div style={{ fontSize: '15px', fontWeight: '600', color: '#111827' }}>
              Scheduled Posts
            </div>
            <div style={{ fontSize: '13px', color: '#6b7280', marginTop: '4px' }}>
              3 posts queued for this week
            </div>
          </div>

          {/* Bottom Right Card - AI Translation */}
          <div
            onMouseEnter={() => setHoveredCard(5)}
            onMouseLeave={() => setHoveredCard(null)}
            style={{
              position: 'absolute',
              bottom: '0',
              right: '80px',
              width: '280px',
              background: 'white',
              borderRadius: '16px',
              padding: '20px',
              boxShadow: hoveredCard === 5 ? '0 8px 24px rgba(0,0,0,0.12)' : '0 2px 8px rgba(0,0,0,0.08)',
              transition: 'all 0.3s ease',
              transform: hoveredCard === 5 ? 'translateY(4px)' : 'translateY(0)',
              cursor: 'pointer',
            }}
          >
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: '#fce7f3',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '12px',
            }}>
              <Zap size={24} color="#ec4899" />
            </div>
            <div style={{ fontSize: '15px', fontWeight: '600', color: '#111827', marginBottom: '4px' }}>
              AI Content Boost
            </div>
            <div style={{ fontSize: '13px', color: '#6b7280', lineHeight: '1.5' }}>
              Instant enhancement of written content with SEO optimization
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{
          maxWidth: '1200px',
          margin: '60px auto 0',
          textAlign: 'center',
          padding: '24px',
          background: 'white',
          borderRadius: '16px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        }}>
          <div style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.8' }}>
            As a result of using <span style={{ fontWeight: '600', color: '#8b5cf6' }}>BlogAI</span>, content creators enhance <span style={{ fontWeight: '600', color: '#111827' }}>productivity</span> and <span style={{ fontWeight: '600', color: '#111827' }}>efficiency</span> with AI <span style={{ fontWeight: '600', color: '#111827' }}>writing</span>, <span style={{ fontWeight: '600', color: '#111827' }}>SEO optimization</span>, and advanced content generation. Seamless <span style={{ fontWeight: '600', color: '#111827' }}>collaboration</span> and user-friendly tools facilitate efficient <span style={{ fontWeight: '600', color: '#111827' }}>content management</span> leading to greater productivity and audience satisfaction.
          </div>
        </div>
      </div>


        <Testimonials/>


      <Footer/>
    </div>

    
</>
  );
}