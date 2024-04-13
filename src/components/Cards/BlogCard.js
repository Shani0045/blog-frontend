import React from "react";

function BlogCard() {
  return (
    <div className="blog-post">
      <div className="blog-thumb">
        <img src="assets/images/blog-thumb-01.jpg" alt />
      </div>
      <div className="down-content">
        <span>Lifestyle</span>
        <a href="/post-details">
          <h4>Donec tincidunt leo</h4>
        </a>
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
                  <a href="#">Best Templates</a>,
                </li>
                <li>
                  <a href="#">TemplateMo</a>
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
