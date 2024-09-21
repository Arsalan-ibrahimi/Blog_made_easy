import Nav_Menu from '../navigations/Nav_Menu';
import Footer from '../navigations/Footer';
import { useState } from 'react';
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
        });
        const data = await response.json();
        console.log(data);
    }
    

    
   
    return (
        <div className='container '>
            <Nav_Menu/>
            

            <div className='Patron_Form_Wrap'>

            <form className='Patron_Form' id='Patron_Form' onSubmit={handleForm}>
            <h1>Sign Up As a Patron</h1>
                <label>
                    Name:
                    <input type="text" name="name" required value={formData.name}
          onChange={handleChange}/>
                </label>
                <label>
                    Email:
                    <input type="email" name="email" required value={formData.email}
          onChange={handleChange}/>
                </label>
                <label>
                    Phone:
                    <input type="tel" name="phone" required value={formData.phone}
          onChange={handleChange}/>
                </label>
                <button type="submit">Submit</button>
            </form>


            </div>


            <Footer/>
        </div>
    )
}   