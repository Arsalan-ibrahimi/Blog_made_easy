import Nav_Menu from '../navigations/Nav_Menu';
import Footer from '../navigations/Footer'; 
import {useState, useEffect} from 'react';
import { set } from 'draft-js/lib/DefaultDraftBlockRenderMap';
import BlogCards from './User_specifics/blogcards'

function Blog(){

    var blogList = [];
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {

        fetch('http://localhost:8000/getBlogs', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
        }).then(response => response.json())
        .then(data => setBlogs(data))
        .catch(error => console.error('Error:', error));


      }, []);
      if (blogs.length < 0) {
        blogList.push(<div className='no-blogs-image'></div>);
      }
      else{
       blogList  = blogs.map((blog) => (
            <BlogCards key={blog._id} title={blog.title} author={blog.author} content={blog.content}/>
        ));
    }
       

    return( 
        <div class="container global-div-wrap">
        <Nav_Menu/>
            
         <div class="padding-sides ">

        {blogList}

         </div>
        <Footer/>
        </div>
    )
}


export default Blog;