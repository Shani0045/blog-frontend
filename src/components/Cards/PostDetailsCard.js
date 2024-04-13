import React from "react";
import CodeBlockCard from "./CodeBlockCard";

function PostDetailsCard() {
  return (
    <div className="blog-post">
      <div className="down-content p-lg-5">
        <span>Devops</span>
          <h4>How To Deploy Flask Application Using Docker On Kubernetes</h4>
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

        <div className="blog-thumb mt-2">
            <img src="assets/images/blog-post-02.jpg" alt />
        </div>

        <p>
            Step1. Create simple flask app

            Flask is a python lightweight framwork for web application with minimal no of code you can develope your application in no time.

            Create requirements.txt file that contains all library and package for your application and app.py file for your application.
          <br />
          <CodeBlockCard codeString={"console.log('hello World!')"} language={"python"}/>
          
          <br />
          Donec tincidunt leo nec magna gravida varius. Suspendisse felis orci,
          egestas ac sodales quis, venenatis et neque. Vivamus facilisis
          dignissim arcu et blandit. Maecenas finibus dui non pulvinar lacinia.
          Ut lacinia finibus lorem vel porttitor. Suspendisse et metus nec
          libero ultrices varius eget in risus. Cras id nibh at erat pulvinar
          malesuada et non ipsum. Suspendisse id ipsum leo.
        </p>

        <div className="col-lg-12 p-0">
          <CodeBlockCard codeString={"console.log('hello World!')"} language={"python"}/>
        </div>

        <p>
          You can browse different tags such as , etc. to see more CSS
          templates. Sed hendrerit rutrum arcu, non malesuada nisi. Sed id
          facilisis turpis. Donec justo elit, dapibus vel ultricies in, molestie
          sit amet risus. In nunc augue, rhoncus sed libero et, tincidunt tempor
          nisl. Donec egestas, quam eu rutrum ultrices, sapien ante posuere
          nisl, ac eleifend eros orci vel ante. Pellentesque vitae eleifend
          velit. Etiam blandit felis sollicitudin vestibulum feugiat.
          <br />
          <br />
          Donec tincidunt leo nec magna gravida varius. Suspendisse felis orci,
          egestas ac sodales quis, venenatis et neque. Vivamus facilisis
          dignissim arcu et blandit. Maecenas finibus dui non pulvinar lacinia.
          Ut lacinia finibus lorem vel porttitor. Suspendisse et metus nec
          libero ultrices varius eget in risus. Cras id nibh at erat pulvinar
          malesuada et non ipsum. Suspendisse id ipsum leo.
        </p>

        <div className="post-options">
          <div className="row">
            <div className="col-6">
              <ul className="post-tags">
                <li>
                  <i className="fa fa-tags" />
                </li>
                <li>
                  <a href="#">Best Templates</a>,
                </li>
                <li>
                  <a href="#">TemplateMo</a>
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
  );
}

export default PostDetailsCard;
