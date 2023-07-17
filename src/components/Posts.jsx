import React, { useEffect, useState } from "react";
import Header from "./Header";
import Loader from "./Loader";
import PostCard from "./PostCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../store/actions/PostActions";

export default function Posts() {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  const { posts, loading } = useSelector((state) => state.PostReducers);

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <>
      <Header
        search={search}
        setSearch={setSearch}
        onChange={handleChangeSearch}
      />
      {loading ? (
        <Loader />
      ) : (
        <div className="container">
          <div className="posts">
            {posts.map((post) => (
              <PostCard post={post} key={post.id} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
