import React, {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { allBlogRequest } from "../../redux/actions/blogs/allBlogAction";
import { SkeltonCategory } from '../styledcomponents/Skelton';


function Categories() {
  const dispatch  = useDispatch()
  const {loading, data, error } = useSelector( state => state.allBlog)

  return (
    <div className="sidebar-item tags">
        <div className="sidebar-heading">
        <h2>Categories</h2>
        </div>
        <div className="content">
        <ul>
        {loading ? <SkeltonCategory/> :(
          data && data.data && data.data.categories && 
          data.data.categories.map( (c) => (
            <li onClick={e => dispatch(allBlogRequest({"category_id": c.id}))} key={c.id}><a href="#">{c.name}</a></li>
          ))
          )
        }
        </ul>
        </div>
    </div>
  )
}

export default Categories