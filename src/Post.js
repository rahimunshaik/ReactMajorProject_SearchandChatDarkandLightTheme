import React, { useState } from "react";

const Post = (props) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="post">
      <hr />
      <h2>{props.title}</h2>
      <div>
        <i>
          <span>{props.date}</span>
          <br />
          <span>{props.length} min read</span>
        </i>
      </div>
      <p>{props.content}</p>
      <button className={liked ? "liked-btn" : "like-btn"} onClick={toggleLike}>
        {liked ? "Liked" : "Like"}
      </button>
    </div>
  );
};

export default Post;
