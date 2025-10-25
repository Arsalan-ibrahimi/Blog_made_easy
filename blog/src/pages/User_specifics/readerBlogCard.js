import HtmlParser from 'html-react-parser';
import { Link } from 'react-router-dom';
export default function ReaderBlogCard(props) {


   let dataToPass = {
    key : props.url,
    title:props.title,
    content:props.content,
    timestamp:props.timeStmp,
    img:props.img,
    actualDate: props.timeActual
   }
    return (


        <article class="blog-long-card">


                <div class="blog-long-img" style={{ backgroundImage: `url(${props.img})` }}>
                
                </div>
                <div class="blog-long-text">
                    <div className='flex flex-between'>
                    <h4>{props.title}</h4>
                    <span>
                    <p style={{display: "none"}}>{dataToPass.key}</p>
                    <p>{dataToPass.timestamp}</p>
                    <p>{dataToPass.actualDate}</p>
                    </span>
                    </div>
                   
                    <p>Views 000 </p>
                    <div className='flex'>
                    <Link to={`/blogpost`} state={dataToPass} >
                        <button className='universe-btn blog-long-btn' >Read More
                            <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
                        </button>
                    </Link>
                    <Link to={`/publish`} state={dataToPass} >
                        <button className='universe-btn blog-long-btn' >Edit
                          <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>

                        </button>
                    </Link>
                    </div>
                </div>

       
    
    
        </article>

    )
}