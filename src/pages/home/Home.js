import React from 'react'
import Layout from '../../components/layout/Layout'
import HomeLeftSidebar from '../../components/sidebar/HomeLeftSidebar'
import HomeRightSideBar from '../../components/sidebar/HomeRightSideBar'

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
