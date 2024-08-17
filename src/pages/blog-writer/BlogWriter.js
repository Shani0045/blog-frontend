import React, { useEffect, useState } from 'react'
import CkEditor from '../../components/ck-editor/CKEditor'
import Layout from '../../components/layout/Layout'
import Editor from '../../components/ck-editor/Editor'
import { NavLink } from 'react-router-dom'
import { postBlog } from '../../services/blogs/blogService'
import { useSelector } from 'react-redux'
import Swal from 'sweetalert2'


function BlogWriter() {

  const { loading, error, data } = useSelector((state) => state.globalData);
  const { loading: blogLoading, error: blogError, data:blogs } = useSelector((state) => state.allBlog);

  let [title, setTitle] = useState("")
  let [desc, setDesc] = useState("")
  let [cat_id, setCat_id] = useState("")

  const postData = async (e, content) => {
    let resp;
    try {
      e.preventDefault()
      const post = {
        category_id: cat_id,
        author_id: 1,
        title: title,
        content: content,
        meta_desc: desc 
      };
      
      resp = await postBlog(post);
      Swal.fire({
        position: "center",
        icon: "success",
        title: resp.message,
        showConfirmButton: false,
        timer: 2000
      });
      
   
    } catch (error) {
      Swal.fire({
        title: resp.status,
        text: resp.message,
        icon: "error",
        // footer: '<a href="#">Go To Page</a>'
      })
    }
  };

  return (
    <Layout>
    <div className='container blog-writer mt-3' style={{minHeight:"60vh"}}>
    <form method="post" onSubmit={(e)=>postData(e, data)}>
        <input name="title" className='mx-lg-2' type="text" value={title} onChange={ e => setTitle(e.target.value) } placeholder="Blog Title..." required />
        <button className='btn btn-success btn-sm mx-lg-2 text-white publish' type="submit">Save and publish</button>
        <button className='btn btn-danger btn-sm mx-lg-2 text-white publish'>Delete</button>
        <input name="desc" className='mx-lg-2' type="text" value={desc} onChange={ e => setDesc(e.target.value) } placeholder="Blog Desc..." required />
        {cat_id}
        <select class="form-select form-select-sm" aria-label=".form-select-sm example" onChange={ e => setCat_id(e.target.value) }>
          <option selected>Select Category</option>
          { blogLoading ? <h1>Loading</h1> :(
            blogs && blogs.data && blogs.data?.categories.map(c => (
              <option key={c.id} value={cat_id} >{c.name}</option>
            ))
            )
          }
        </select>
        <NavLink to="/preview" className='btn btn-sm mx-lg-2 text-white publish' style={{background:"#f48840"}}>Preview</NavLink>
    </form>
        <CkEditor/>
    </div>
    </Layout>
  )
}

export default BlogWriter