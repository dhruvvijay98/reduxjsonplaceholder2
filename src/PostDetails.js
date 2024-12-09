import React from "react";
import "./PostDetails.css"
import { useLocation, useNavigate } from "react-router-dom";

function PostDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { post } = location.state || {}; 

  if (!post) {
    return <p>No post data found. Please go back and select a post.</p>;
  }
   

    return (
        <>
        <div className="wrapper2">
        <div className="postdetails">
            <p><h5>Title</h5> {post.title}</p>
            <p><h5>Body</h5> {post.body}</p>
        </div>
        </div>
        <div className="wrapper3">
        <button className="btnback" onClick={() => navigate("/home")}>Back</button>
        </div>
        </>
    );
}
export default PostDetails;