import React from 'react';
import Navbar from '../navigations/Nav_Menu'
import Footer from '../navigations/Footer'
import RollingCards from "./sections/rollingCards";
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function TeamwayLanding() {
  return (
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
              transform: 'rotate(90deg)',
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
              backgroundSize: 'contain',
              backgroundRepeat:'no-repeat',
              backgroundPosition: 'center'
              
            }}>
              
            </div>
          </div>
        </div>


      </main>
      <RollingCards/>
      <Footer/>
    </div>
  );
}