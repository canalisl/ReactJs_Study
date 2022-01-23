import propTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ coverImg, title, genres, summary, id }) {
  return (
    <div>
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <img src={coverImg} alt="" />
      <ul>
        {genres.map((genre, idx) => (
          <li key={idx}>{genre}</li>
        ))}
      </ul>
      <p>{summary}</p>
      <hr />
    </div>
  );
}

Movie.propTypes = {
  id: propTypes.number.isRequired,
  coverImg: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  genres: propTypes.arrayOf(propTypes.string).isRequired,
};

export default Movie;
