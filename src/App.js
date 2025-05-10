

import React, { useState, useEffect } from "react";

import "./App.css";
import Main from "./Main";

const API_URL = "https://www.omdbapi.com/?i=tt3896198&apikey=372dedff";

const App = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("Joker");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    // console.log(data.Search);
    setMovies(data.Search);
  };
  return (
    <div className="app">
      <div className="header">
        <h1>Joker</h1>
      <div className="search">
        <input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value) 
            searchMovies(search)
          }
          }
          placeholder="Search...."
        />

      </div>
      </div>


      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <Main movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <p className="notfound">Movie Not Found</p>
        </div>
      )}
    </div>
  );
};

export default App;