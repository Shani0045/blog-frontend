import React from 'react'
import CkEditor from '../../components/ck-editor/CKEditor'
import Layout from '../../components/layout/Layout'
import Editor from '../../components/ck-editor/Editor'

function BlogWriter() {
  return (
    <Layout>
    <div className='container col-lg-10 mt-3 w-100 border' style={{height: "60vh"}}>
        <Editor/>
    </div>
    </Layout>
  )
}

export default BlogWriter