import Nav_Menu from '../navigations/Nav_Menu';
import Footer from '../navigations/Footer';
import $ from 'jquery';


function BecomeReader(){
   
    return (
        <div className='container '>
            <Nav_Menu/>
            

            <div className='Patron_Form_Wrap'>

            <form className='Patron_Form' id='Patron_Form' action="http://localhost:8000/addReader" method="POST">
            <h1>Sign Up As a Patron</h1>
                <label>
                    Name:
                    <input type="text" name="name" required/>
                </label>
                <label>
                    Email:
                    <input type="email" name="email" required/>
                </label>
                <label>
                    Phone:
                    <input type="tel" name="phone" required/>
                </label>
                <button type="submit">Submit</button>
            </form>


            </div>


            <Footer/>
        </div>
    )
}



export default BecomeReader;