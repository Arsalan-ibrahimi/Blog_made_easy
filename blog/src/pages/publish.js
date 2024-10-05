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

    console.log(text);
  return (
    <>
    <NavMenu/>
     
    <div className="padding-sides text-controls">
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
          <button onClick={saveContentAsHtml}>Save as HTML</button>
          <button onClick={loadHtmlContent}>Load HTML</button>
      </div>
      <Footer/>
    </>
  );
}