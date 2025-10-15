import ReactHtmlParser from 'html-react-parser';

export default function BlogCards(props) {
    let text = props.content.substring(0, 450)
    return (





       <div className="blog-cad">
          
            <h2 className='blog-card-title' style={{fontSize:'1.2rem'}}>{props.title}</h2>
            <p className='blog-card-author'>{props.author}</p>
         <p>{ReactHtmlParser(text)}</p>
            <button className='universal-button'>Read More</button>
            
      </div> 


        
    )
}