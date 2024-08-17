import React from "react";
import { Link } from "react-router-dom";
import HomeBlogCard from "../Cards/HomeBlogCard";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { allBlogRequest } from "../../redux/actions/blogs/allBlogAction";

function Posts() {
  const { loading, data, error } = useSelector(state => state.allBlog);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(allBlogRequest());
  }, [dispatch]);
  

  return (
    <div className="all-blog-posts">
    {
      loading ? (
        <h2>Loading</h2>
      ) : (
        data && data.data && data.data?.blogs?.length > 0 ? (
          data.data?.blogs?.map( d => (
            <div className="row" key={d.slug}>
              <div className="col-lg-12">
                <HomeBlogCard 
                  title={d.title} slug={d.slug} 
                  content={d.content} 
                  metaDesc={d.meta_desc} 
                  category={d.category}
                  created_at={d.created_at} 
                  />
              </div>
            </div>
          ))
        ) : (
          <h2>No data available</h2>
        )
      )
    }          
    </div>
  );
}

export default Posts;

