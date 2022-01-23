import { useParams } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";

function Detail() {
  // 라우터에서 id값 받아옴
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setMovie(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      <h1>Detail</h1>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <div>
          <h2>{movie.title}</h2>
          <h3>
            Release: {movie.year} / Rating: {movie.rating}
          </h3>
          <h4>
            {movie.genres.map((genre, idx) => (
              <li key={idx}>{genre}</li>
            ))}
          </h4>
          <img src={movie.background_image} alt="" />
        </div>
      )}
    </div>
  );
}
export default Detail;
