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
  
      // Replace all &nbsp; with regular spaces
      content = content.replace(/&nbsp;/g, ' ');
  
      // Check for code block start
      if (content.startsWith('```') && !insideCodeBlock) {
        insideCodeBlock = true;
        startCodeBlockNode = p; // Store the start <p> tag
        codeContent += content.replace('```', '').trim(); // Remove opening backticks
      } 
      // Check for code block end
      else if (insideCodeBlock && content.endsWith('```')) {
        insideCodeBlock = false;
        codeContent += '\n' + content.replace('```', '').trim(); // Append code without closing backticks
  
        // Create <pre><code> tags to wrap the collected code content
        const pre = document.createElement('pre');
        const code = document.createElement('code');
        code.textContent = codeContent; // Use collected code content
        code.classList.add(`language-${lang}`); // Apply syntax highlighting class
  
        pre.appendChild(code);
  
        // Replace the start <p> with the <pre><code> block
        startCodeBlockNode.innerHTML = ''; // Clear start <p> content
        startCodeBlockNode.appendChild(pre);
  
        // Clear all intermediate <p> tags used for code block
        p.innerHTML = ''; // Clear the last <p> content
  
        codeContent = ''; // Reset collected code
      } 
      // Collect content inside code block
      else if (insideCodeBlock) {
        codeContent += '\n' + content; // Collect multi-line content inside code block
        p.innerHTML = ''; // Clear content of <p> tag as it's part of the code block
      }
    });
  
    return doc.body.innerHTML; // Return modified HTML
  };

  // Apply highlight.js to code blocks inside tables after the editor data changes
  useEffect(() => {
    const applyHighlighting = () => {
      const codeBlocks = document.querySelectorAll('pre code');
      codeBlocks.forEach((block) => {
        hljs.highlightElement(block); // Apply highlight.js to each code block
      });
    };

    applyHighlighting(); // Apply highlighting when editorData changes
  }, [editorData]);

  const handleEditorChange = (event, editor) => {
    const rawData = editor.getData(); // Get raw editor data
    const wrappedData = wrapCodeBlocks(rawData); // Wrap code blocks in <pre><code>
    setEditorData(wrappedData); // Set the modified data
    dispatch({type: "ckEditorData", payload: wrappedData})
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
        onChange={handleEditorChange} // Handle editor changes
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
