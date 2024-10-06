import React, { useEffect, useState } from 'react'
import CkEditor from '../../components/ck-editor/CKEditor'
import Layout from '../../components/layout/Layout'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { postBlog } from '../../services/blogs/blogService'
import Swal from 'sweetalert2'
import { allCategories } from '../../services/blogs/blogService';


function BlogWriter() {
  const { loading, error, data } = useSelector((state) => state.globalData);
  let [catData, setCatData] = useState([])
  let [title, setTitle] = useState("")
  let [desc, setDesc] = useState("")
  let [cat_id, setCat_id] = useState()
  let [lang, setLang] = useState()
  let [blogLoading, setBlogLoading] = useState(true);

  useEffect(() => {
    const fetchData = async ()=>{
      let data = await allCategories()
      if (data.status == "SUCCESS"){
        setCatData(data.data)
      }
      setBlogLoading(false);
    }
  fetchData();
    
  }, []);

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
      
      let resp = await postBlog(post);
      let icon="";
      if (resp.status == "SUCCESS"){
        icon = "success";
      }else{
        icon="error";
      }
      
      Swal.fire({
        position: "center",
        icon: icon,
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
        <select required className="col-5  form-select" aria-label="Default select example" onChange={ e => setCat_id(e.target.value) }>
          <option selected>Select Category</option>
          { blogLoading ? <h1>Loading</h1> :(
            catData.length && catData.map(c => (
              <option key={c.id} value={c.id} >{c.name}</option>
            ))
            )
          }
        </select>
        <select required className="mx-2 col-5 form-select" aria-label="Default select example" onChange={ e => setLang(e.target.value) }>
          <option selected>Select language</option>
            <option key="0" value="plaintext" >plain Text</option>
            <option key="1" value="python" >Python</option>
            <option key="2" value="javascript">JavaScript</option>
            <option key="3" value="java" >Java</option>
            <option key="4" value="html">Html</option>
            <option key="7" value="bash">Bash</option>
        </select>
        <NavLink to="/preview" className='btn btn-sm mx-lg-2my-2 text-white publish' style={{background:"#f48840"}}>Preview</NavLink>
    </form>
        <div class="my-3">
        <CkEditor lang={lang} />
        </div>
    </div>
    </Layout>
  )
}

export default BlogWriter