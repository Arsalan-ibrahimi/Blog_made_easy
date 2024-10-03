import Nav_Menu from '../../navigations/Nav_Menu';
import Footer from '../../navigations/Footer';
import { useState, useEffect } from 'react';
import SignIcon from '../../assets/icons/login.svg';


export default function SigninPatron()
{
    let [loading,setLoading] = useState(false);
    const [patronData,setPatronData] = useState({});


    const handleSubmit = async (event) => {
        event.preventDefault();
       
        setLoading(true);
        const response = await fetch('http://localhost:8000/loginReader', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(patronData)
        }).then((response) => response.json());
        
        response.name ==='Unknown' ? alert("Invalid Email or Password") : window.open("http://localhost:3000/readerProfile","_self");
    

        setLoading(false);
      

   
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
               <button className='signin-button universal-button'>Sign In</button>

        <div className="loader-wrapper">
           
         {loading &&  <div className="loader"> <div className="loader-inner"></div>  </div>}
           
        </div>
           </form>
            </div>
            <div>
            <Footer/>
            </div>
            </div>
        </div>
    )
}