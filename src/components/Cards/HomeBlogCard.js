import { Link } from "react-router-dom";
import { useRef } from "react";

function BlogCard(props) {
  return (
    <div className="blog-post">
      {/* <div className="blog-thumb">
        <img src="assets/images/docker.png" alt />
      </div> */}
      <div className="down-content">
        <span>{props.category}</span>
        <Link to={props.slug}>
          <h4>{props.title}</h4>
        </Link>
        <ul className="post-info">
          <li>
            <Link to="#">Admin</Link>
          </li>
          <li>
            <Link to="#">{props.created_at}</Link>
          </li>
          <li>
            <Link to="#">6 Min Read</Link>
          </li>
        </ul>
        <p className="my-2">
        {props.metaDesc} <Link to={props.slug}>read more</Link>
        </p>
        <div className="post-options">
          <div className="row">
            <div className="col-6">
              <ul className="post-tags">
                <li>
                  <i className="fa fa-tags" />
                </li>
                <li>
                  <Link to="#">{props.category}</Link>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul className="post-share">
                <li>
                  <i className="fa fa-share-alt" />
                </li>
                <li>
                  <Link to="#">Facebook, </Link>
                </li>
                <li>
                  <Link to="#"> Twitter</Link>
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
