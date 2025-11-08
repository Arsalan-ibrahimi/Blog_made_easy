import Nav_Menu from '../navigations/Nav_Menu';
import Footer from '../navigations/Footer'; 
import ContactSection from './sections/WhyUs'
import '../pages/sections/section.css'

function Contact(){
    return( 
        <div className='container global-div-wrap'>
   <Nav_Menu/>


        <ContactSection/>

            <Footer/>       
        </div>
    )
}


export default Contact;