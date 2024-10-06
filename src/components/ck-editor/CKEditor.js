import React, { useEffect, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'; // CKEditor Classic build
import hljs from 'highlight.js';
import 'highlight.js/styles/stackoverflow-dark.css'; // Choose a theme for highlight.js
import { useDispatch, useSelector } from 'react-redux';

const CkEditor = ({lang}) => {
  const [editorData, setEditorData] = useState('');
  const {loading, error, data} =  useSelector((state)=> state.globalData) 
  const dispatch = useDispatch();
  
  const wrapCodeBlocks = (htmlString) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
  
    // Select all <p> tags
    const paragraphs = doc.querySelectorAll('p');
  
    let insideCodeBlock = false;
    let codeContent = '';
    let startCodeBlockNode = null;
  
    paragraphs.forEach((p) => {
      let content = p.innerHTML.trim();
      content = content.replace(/&nbsp;/g, ' ');
  
      if (content.startsWith('```') && !insideCodeBlock) {
        insideCodeBlock = true;
        startCodeBlockNode = p;
        codeContent += content.replace('```', '').trim();
      } 
      
      else if (insideCodeBlock && content.endsWith('```')) {
        insideCodeBlock = false;
        codeContent += '\n' + content.replace('```', '').trim();
  
        const pre = document.createElement('pre');
        const code = document.createElement('code');
        code.textContent = codeContent;
        code.classList.add(`language-${lang}`);
  
        pre.appendChild(code);
  
        startCodeBlockNode.innerHTML = '';
        startCodeBlockNode.appendChild(pre);
  
        p.innerHTML = '';
  
        codeContent = '';
      } 
      
      else if (insideCodeBlock) {
        codeContent += '\n' + content;
        p.innerHTML = '';
      }
    });
  
    return doc.body.innerHTML;
  };

  useEffect(() => {
    const applyHighlighting = () => {
      const codeBlocks = document.querySelectorAll('pre code');
      codeBlocks.forEach((block) => {
        hljs.highlightElement(block);
      });
    };

    applyHighlighting();
  }, [editorData]);

  const handleEditorChange = (event, editor) => {
    const rawData = editor.getData();
    const wrappedData = wrapCodeBlocks(rawData);
    setEditorData(wrappedData);
    // dispatch({type: "ckEditorData", payload: wrappedData})
  };

  return (
    <div>
      <CKEditor
        editor={ClassicEditor}
        data=""
        config={{
          toolbar: [
            'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote',
            'insertTable', 'undo', 'redo'
          ],
          table: {
            contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells'],
          },
          tabSpaces: 4,
        }}
        onChange={handleEditorChange}
      />

      <div className="output">
        <div 
        className="content"
          dangerouslySetInnerHTML={{ __html: data }}
        />
      </div>
    </div>
  );
};

export default CkEditor;
