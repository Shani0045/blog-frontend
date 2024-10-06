import React from "react";

function CommentCard() {
  return (
    <div className="sidebar-item comments">
      <div className="sidebar-heading">
        <h2>0 comments</h2>
      </div>
      <div className="content">
        <ul style={{display: "flex", flexDirection:"column"}}>
          {/* <li>
            <div className="right-content">
              <h4 style={{fontWeight: 500}}>
                Charles Kate<span>May 16, 2020</span>
              </h4>
              <p>
               Great Job Keep it!
              </p>
            </div>
          </li> */}
          {/* <li>
            <div className="right-content">
              <h4 style={{fontWeight: 500}}>
                Thirteen Man<span>May 22, 2020</span>
              </h4>
              <p>
               Nice information 
              </p>
            </div>
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default CommentCard;
