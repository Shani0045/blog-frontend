import React from "react";
import Layout from "../../components/layout/Layout";
import BlogDetailsCard from "../../components/Cards/BlogDetailsCard";
import CommentCard from "../../components/Cards/CommentCard";
import CommentFormCard from "../../components/Cards/CommentFormCard";
import HomeRightSideBar from "../../components/sidebar/HomeRightSideBar";
import BlogPreviewCard from "../../components/Cards/BlogPreviewCard";
import { NavLink } from "react-router-dom";

function BlogPreview() {
  return (
    <Layout>
      <section className="blog-posts grid-system">
        <div className="container">
        <NavLink to="/blog-writer" className=" mt-2 btn btn-sm btn-warning text-white float-right">back</NavLink>
          <div className="row">
            <div className="col-lg-12">
              <div className="all-blog-posts">
                <div className="row">
                  <div className="col-lg-12">
                    <BlogPreviewCard/>
                    </div>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-4">
                <HomeRightSideBar/>
            </div> */}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default BlogPreview;
