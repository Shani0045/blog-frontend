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

  return (
      <CKEditor
        editor={ClassicEditor}
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
