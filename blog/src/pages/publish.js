import { convertToRaw, EditorState, ContentState } from "draft-js";
import { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import NavMenu from "../navigations/Nav_Menu";
import Footer from "../navigations/Footer";
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useLocation } from "react-router-dom";

// import { Fragment } from "react";
export default function Index( ) {
  const location = useLocation();
  const [savedHtml, setSavedHtml] = useState();
  const [file, setFile] = useState();
  const [title, setTitle] = useState(location.state?.title || '');
  let imageUrl;
  
 



    const saveContentAsHtml = () => {
        const rawContentState = convertToRaw(editorState.getCurrentContent());
        const html = draftToHtml(rawContentState);
        setSavedHtml(html);
        console.log('Saved HTML: ', html);
      };
    
      // Load HTML into the editor
      const loadHtmlContent = () => {
        const html = savedHtml; // Assume savedHtml contains the saved HTML
        const contentBlock = htmlToDraft(html);
     
        if (contentBlock) {
            const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
            const newEditorState = EditorState.createWithContent(contentState);
            setEditorState(newEditorState);
          }
      };


      

  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [text, setText] = useState();
  
  useEffect(() => {
    if(location.state)
      {
        const html = location.state.content;
        const contentBlock = htmlToDraft(html);
        if (contentBlock) {
            const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
            const newEditorState = EditorState.createWithContent(contentState);
            setEditorState(newEditorState);
           
          }
      }
  },[])



  
  const onEditorStateChange = function (editorState) {
    setEditorState(editorState);
    const { blocks } = convertToRaw(editorState.getCurrentContent());
    /*let text = blocks.reduce((acc, item) => {
      acc = acc + item.text;
      return acc;
    }, "");*/
    let text = editorState.getCurrentContent().getPlainText("\u0001");
    setText(text);
  };



  function sendToBackend() {
    const rawContentState = convertToRaw(editorState.getCurrentContent());
    const html = draftToHtml(rawContentState);
   
    let title = document.querySelector('.blog-title').value;
    fetch('http://localhost:8000/newBlog', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        
        title: title,
        content: html,
        author: Cookies.get('_id'),
    
      }),
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));

  }
  function sendToUpdate() {

     if(location.state)
      {

    const rawContentState = convertToRaw(editorState.getCurrentContent());
    const html = draftToHtml(rawContentState);   
    let title = document.querySelector('.blog-title').value;
  let key = location.state?.key || location.pathname.split("/").pop();
  const result = key.split("/").pop();
 

    fetch('http://localhost:8000/updateBlog', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        result: result,
        title: title,
        content: html,
        author: Cookies.get('_id'),
      }),
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));


      }


  }

  if(!Cookies.get('uid')){
    return <Navigate to="/becomeReader" />    
  }


  const uploadHandleBlogImage = (e) => {
    const file = e.target.files[0];
      if (file) {
      // Create a local URL for preview
      const imagePreviewUrl = URL.createObjectURL(file);
      setFile(imagePreviewUrl);
    
    }

  
    
  };
  return (
    
    
    <>

    
    <div class="container global-div-wrap">
    <NavMenu />
    
    
    <div className="padding-sides  flex " style={{paddingTop: "5%", paddingBottom: "10px"}}>
    
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="orange"><path d="M420-160v-520H200v-120h560v120H540v520H420Z"/></svg>
    <input type="text" placeholder="Your Blog Title" className="blog-title"  value={title}   onChange={(e) => setTitle(e.target.value)} required  />

    </div>
    <div className="padding-sides text-controls flex ">

    <div className="editing-controls" >
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={onEditorStateChange}
        mention={{
          separator: " ",
          trigger: "@",
          suggestions: [
            { text: "APPLE", value: "apple" },
            { text: "BANANA", value: "banana", url: "banana" },
            { text: "CHERRY", value: "cherry", url: "cherry" },
            { text: "DURIAN", value: "durian", url: "durian" },
            { text: "EGGFRUIT", value: "eggfruit", url: "eggfruit" },
            { text: "FIG", value: "fig", url: "fig" },
            { text: "GRAPEFRUIT", value: "grapefruit", url: "grapefruit" },
            { text: "HONEYDEW", value: "honeydew", url: "honeydew" }
          ]
        }}
      />
         
    </div>
    <div className="meta-data">
    <div className="slug-wrap card-style" style={{paddingRight: "10px"}}>
      <p>Slug</p>
      <input className="" style={{border: "none", outline: "none"}} value={location?.state?.key ?? "www.blog-made-easy.vercel.app/publish"}/>
    </div>
    <div className="card-style flex">
    
    
    {location.state?<button onClick={sendToUpdate}  className="universal-button"> Republish</button>:<button onClick={sendToBackend} className="universal-button">Publish</button>}
    <button onClick={saveContentAsHtml} className="universal-button">

<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-save"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>
    </button>
          <button onClick={loadHtmlContent} className="universal-button"> 
          
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"></polyline></svg>
</button>
          
    </div>
    <div className="card-style">
    <p>Blog Feature Image</p>
  <img src={file} style={{width: "fit-content", height: "fit-content", borderRadius: "5px"} } />
      <input type="file" id="file-input" onChange={uploadHandleBlogImage} />
    </div>

    <div className="card-style">
    <p>Blog Category</p>
  
      
  
      <select name="" id="">
        <option value="">--select--</option>  
      </select>
    </div>

    </div>

      </div>

   
      <Footer/>
      </div>
    </>
    

);
}


