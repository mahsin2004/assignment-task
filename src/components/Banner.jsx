import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const Banner = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);
  return (
    <div className="max-w-[1440px] mx-auto px-4">
      <Marquee speed={100}>
      {movies.map((movie) => (
            <img key={movie?.show?.id} src={movie?.show?.image?.medium || ""} alt=".."></img>
          ))}
      </Marquee>
    </div>
  );
};

export default Banner;
