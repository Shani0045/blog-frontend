import React from 'react'
import RelatedPost from '../related-post/RelatedPost'
import Categories from '../categories/Categories'
import Tags from '../tags/Tags'

function HomeRightSideBar() {
  return (
    <div className="col-lg-4">
        <div className="sidebar">
        <div className="row"> 
            <div className="col-lg-12">
                <RelatedPost/>
            </div>

            <div className="col-lg-12">
                <Categories/>
            </div>

            <div className="col-lg-12">
                <Tags/>
            </div>
        </div>
        </div>
    </div>
  )
}

export default HomeRightSideBar