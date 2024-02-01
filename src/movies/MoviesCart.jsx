import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MoviesCart = ({ movie }) => {
  return (
    <>
      <div className="border-2 bg-white rounded-lg drop-shadow-xl">
        <div className="">
          <img
            className="w-full h-[330px] rounded-t-lg"
            src={movie?.show?.image?.medium || ""}
            alt="Thumbnail"
          />
        </div>
        <div className="p-4">
          <h1 className="text-2xl  font-bold text-gray-900">
            {movie?.show?.name}
          </h1>
          <h1 className="text-lg font-medium text-gray-700">
            Date: {movie?.show?.premiered}
            
          </h1>
          <h1 className="text-md lg:text-lg font-medium text-gray-700">
            Category: {movie?.show?.genres[0]}, {movie?.show?.genres[1]}
          </h1>
          <h1 className="text-md lg:text-lg font-medium text-gray-700">
            Language: {movie?.show?.language}
          </h1>
          
          <div className="flex justify-center items-center mt-4">
            <div>
              <Link
                to={`/details/${movie.show.id}`}
                className="flex justify-center items-center py-2 px-4 text-base lg:text-lg font-medium bg-gray-700  text-white rounded-lg hover:bg-green-500 transition-colors cursor-pointer"
              >
                <button>View Details</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

MoviesCart.propTypes = {
  movie: PropTypes.object,
};

export default MoviesCart;
