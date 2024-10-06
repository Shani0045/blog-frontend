import React from 'react'
import { useSelector } from 'react-redux'

function Categories() {
  const {loading, data, error } = useSelector( state => state.allBlog)
  return (
    <div className="sidebar-item categories">
      <div className="sidebar-heading">
      <h2>Categories</h2>
      </div>
      <div className="content">
      <ul>{
            data && data.data && data.data.categories && 
            data.data.categories.map( c => (
              <li><a href="#">{c.name}</a></li>
            ))
          }
      </ul>
      </div>
    </div>
  )
}

export default Categories