import React from 'react'
import { useSelector } from 'react-redux'

function Tags() {
  const {loading, data, error } = useSelector( state => state.allBlog)

  return (
    <div className="sidebar-item tags">
        <div className="sidebar-heading">
        <h2>Tags</h2>
        </div>
        <div className="content">
        <ul>
        {
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

export default Tags