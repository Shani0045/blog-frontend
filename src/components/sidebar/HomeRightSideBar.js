import React from 'react'
import RelatedPost from '../related-posts/RelatedPosts'
import Categories from '../categories/Categories'

function HomeRightSideBar() {
  return (
        <div className="sidebar">
        <div className="row">    
            {/* <div className="col-lg-12">
                <RelatedPost/>
            </div> */}

            <div className="col-lg-12 mt-sm-1">
                <Categories/>
            </div>
            {/* <div className="col-lg-12 mt-3">
                <Categories/>
            </div> */}

        </div>
        </div>
  )
}

export default HomeRightSideBar