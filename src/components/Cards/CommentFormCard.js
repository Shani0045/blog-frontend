import React from "react";

function CommentFormCard() {
  return (
    <div className="sidebar-item submit-comment">
      <div className="sidebar-heading">
        <h2>Your comment</h2>
      </div>
      <div className="content">
        <form id="comment" action="#" method="post">
          <div className="row">
            <div className="col-md-6 col-sm-12">
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
            </div>
            <div className="col-lg-12">
              <fieldset>
                <textarea
                  name="message"
                  rows={6}
                  id="message"
                  placeholder="Type your comment"
                  required
                  defaultValue={""}
                />
              </fieldset>
            </div>
            <div className="col-lg-12">
              <fieldset>
                <button type="submit" id="form-submit" className="main-button">
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
