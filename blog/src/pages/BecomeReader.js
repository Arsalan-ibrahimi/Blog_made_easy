import Nav_Menu from '../navigations/Nav_Menu';
import Footer from '../navigations/Footer';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import signupIcon from '../assets/icons/signup.svg';
// import $ from 'jquery';


export default function  BecomeReader(){


    const [formData, setFormData] = useState({
        name: '',
        user: '',
        password: '',
        email: '',
        phone: '',

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
        <div className='container global-div-wrap'>
            <Nav_Menu/>
            

            <div className='Patron_Form_Wrap'>

            <form className='Patron_Form'  id='Patron_Form' onSubmit={handleForm}>
            <h2 className='flex'> <img src={signupIcon} /> Sign Up As a Patron</h2>
               
               
                   <div className='flex'>
                   <input type="text" placeholder='Name' name="name" className='input-style' required value={formData.name}
          onChange={handleChange}/>
                <input type="text" placeholder='Username' name="user" className='input-style' required value={formData.user}
          onChange={handleChange}/>
                
                   </div>
                    <input type="email" placeholder='Email' name="email" className='input-style' required value={formData.email}
          onChange={handleChange}/>
                
<input type="password"   placeholder='Password' name="password" className='input-style' required value={formData.password}
          onChange={handleChange}/>
                
                    <input type="tel"   placeholder='Phone' className='input-style' name="phone" required value={formData.phone}
          onChange={handleChange}/>

                <button type="submit" className='universal-button'>Register</button>
            <a href='/signInPatron' className='text-center'>Sign In</a>
            </form>

            </div>


            <Footer/>
        </div>
    )
}   