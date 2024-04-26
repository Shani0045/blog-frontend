import React from "react";
import CodeBlockCard from "./CodeBlockCard";
import { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import hljs from 'highlight.js';
import 'highlight.js/styles/default.css';
import { blogDetailsRequest } from "../../redux/actions/blogs/blogDetailsAction";


function PostDetailsCard(props) {
  const contentRef = useRef(null)
  const dispatch = useDispatch()
  const {loading, data, error} = useSelector((state)=> state.blogDetails)
  
  useEffect(() => {
    dispatch(blogDetailsRequest(props.slug));
  }, [dispatch]);


  useEffect(() => {
    if (!loading && data?.data?.length) {
      const dataObj = data.data[0];
      const content = dataObj.content;
      contentRef.current.innerHTML = content;
      hljs.highlightAll();
    }
  }, [loading, data]);


  return (
    <div className="blog-post">
      <div className="down-content p-lg-5">
        <span>Devops</span>
        <ul className="post-info">
          <li>
            <a href="#">Admin</a>
          </li>
          <li>
            <a href="#">May 12, 2020</a>
          </li>
          <li>
            <a href="#">10 Comments</a>
          </li>
        </ul>

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

export default PostDetailsCard;
