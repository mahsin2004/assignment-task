import { useEffect } from "react";

import AllMovies from "../movies/AllMovies";
import Banner from "../components/Banner";


const Home = () => {
  useEffect(() => {
    document.title = "Home | BDmovies";
  }, []);
  return (
    <div className="bg-white dark:bg-black">
      <Banner></Banner>
      <AllMovies></AllMovies>
    </div>
  );
};

export default Home;
