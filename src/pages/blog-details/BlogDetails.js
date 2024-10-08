import React from "react";
import Layout from "../../components/layout/Layout";
import BlogDetailsCard from "../../components/Cards/BlogDetailsCard";
import CommentCard from "../../components/Cards/CommentCard";
import CommentFormCard from "../../components/Cards/CommentFormCard";
import HomeRightSideBar from "../../components/sidebar/HomeRightSideBar";
import { useParams } from "react-router-dom";

function BlogDetails() {
  const {slug} = useParams()
  return (
    <Layout>
      <section className="blog-posts grid-system">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="all-blog-posts">
                <div className="row">
                  <div className="col-lg-12">
                    <BlogDetailsCard slug= {slug} />
                    </div>
                  <div className="col-lg-7">
                    <CommentCard/>
                  </div>
                  <div className="col-lg-5">
                    <CommentFormCard/>
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

export default BlogDetails;
