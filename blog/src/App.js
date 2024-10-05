
import { BrowserRouter as BrowserRoutes, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Blog from './pages/Blog.js';
import Settings from './pages/Settings.js';
import Contact from './pages/Contact.js';
import NoPage from './pages/NoPage.js';
import BecomeAuthor from './pages/BecomeAuthor.js';
import BecomeReader from './pages/BecomeReader.js';
import Thankyoureader from './pages/complimentaries/readerThankyou.js';
import PublishPage from './pages/publish.js';
import ReaderProfile from './pages/User_specifics/Reader_profile.js';
import PatronSignin from './pages/Authentication/PatronSign.js'
import './App.css';

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
            <Route path='/becomeAuthor' element={<BecomeAuthor/>}/>
            <Route path='/becomeReader' element={<BecomeReader/>}/>
            <Route path='/thankyou' element={<Thankyoureader/>}/>
            <Route path='/publish' element={<PublishPage/>}/>
            <Route path='/readerprofile' element={<ReaderProfile/>}/>
            <Route path='/signInPatron' element={<PatronSignin/>}/>
        </Routes>
    </BrowserRoutes>
        </>

    )
}

export default App;