import { useEffect, useState } from "react";
import MoviesCart from "./MoviesCart";

const AllMovies = () => {
  const [movies, setMovies] = useState([]);
  const [filterMovies, setFilterMovies] = useState([]);
  const [noDataFound, setNoDataFound] = useState(false);
  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  const takeValue = (e) => {
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    from.reset();
    const filterMovie = movies?.filter((movie) =>
      movie.show.name.toLowerCase().includes(name.toLowerCase())
    );

    if (filterMovie.length === 0) {
      setNoDataFound(true);
    } else {
      setNoDataFound(false);
    }

    setFilterMovies(filterMovie);
  };

  return (
    <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-8 md:pb-10 lg:pb-14">
      <div className="mb-8">
        <h1 className="text-5xl font-bold text-center text-gray-800">Search Movies</h1>
        <div className="mt-5 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
          <div className="w-full sm:w-auto mx-auto">
            <form onSubmit={takeValue} className="grid grid-cols-10 gap-2">
              <label className="sr-only ">Search</label>
              <input
                type="text"
                id="hero-input"
                name="name"
                required
                className="px-4 col-span-7 py-5 border block w-full lg:min-w-[26rem] border-gray-200 shadow-sm rounded-md dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                placeholder="Search by movie name..."
              />
              <button
                className="w-full h-full col-span-3 px-4 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium "
                href="#"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Course Listing Page */}

      <div className="pb-4 md:pb-8 lg:pt-2">
        <p className="text-xl md:text-4xl lg:text-5xl font-bold">All Movies</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {filterMovies.length > 0 ? (
          filterMovies.map((movie) => (
            <MoviesCart key={movie.show.id} movie={movie}></MoviesCart>
          ))
        ) : noDataFound ? (
          <div className="text-center py-10">
            <p className="text-4xl text-red-400">No Movies Found</p>
          </div>
        ) : (
          movies.map((movie) => (
            <MoviesCart key={movie.show.id} movie={movie}></MoviesCart>
          ))
        )}
      </div>
    </div>
  );
};

export default AllMovies;
