import React from "react";
import { Link } from "react-router-dom";
import HomeBlogCard from "../Cards/HomeBlogCard";

function Posts() {
  return (
    <div className="all-blog-posts">
      <div className="row">
        <div className="col-lg-12">
          <HomeBlogCard />
        </div>
        <div className="col-lg-12">
          <HomeBlogCard/>
        </div>
        <div className="col-lg-12">
          <HomeBlogCard />
        </div>
        <div className="col-lg-12">
          <HomeBlogCard />
        </div>
        <div className="col-lg-12">
          <HomeBlogCard />
        </div>
        <div className="col-lg-12">
          <div className="main-button">
            <Link to="/blogs">View All Posts</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
