import React, { useState, useEffect } from "react";
import axios from "../axios";
import "../css/Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, url, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [path, setPath] = useState("");

  useEffect(() => {
    console.log(url)
    async function fetchMovies() {
      const response = await axios.get(url);
      setMovies(response.data.results);
    }
    fetchMovies();
  }, [url]);

  function _onClick(movie) {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.title || movie?.original_name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((err) => console.error(err));
    }
  }

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row-posters">
        {movies.map((movie) => {
          if (movie.backdrop_path === null) {
            setPath(
              "https://kestrelwines.com/wp-content/uploads/2019/09/1.jpg"
            );
          } else {
            setPath(
              `${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`
            );
          }
          return (
            <img
              src={path}
              alt={movie.name}
              key={movie.id}
              className={`row-poster ${isLargeRow && "row-poster-lg"}`}
              onClick={_onClick(movie)}
            />
          );
        })}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
