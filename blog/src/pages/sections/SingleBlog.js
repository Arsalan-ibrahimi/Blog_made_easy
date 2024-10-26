import htmlParser from 'html-react-parser';
import NavMenu from '../../navigations/Nav_Menu';
import Footer from '../../navigations/Footer';
import { useLocation } from 'react-router-dom'

export default function SingleBlog(props) {

    const location = useLocation();
    console.log(location.state.content);
    return (
        <div className='global-div-wrap'> 
        <NavMenu/>
        <div className='feature-wrap ' style={{backgroundImage: 'url(https://images.pexels.com/photos/18164715/pexels-photo-18164715/free-photo-of-person-walking-a-dog-on-a-promenade.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load)', backgroundSize: 'cover',backgroundRepeat: 'no-repeat', backgroundPosition: 'center',width:'100%',height:'60dvh' }}>
        <div className='padding-sides ' style={{ backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6))', height: '100%', width: '100%',display: 'flex',justifyContent: 'end',alignItems: 'start',flexDirection: 'column'}}>
        <h1 className='blog-post-title' style={{color:'white', borderTop: '3px solid orange', }}>{location.state.title}</h1>
      
        <p style={{color:'white'}}>{location.state.author}</p>

        </div>
        </div>

        <div className='padding-sides blog-post container'>
        <div className='content-wrap'>
       {htmlParser(location.state.content)}
        </div>
        </div>
        <Footer/>
        </div>
    )
}