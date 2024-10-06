import React, {useEffect, useState} from 'react'
import { useDispatch } from "react-redux";
import { allBlogRequest } from "../../redux/actions/blogs/allBlogAction";
import { SkeltonCategory } from '../styledcomponents/Skelton';
import { Chip } from '@mui/material';
import { allCategories } from '../../services/blogs/blogService';
import { Link } from 'react-router-dom';


function Categories() {
  const dispatch  = useDispatch();
  let [cat, setCat] = useState(null);
  let [data, setData] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async ()=>{
      let data = await allCategories()
      if (data.status == "SUCCESS"){
        setData(data.data)
      }
      setLoading(false);
    }
  fetchData();
    
  }, []);

  const handleBlogList = (id)=>{
    dispatch(allBlogRequest({"category_id": id}));
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
          data?.length &&
          data.map((c) => (
            <React.Fragment key={c.id}>
              <Link 
                onClick={(e) => handleBlogList(c.id)} 
                to={`/?category=${c.name}`} 
              >
              <Chip className={c.id == cat ? 'active' : ''}
                label={c.name} 
                variant="outlined" 
                sx={{ m:0.6, textTransform:"capitalize",
                color:" #7a7a7a"
              }} />
              </Link>
            </React.Fragment>
          ))
        )}
      </ul>
    </div>
  </div>  
  )
}

export default Categories