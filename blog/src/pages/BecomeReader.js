import Nav_Menu from '../navigations/Nav_Menu';
import Footer from '../navigations/Footer';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import signupIcon from '../assets/icons/signup.svg';
// import $ from 'jquery';


export default function  BecomeReader(){


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };
    

    const handleForm = async (event) => {
        event.preventDefault();
        const response = await fetch('http://localhost:8000/addReader', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then((response) => response.json()).
        then((data) => {console.log(data)
        });
        
        
        window.open("http://localhost:3000/thankyou","_self")
    }
    

    
   
    return (
        <div className='container '>
            <Nav_Menu/>
            

            <div className='Patron_Form_Wrap'>

            <form className='Patron_Form'  id='Patron_Form' onSubmit={handleForm}>
            <h2 className='flex'> <img src={signupIcon} /> Sign Up As a Patron</h2>
               
               
                   <div className='flex'>
                   <input type="text" placeholder='Name' name="name" required value={formData.name}
          onChange={handleChange}/>
               
                
                    <input type="email" placeholder='Email' name="email" required value={formData.email}
          onChange={handleChange}/>
                   </div>
                
                
                    <input type="tel"   placeholder='Phone' name="phone" required value={formData.phone}
          onChange={handleChange}/>
                
                <button type="submit">Submit</button>
            </form>


            </div>


            <Footer/>
        </div>
    )
}   