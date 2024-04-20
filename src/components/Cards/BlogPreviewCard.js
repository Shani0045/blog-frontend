import React from "react";
import CodeBlockCard from "./CodeBlockCard";
import { useRef, useEffect } from "react";
import { BLOG_DETAILS_REQUEST } from "../../redux/actionTypes/blogDetailsType";
import { useDispatch, useSelector } from "react-redux";
import hljs from 'highlight.js';
import 'highlight.js/styles/default.css';


function BlogPreviewCard() {
  let {loading, error, data} =  useSelector((state)=> state.globalData) 
  const contentRef = useRef(null);

  const dispatch = useDispatch()


  useEffect(() => {

    // dispatch({"type":POST_REQUEST, payload:{}})

    if (contentRef.current) {
        contentRef.current.innerHTML = data;
        const preTag = document.createElement('pre');
        // preTag.textContent = dynamicContent;
        document.querySelectorAll("td").forEach((el) => {
        // el.setAttribute("class", "language-python")
        // hljs.highlightElement(el);

      });
    }
  });


  return (
    <div className="blog-post">
      <div className="down-content p-lg-5">
        <span>Devops</span>
        <ul className="post-info">
          <li>
            <a href="#">Admin</a>
          </li>
          <li>
            <a href="#">May 12, 2024</a>
          </li>
          <li>
            <a href="#">10 Comments</a>
          </li>
        </ul>

      {/* <CodeBlockCard  language={"python"} /> */}
      <div className="post-content mt-3" ref={contentRef}>
      </div>
      
        <div className="post-options">
          <div className="row">
            <div className="col-6">
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
            <div className="col-6">
              <ul className="post-share">
                <li>
                  <i className="fa fa-share-alt" />
                </li>
                <li>
                  <a href="#">Facebook</a>,
                </li>
                <li>
                  <a href="#"> Twitter</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPreviewCard;
