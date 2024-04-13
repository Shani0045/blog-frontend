import React from "react";
import { Link } from "react-router-dom";

function BlogCard() {
  return (
    <div className="blog-post">
      <div className="blog-thumb">
        <img src="assets/images/blog-thumb-01.jpg" alt />
      </div>
      <div className="down-content">
        <span>Lifestyle</span>
        <Link to="/post-details">
          <h4>Donec tincidunt leo</h4>
        </Link>
        <ul className="post-info">
          <li>
            <a href="#">Admin</a>
          </li>
          <li>
            <a href="#">May 31, 2020</a>
          </li>
          <li>
            <a href="#">12 Comments</a>
          </li>
        </ul>
        <p>
          Nullam nibh mi, tincidunt sed sapien ut, rutrum hendrerit velit.
          Integer auctor a mauris sit amet eleifend.
        </p>
        <div className="post-options">
          <div className="row">
            <div className="col-lg-12">
              <ul className="post-tags">
                <li>
                  <i className="fa fa-tags" />
                </li>
                <li>
                  <Link to="#">Best Templates</Link>,
                </li>
                <li>
                  <Link to="#">TemplateMo</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
