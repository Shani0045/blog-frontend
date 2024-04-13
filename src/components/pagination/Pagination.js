import React from 'react'

function Pagination() {
  return (
    <ul className="page-numbers">
        <li><a href="#">1</a></li>
        <li className="active"><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a href="#"><i className="fa fa-angle-double-right" /></a></li>
    </ul>
  )
}

export default Pagination