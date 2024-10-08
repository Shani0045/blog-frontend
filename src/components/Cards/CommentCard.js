import React, {useEffect} from "react";
import { useSelector } from "react-redux";
import { SkeltonCategory } from "../styledcomponents/Skelton";

function CommentCard() {
  let comments = useSelector(state=> state.comments)
  let {loading, error, data} = comments;

  return (
    <div className="sidebar-item comments">
      <div className="sidebar-heading">
        <h2>{data?.data?.count} Comments</h2>
      </div>
      <div className="content">
        <ul style={{display: "flex", flexDirection:"column"}}>
        {loading ? <SkeltonCategory/> :
        data.data?.comments?.length > 0 && data.data.comments.map((d) => (
          <li key={d.id}>
            <div className="right-content">
              <h4 style={{fontWeight: 500}}>
                Admin<span>May 16, 2020</span>
              </h4>
              <p>
               {d.content}
              </p>
            </div>
          </li>
          ))
         }
        </ul>
      </div>
    </div>
  );
}

export default CommentCard;
