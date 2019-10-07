import React from "react";

const Post = ({ posts, loading }) => {
  if (loading) {
    return <h2>loading.....</h2>;
  }

  return (
    <div>
      {posts.map(post => (
        <h4 key={post.id}>{post.title}</h4>
      ))}
    </div>
  );
};
export default Post;
