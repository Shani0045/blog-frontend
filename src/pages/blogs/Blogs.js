import React from "react";
import Layout from "../../components/layout/Layout";
import HomeRightSideBar from "../../components/sidebar/HomeRightSideBar";
import BlogCard from "../../components/Cards/BlogCard";
import Pagination from "../../components/pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { allBlogRequest } from "../../redux/actions/blogs/allBlogAction";

function Blogs() {
  const dispatch  = useDispatch()
  const { loading, data, error } = useSelector(state => state.allBlog);

  useEffect(() => {
    dispatch(allBlogRequest({}));
  }, [dispatch]);

  return (
    <Layout>
      <section className="blog-posts grid-system mt-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="all-blog-posts">
                <div className="row">
                  <div className="col-lg-6">
                  {
                    loading ? (<h2>Loading</h2>) : 
                    (
                    data.data.blogs.map(c => (
                      <BlogCard title={c.title} metaDesc={c.meta_desc} />
                    ))
                    )
                  }
                  </div>
                  <div className="col-lg-6">
                    <BlogCard />
                  </div>
                </div>
                <div class="col-lg-12">
                   <Pagination/>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
                <HomeRightSideBar />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Blogs;
