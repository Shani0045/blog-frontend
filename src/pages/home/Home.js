import React from 'react'
import Layout from '../../components/layout/Layout'
import Banner from '../../components/banner/Banner'
import Posts from '../../components/posts/Posts'
import HomeLeftSidebar from '../../components/sidebar/HomeLeftSidebar'
import HomeRightSideBar from '../../components/sidebar/HomeRightSideBar'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { allBlogRequest } from '../../redux/actions/blogs/allBlogAction'

function Home() {
  return (
    <Layout>
      <section className="blog-posts mt-3">
      <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <HomeLeftSidebar/>
            </div>
            <div className="col-lg-4">
            <HomeRightSideBar/>
            </div>
          </div>
      </div>
      </section>
    </Layout>
  )
}

export default Home
