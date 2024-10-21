import {Link , Outlet} from 'react-router-dom'
import './nav-styles.css'
import logo from '../assets/logo/quick.ico'
import Cookies from 'js-cookie'
function navMenu()
{
    if(Cookies.get("uid"))
    {
        return(
        <nav className='nav-wrap'>
         <div className="reader-menu-specific">
			<ul>
				<li>
					<a href="/readerProfile">
						Profile
					</a>
				</li>
				<li>
					<a href="/blog">
						Blog
					</a>
				</li>
				<li>
					<a href="/publish">
						Write
					</a>
				</li>
				<li>
					<button className="btn" onClick={() => {Cookies.remove("uid"); window.location.reload();}}>Log Out -X  </button>
				</li>
                <li className='user-profile'>
                     <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" class="user-photo"/>
                </li>
			</ul>
		</div>
       
        </nav>
        )
    }
    else{
    return(
       
        <nav className='nav-wrap'>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/blog'>Blog</Link></li>
                <li><Link to='/settings'>Settings</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                <li><Link to='/'><img src={logo}></img></Link></li>
                <li><Link to='/becomeAuthor' className='universal-button'>Become a Writer</Link></li>
                <li><Link to='/becomeReader'className='universal-button'>Become a Patron</Link></li>
                <Outlet/>
            </ul>
       
        </nav>
    )
}
}

export default navMenu;