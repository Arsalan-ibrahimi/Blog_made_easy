import HtmlParser from 'html-react-parser';

export default function ReaderBlogCard(props) {
   
    return (


        <article class="blog-long-card">


                <div class="blog-long-img" style={{ backgroundImage: `url(${props.img})` }}>
                
                </div>
                <div class="blog-long-text">
                    <div className='flex flex-between'>
                    <h4>{props.title}</h4>
                    <p>{props.author}</p>
                    </div>
                    <p>{HtmlParser(props.content)} </p>
                    <p>Views 000 </p>
                </div>

       
    
    
        </article>

    )
}