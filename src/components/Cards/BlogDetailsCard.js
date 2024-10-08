import React from "react";
import { useRef, useEffect, useState } from "react";
import hljs from 'highlight.js';
import 'highlight.js/styles/stackoverflow-dark.css';
import PageProgressBar from "../styledcomponents/PageProgressBar";
import { SkeltonBlogDetails } from "../styledcomponents/Skelton";
import { blogDetails } from "../../services/blogs/blogService";
import { useDispatch } from "react-redux";

function PostDetailsCard(props) {
  const contentRef = useRef(null);
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch(); 

  useEffect(() => {
    const fetchData = async ()=>{
        let data = await blogDetails(props.slug)
        if (data.status == "SUCCESS"){
            setdata(data.data)
            if (data?.data[0]?.id){
              dispatch({"type": "blog_details", payload: {"blog_id": data?.data[0]?.id}})
            }
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        setLoading(false);
      }
    fetchData();

  return ()=>{
    dispatch({"type": "blog_details", payload: {"blog_id": null}});
  }
  }, [props.slug]);

  
  useEffect(() => {
    if (!loading && data?.length) {
      const dataObj = data[0];
      const content = dataObj.content;
      contentRef.current.innerHTML = content;
      const codeBlocks = document.querySelectorAll('pre code');
      codeBlocks.forEach((block) => {
        hljs.highlightElement(block);
      });
    }
  }, [loading, data]);

  return (
    loading ? 
    <>
      <PageProgressBar/>
      <SkeltonBlogDetails/>
    </> :
    (
    <div className="blog-post">
      <div className="down-content p-lg-5">
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
                  <a href="#">Category</a>,
                </li>
                <li>
                  <a href="#">Category</a>
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
  ));
}

export default PostDetailsCard;
