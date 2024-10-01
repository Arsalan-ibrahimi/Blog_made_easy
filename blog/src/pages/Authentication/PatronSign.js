import Nav_Menu from '../../navigations/Nav_Menu';
import Footer from '../../navigations/Footer';
import { useState, useEffect } from 'react';

export default function SigninPatron()
{
    let [loading,setLoading] = useState(false);
    const [patronData,setPatronData] = useState({});


    const handleSubmit = async (event) => {
        event.preventDefault();
       
        setLoading(true);
        const response = await fetch('http://localhost:8000/loginReader', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(patronData)
        }).then((response) => response.json());
        // console.log(response);
    

        setLoading(false);
      

   
    }


    return (
        <>
        
            <Nav_Menu/>
            <div className='signin-wrapper hero-text'>
           <form className='signin-form' onSubmit={handleSubmit}>
               <p>Sign in to your account</p>
               <input type="text" placeholder="Email" name="email" className='input-style' onChange={(e)=> setPatronData({...patronData, email: e.target.value})}/>
               <input type="password" placeholder="Password" name="password" className='input-style' onChange={(e)=> setPatronData({...patronData, password: e.target.value})}/>
               <button className='signin-button'>Sign In</button>

        <div className="loader-wrapper">
           
         {loading &&  <div className="loader"> <div className="loader-inner"></div>  </div>}
           
        </div>
           </form>
            </div>
            <Footer/>
        </>
    )
}