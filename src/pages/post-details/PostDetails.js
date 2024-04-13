import React from "react";
import Layout from "../../components/layout/Layout";
import PostDetailsCard from "../../components/Cards/PostDetailsCard";
import CommentCard from "../../components/Cards/CommentCard";
import CommentFormCard from "../../components/Cards/CommentFormCard";
import HomeRightSideBar from "../../components/sidebar/HomeRightSideBar";

function PostDetails() {
  return (
    <Layout>
      <section className="blog-posts grid-system mt-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="all-blog-posts">
                <div className="row">
                  <div className="col-lg-12">
                    <PostDetailsCard/>
                    </div>
                  <div className="col-lg-12">
                    <CommentCard/>
                  </div>
                  <div className="col-lg-12">
                    <CommentFormCard/>
                  </div>

                </div>
              </div>
            </div>
            <div className="col-lg-4">
                <HomeRightSideBar/>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default PostDetails;
