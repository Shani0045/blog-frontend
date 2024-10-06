import React, { useEffect } from 'react'
import Posts from '../posts/Posts'
import BlogPagination from '../styledcomponents/Pagination'
import { useSelector, useDispatch } from "react-redux";
import { allBlogRequest } from "../../redux/actions/blogs/allBlogAction";

function HomeLeftSidebar() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allBlogRequest({"page": 1}));
  }, [dispatch]);
  
  const { loading, data, error } = useSelector(state => state.allBlog);

  return (
       <>
         <Posts/>
          {data?.data?.total_page > 0 &&
            <BlogPagination count={data.data.total_page}/>
          }
       </>
  )
}

export default HomeLeftSidebar
