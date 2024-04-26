import { Link } from "react-router-dom";

function BlogCard(props) {
  return (
    <div className="blog-post">
      <div className="blog-thumb">
        <img src="assets/images/docker.png" alt />
      </div>
      <div className="down-content">
        <span>devops</span>
        <Link to={props.slug}>
          <h4>{props.title}</h4>
        </Link>
        <ul className="post-info">
          <li>
            <Link to="#">Admin</Link>
          </li>
          <li>
            <Link to="#">May 31, 2020</Link>
          </li>
          <li>
            <Link to="#">12 Comments</Link>
          </li>
        </ul>
        <p>
          Stand Blog is a free HTML CSS template for your CMS theme. You can
          easily adapt or customize it for any kind of CMS or website builder.
          You are allowed to use it for your business. You are NOT allowed to
          re-distribute the template ZIP file on any template collection site
          for the download purpose.
          <Link
            rel="nofollow"
            to=""
            target="_parent"
          >
            Contact TemplateMo
          </Link>
          for more info. Thank you.
        </p>
        <div className="post-options">
          <div className="row">
            <div className="col-6">
              <ul className="post-tags">
                <li>
                  <i className="fa fa-tags" />
                </li>
                <li>
                  <Link to="#">Beauty</Link>,
                </li>
                <li>
                  <Link to="#">Nature</Link>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul className="post-share">
                <li>
                  <i className="fa fa-share-alt" />
                </li>
                <li>
                  <Link to="#">Facebook</Link>,
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
