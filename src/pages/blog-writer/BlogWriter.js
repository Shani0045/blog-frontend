import React from 'react'
import CkEditor from '../../components/ck-editor/CKEditor'
import Layout from '../../components/layout/Layout'
import Editor from '../../components/ck-editor/Editor'
import { NavLink } from 'react-router-dom'

function BlogWriter() {

  return (
    <Layout>
    <div className='container blog-writer mt-3' style={{minHeight:"60vh"}}>
    <form action="" method="post">
        <input name="name" className='mx-lg-2' type="text" id="name" placeholder="Blog Title..." required />
        <button className='btn btn-success btn-sm mx-lg-2 text-white publish'>Save and publish</button>
        <button className='btn btn-danger btn-sm mx-lg-2 text-white publish'>Delete</button>
        <NavLink to="/preview" className='btn btn-sm mx-lg-2 text-white publish' style={{background:"#f48840"}}>Preview</NavLink>
    </form>
        <CkEditor/>
    </div>
    </Layout>
  )
}

export default BlogWriter