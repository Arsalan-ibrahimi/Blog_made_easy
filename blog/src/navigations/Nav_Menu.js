import {Link , Outlet} from 'react-router-dom'
import './nav-styles.css'
import logo from '../assets/logo/quick.ico'
import Cookies from 'js-cookie'
import LogoutBtn from '../pages/sections/logoutButton'
function navMenu(props)
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
                <li className='user'>
                     <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" style={{width:"20px",height:"20px",borderRadius:"50%"}} class="user"/>
                </li>
				<li>
                    <button className="flex flex-between" onClick={() => {Cookies.remove("uid"); window.location.reload();}} >

                  Log out
<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right-circle"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                    </button>

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