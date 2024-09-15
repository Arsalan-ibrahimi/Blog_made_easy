
import { BrowserRouter as BrowserRoutes, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Blog from './pages/Blog.js';
import Settings from './pages/Settings.js';
import Contact from './pages/Contact.js';
import NoPage from './pages/NoPage.js';

function App()
{
    return(
        <>

    <BrowserRoutes>
        <Routes>
        <Route path='*' element={<NoPage/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/settings' element={<Settings/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
    </BrowserRoutes>
        </>

    )
}

export default App;