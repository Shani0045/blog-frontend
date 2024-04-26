import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


const CkEditor = () => {
    const {loading, error, data} =  useSelector((state)=> state.globalData) 
    const dispatch = useDispatch();

    const handleEditorChange = (event, editor) => {
        const data = editor.getData();
        console.log(data)
        dispatch({type: "ckEditorData", payload: data})
    };

    const insertImage = async (file) => {
    // Simulate upload to the server
    const imageUrl = await uploadImageToServer(file);
    // Insert the image into the editor
    const editor = await editorInstance();
    editor.model.change(writer => {
      const imageElement = writer.createElement('image', {
        src: "assets/images/about-us.jpg"
      });
      editor.model.insertContent(imageElement);
    });
  };

  const uploadImageToServer = async (file) => {
    // Implement your image upload logic here
    // This could be a fetch or axios request to your server
    // Return the URL of the uploaded image
    return 'assets/images/about-us.jpg';
  };

  const editorInstance = async () => {
    const editor = await ClassicEditor.create(document.querySelector('#editor'),

);

    return editor;
  };

  const editorConfig = {
    // Define the allowed content rules
    // allowedContent: {
        allowedContent: true, // Allow all content
        // Define the extra allowed content rules for <pre> and <code> tags
        extraAllowedContent: 'pre code[*]{*};',
        // Allow specific HTML tags and attributes
    //     tags: ['p', 'strong', 'em', 'pre', 'code', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'div'],
    //     attributes: {
    //         '*': ['class'], // Allow class attribute on all tags
    //         'a': ['href', 'target'], // Allow href and target attributes on <a> tags
    //     },
    //     // Define the properties of specific tags
    //     properties: {
    //         'a': 'href', // Allow only href attribute on <a> tags
    //     }
    // },
    // Other configurations...
};


  return (
      <CKEditor
        editor={ClassicEditor}
        config={ editorConfig }
        data={data}
        onChange={handleEditorChange}
        onReady={(editor) => {
          editor.ui.view.editable.element.parentElement.insertBefore(
            editor.ui.view.toolbar.element,
            editor.ui.view.editable.element
          );
          editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
            return {
              upload: async () => {
                const file = await loader.file;
                const imageUrl = await uploadImageToServer(file);
                return { default: imageUrl };
              }
            };
          };
        }}
      />
  );
};

export default CkEditor;
