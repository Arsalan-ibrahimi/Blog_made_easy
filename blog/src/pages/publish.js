import { convertToRaw, EditorState, ContentState } from "draft-js";
import { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import NavMenu from "../navigations/Nav_Menu";
import Footer from "../navigations/Footer";
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

import { Fragment } from "react";
export default function Index() {


    const [savedHtml, setSavedHtml] = useState();

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
        author: 'Arsalan',
      }),
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));

  }


  return (
    <>
    <div class="container global-div-wrap">
    <NavMenu/>
    <div className="padding-sides text-controls">
    <input type="text"  placeholder="Title" className="input-style blog-title" required />

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
          <button onClick={saveContentAsHtml} className="universal-button">Save as HTML</button>
          <button onClick={loadHtmlContent} className="universal-button">Load HTML</button>
          <button onClick={sendToBackend} className="universal-button">Save</button>
      </div>
      <Footer/>
      </div>
    </>
  );
}
