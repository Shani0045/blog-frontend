import React from "react";
import HomeBlogCard from "../Cards/HomeBlogCard";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PageProgressBar from "../styledcomponents/PageProgressBar";
import {SkeltonPost} from "../styledcomponents/Skelton";
import NotFoundData from "../styledcomponents/PageNotFound";

function Posts() {
  const { loading, data, error } = useSelector(state => state.allBlog);

  return (
    <div className="all-blog-posts">
   {
    loading ? (
    <>
      <PageProgressBar />
      <SkeltonPost />
    </>
      ) : (
        data && data.data && data.data.blogs?.length > 0 ? (
            data.data.blogs.map(d => (
              <div className="row" key={d.slug}>
                <div className="col-lg-12">
                  <HomeBlogCard 
                    title={d.title} 
                    slug={d.slug} 
                    content={d.content} 
                    metaDesc={d.meta_desc} 
                    category={d.category}
                    created_at={d.created_at} 
                  />
                </div>
              </div>
            ))
        ) : (
          <NotFoundData />
        )
      )
    }
    </div>
  );
}

export default Posts;

