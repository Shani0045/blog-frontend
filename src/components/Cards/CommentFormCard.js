import React from "react";
import { useState, useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { postComments } from "../../services/blogs/blogService";
import { commentsRequest } from "../../redux/actions/blogs/commentsAction";



function CommentFormCard() {
  let [content, setContent] = useState("");
  let globalData = useSelector(state=> state.globalData)
  let dispatch = useDispatch();
  let blog_id = globalData?.blog_id
  let [comment, setCommentId] = useState(false)

  useEffect(() => {
    if(blog_id){
      dispatch(commentsRequest({ blog_id }));
    }
  }, [comment, blog_id]);
  
  const handleFormSubmit = async (event)=>{
    event.preventDefault();
    const post = {
      blog_id: blog_id,
      user_id: 1,
      content: content
    };
    let resp = await postComments(post);
    if (resp.status == "SUCCESS"){
      setCommentId(resp.data);
      setContent("")
    }else{

    }
  }

  return (
    <div className="sidebar-item submit-comment">
      <div className="sidebar-heading">
        <h2>Your comment</h2>
      </div>
      <div className="content">
        <form onSubmit={handleFormSubmit} id="comment" action="#" method="post">
          <div className="row">
            {/* <div className="col-md-6 col-sm-12">
              <fieldset>
                <input
                  name="name"
                  type="text"
                  id="name"
                  placeholder="Your name"
                  required
                />
              </fieldset>
            </div>
            <div className="col-md-6 col-sm-12">
              <fieldset>
                <input
                  name="email"
                  type="text"
                  id="email"
                  placeholder="Your email"
                  required
                />
              </fieldset>
            </div>
            <div className="col-md-12 col-sm-12">
              <fieldset>
                <input
                  name="subject"
                  type="text"
                  id="subject"
                  placeholder="Subject"
                />
              </fieldset>
            </div> */}
            <div className="col-lg-12">
              <fieldset>
                <textarea
                  name="message"
                  rows={6}
                  value={content}
                  id="message"
                  onChange={(e)=> setContent(e.target.value)}
                  placeholder="Type your comment"
                  required
                />
              </fieldset>
            </div>
            <div className="col-lg-12">
              <fieldset>
                <button type="submit" id="form-submit" className="btn btn-sm p-2 main-button">
                  Submit
                </button>
              </fieldset>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CommentFormCard;
