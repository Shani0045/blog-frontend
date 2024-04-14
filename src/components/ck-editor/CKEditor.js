import React, { useState, useEffect } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const CkEditor = () => {
    const [editor, setEditor] = useState(null);
    const [data, setData] = useState("")

    useEffect(() => {
        if (editor) {
            console.log('Editor is ready to use!', editor);
        }
    }, [editor]);

    const handleChange = (event, editor) => {
        const data = editor.getData();
        setData(data);
        console.log(data);

    };

    const handleBlur = (event, editor) => {
        // console.log('Blur.', editor);
    };

    const handleFocus = (event, editor) => {
        // console.log('Focus.', editor);
    };

    return (
            <CKEditor
                editor={ClassicEditor}
                data={data}
                onReady={setEditor}
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={handleFocus}
            />
    );
};

export default CkEditor;
