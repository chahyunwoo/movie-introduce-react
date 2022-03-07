import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Loader from "../components/Loader";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  const { id } = useParams();

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    console.log(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>
          <Loader />
        </h1>
      ) : (
        <div>
          <img src={movie.large_cover_image} alt={movie.title} />
          <h1>{movie.title_long}</h1>
          <p>Movie Rating: {movie.rating} Runtime: {movie.runtime} min</p>
          <ul>
            {movie.genres.map((genre) => <li key={genre}>{genre}</li>)}
          </ul>
          <span>
            {movie.description_full}
          </span>
        </div>
      )}
    </div>
  );
}

export default Detail;
