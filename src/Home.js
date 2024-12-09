import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./reducer/apiCalling";
import { logout } from "./reducer/loginSlicer";
import "./Home.css";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPost, setFilteredPost] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const postsPerPage = 12;

  const dispatch = useDispatch();
  const { posts, loading } = useSelector(
    (state) => state.jsonPlaceholderReducer
  );
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  useEffect(() => {
    const filtered = posts.filter((post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredPost(filtered);
  }, [posts, searchQuery]);

  useEffect(() => {
    const endOffset = itemOffset + postsPerPage;
    setCurrentItems(filteredPost.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(filteredPost.length / postsPerPage));
  }, [itemOffset, postsPerPage, filteredPost]);


  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  const handleCardClick = (post) => {
    navigate(`/post/${post.id}`, { state: { post } });
  }

  const handlePageClick = (event) => {
    const newOffset = (event.selected * postsPerPage) % filteredPost.length;
    setItemOffset(newOffset);
  };

  return (
    <div>
      <h1 style={{ color: "blanchedalmond", fontFamily: "sans-serif" }}>
        POSTS
      </h1>
      <div className="wrapper1">
        <input
          className="search-input"
          type="search"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search by title"
        />
        <button className="btnLogout" onClick={handleLogout}>
          <i className="fas fa-sign-out-alt" style={{ margin: "auto" }}></i>
          Logout
        </button>
      </div>
      <div className="container">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="postscontainer">
            {currentItems.length > 0 &&
              currentItems.map((post) => (
                <div
                  className="cardStyle"
                  key={post.id}
                  onClick={() => handleCardClick(post)}
                  style={{ curser: "pointer" }}
                >
                  <p>Title: {post.title}</p>
                 
                </div>
              ))}
          </div>
        )}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="prev-item"
        previousLinkClassName="prev-link"
        nextClassName="next-item"
        nextLinkClassName="next-link"
        activeClassName="active"
      />
      
    </div>
  );
}

export default Home;
