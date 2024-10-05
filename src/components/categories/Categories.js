import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { allBlogRequest } from "../../redux/actions/blogs/allBlogAction";
import { categoriesRequest } from "../../redux/actions/blogs/allCategoriesAction";
import { SkeltonCategory } from '../styledcomponents/Skelton';
import { Link } from "react-router-dom";
import {Chip, Box} from '@mui/material';



function Categories() {
  const dispatch  = useDispatch();
  const {loading, data, error } = useSelector( state => state.allCategories);
  let [cat, setCat] = useState(null);

  useEffect(() => {
    dispatch(categoriesRequest());
  }, [dispatch]);

  const handleBlogList = (id)=>{
    dispatch(allBlogRequest({"category_id": id}));
    setCat(id)
  }

  return (
    <div className="sidebar-item tags">
    <div className="sidebar-heading">
      <h2>Categories</h2>
    </div>
    <div className="content">
      <ul>
        {loading ? (
          <SkeltonCategory />
        ) : (
          data &&
          data.data &&
          data.data.map((c) => (
            <React.Fragment key={c.id}>
              <Chip className={c.id == cat ? 'active' : ''} 
                onClick={(e) => handleBlogList(c.id)} 
                label={c.name} 
                variant="outlined" 
                sx={{ m:0.6, textTransform:"capitalize", 
                color:" #7a7a7a"
                }} />

              {/* If you need this Link component, uncomment it and wrap it properly */}
              {/* 
                <li>
                  <Link 
                    onClick={(e) => handleBlogList(c.id)} 
                    to={`/?category=${c.name}`} 
                    className={c.id == cat ? 'active' : ''}
                  >
                    {c.name}
                  </Link>
                </li> 
              */}
            </React.Fragment>
          ))
        )}
      </ul>
    </div>
  </div>  
  )
}

export default Categories