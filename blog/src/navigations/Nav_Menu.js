import {Link , Outlet} from 'react-router-dom'
import './nav-styles.css'
import logo from '../assets/logo/quick.ico'
function navMenu()
{
    return(
       
        <nav className='nav-wrap'>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/blog'>Blog</Link></li>
                <li><Link to='/settings'>Settings</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                <li><Link to='/'><img src={logo}></img></Link></li>
                <li><Link to='/becomeAuthor'>Become a Writer</Link></li>
                <li><Link to='/becomeReader'>Become a Patron</Link></li>
                <Outlet/>
            </ul>
       
        </nav>

    )
}

export default navMenu;