import HtmlParser from 'html-react-parser';
import { Link } from 'react-router-dom';
export default function ReaderBlogCard(props) {


   let dataToPass = {
    key : props.url,
    title:props.title,
    content:props.content,
    author:props.author,
    img:props.img,
   }
    return (


        <article class="blog-long-card">


                <div class="blog-long-img" style={{ backgroundImage: `url(${props.img})` }}>
                
                </div>
                <div class="blog-long-text">
                    <div className='flex flex-between'>
                    <h4>{props.title}</h4>
                    <p>{props.author}</p>
                    </div>
                   
                    <p>Views 000 </p>
                    <Link to={`/blogpost`} state={dataToPass} >
                        <button className='universe-btn' >Read More</button>
                    </Link>
                    <Link to={`/publish`} state={dataToPass} >
                        <button className='universe-btn' >Edit</button>
                    </Link>
                </div>

       
    
    
        </article>

    )
}