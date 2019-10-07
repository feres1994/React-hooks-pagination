import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Post from "./posts";
import Pagination from "./pagination";
import axios from "axios";

import "./styles.css";

const App = () => {
  const [posts, setPost] = useState([]);
  const [loading, setLoading] = useState([false]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostsPerPage] = useState(20);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPost(res.data);
      setLoading(false);
    };
    fetchPost();
  }, []);

  //getCurrrentPosts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  //chnagePagination
  const paginate = number => setCurrentPage(number);
  return (
    <div>
      <Post loading={loading} posts={currentPosts} />
      <Pagination
        PostsPerPage={postPerPage}
        paginate={paginate}
        totalPosts={posts.length}
      />
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
