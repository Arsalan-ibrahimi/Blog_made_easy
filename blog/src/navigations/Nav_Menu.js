import {Link , Outlet} from 'react-router-dom'
import './nav-styles.css'
function Nav_Menu()
{
    return(
       
        <nav className='nav-wrap'>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/blog'>Blog</Link></li>
                <li><Link to='/settings'>Settings</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                <Outlet/>
            </ul>
            <hr/>
        </nav>

    )
}

export default Nav_Menu;