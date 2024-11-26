import React, { useEffect, useState } from "react";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos } from "./reducer/apiCallingPost";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPhotos, setFilteredPhotos] = useState([]); 
  const dispatch = useDispatch();
  const { photos, loading } = useSelector((state) => state?.jsonPlaceHolderReducer);

 
  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);

  
  useEffect(() => {
    const filtered = photos.filter((photo) =>
      photo.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredPhotos(filtered);
  }, [photos, searchQuery]); 

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); 
  };

  return (
    <div>
      <h1 style={{ color: "yellow" }}>Photos</h1>

      
      <input
        className="form-control"
        type="search"
        value={searchQuery}
        onChange={handleSearchChange} 
        placeholder="Search by title"
        aria-label="Search"
        style={{ width: "200px", height: "30px" }}
      />

     
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="photoscontainer">
          {filteredPhotos.length > 0 ? (
            filteredPhotos.map((photo) => (
              <div className="card" key={photo.id} style={{ width: "30%" }}>
                <p>{photo.title}</p>
                <p>{photo.url}</p>
                <img src={photo.thumbnailUrl} alt={photo.title} />
              </div>
            ))
          ) : (
            <p>No photos match your search query.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
