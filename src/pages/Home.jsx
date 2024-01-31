import { useEffect } from "react";
import Category from "../components/Category";


const Home = () => {
  useEffect(() => {
    document.title = "Home | BDmovies";
  }, []);
  return (
    <div className="bg-white dark:bg-black">
      <Category></Category>
    </div>
  );
};

export default Home;
