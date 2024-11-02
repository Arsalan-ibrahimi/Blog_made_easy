import Nav_Menu from '../../navigations/Nav_Menu';
import Footer from '../../navigations/Footer';
import { useState, useEffect } from 'react';
import SignIcon from '../../assets/icons/login.svg';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export default function SigninPatron()
{
    let [loading,setLoading] = useState();
    const [patronData,setPatronData] = useState({});
    // let responseG;


    const handleSubmit = async (event) => {
        setLoading(true);
        event.preventDefault();
       
        const response = await fetch('http://localhost:8000/loginReader', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(patronData)
        }).then((response) => response.json());
        
        if(response.name ==='Unknown')
            {
                setLoading(false);
                alert("Wrong email or password");
                
            }
            else

            {
               
            //    responseG = true;
            //    setLoading(false);
               Cookies.set('uid', response.uid);
               Cookies.set('_id', response._id);
               window.open("http://localhost:3000/readerProfile","_self")
            //    setLoading(false);
            }

      

   
    }

    
    return (
        <div >
        
            <div className=' container global-div-wrap'>
            <Nav_Menu/>
            <div className='inner-contents'>
           <form className='signin-form' onSubmit={handleSubmit}>
             <div className='sign-icon text-center'>  <img src={SignIcon} alt="Sign Icon" /> </div>
               <p>Sign in to your account</p>
               <input type="text" placeholder="Email" name="email" className='input-style' onChange={(e)=> setPatronData({...patronData, email: e.target.value})}/>
               <input type="password" placeholder="Password" name="password" className='input-style' onChange={(e)=> setPatronData({...patronData, password: e.target.value})}/>
               <button className='signin-button universal-button loader-wrapper'>{loading ?  <div className="loader"> <div className="loader-inner"></div>  </div>: "Sign In"}</button>

       
           </form>
            </div>
            <div>
            <Footer/>
            </div>
            </div>
        </div>
    )
}