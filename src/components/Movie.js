import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ id, year, rating, title, summary, poster, genres }) {
  return (
    <Link
      to="/movie_details"
      state={{ year, rating, title, summary, poster, genres }}
    >
      <div className="movie">
        <img src={poster} alt={title} title={title} />
        <div className="movie_column">
          <h3 className="movie_title">{title}</h3>
          <h4 className="movie_rating">{rating}</h4>
          <h5 className="movie_year">{year}</h5>
          <ul className="movie_genres">
            {genres.map((genre, index) => {
              return (
                <li key={index} className="genres_genre">
                  {genre}
                </li>
              );
            })}
          </ul>
          <p className="movie_summary">{summary.slice(0, 140)}...</p>
        </div>
      </div>
    </Link>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
