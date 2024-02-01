import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Details = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    document.title = "Movie Details | BDmovies";
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  const movie = movies?.find((movie) => movie?.show?.id === parseInt(id));
  console.log(movie);

  const summary = movie?.show?.summary;
  console.log(summary);

  const submit = (e) => {
    e.preventDefault();
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Booking Successful",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-10 pt-6 pb-14">
      <div className=" bg-white border shadow-sm grid lg:grid-cols-2 justify-center items-center">
        <div className="">
          <img
            className="w-full h-[380px] rounded-lg"
            src={movie?.show?.image?.medium || ""}
            alt="Thumbnail"
          />
        </div>
        <div className="p-4 space-y-2">
          <p className="text-4xl  font-bold text-gray-700">
            {movie?.show?.name}
          </p>
          <p className="text-2xl font-bold text-gray-700">Summary: </p>
          {summary && (
            <span
              className="text-2xl"
              dangerouslySetInnerHTML={{ __html: summary }}
            />
          )}
          {/* The button to open modal */}
          <label
            htmlFor="my_modal_7"
            className="text-lg flex justify-center items-center py-2 px-4 font-medium bg-gray-700  text-white rounded-lg hover:bg-green-500 transition-colors cursor-pointe"
          >
            Book A Ticket
          </label>

          {/* Put this part before </body> tag */}
          <input type="checkbox" id="my_modal_7" className="modal-toggle" />
          <div className="modal" role="dialog">
            <div className="modal-box">
              <div className="text-center">
                <h1 className="text-3xl  font-bold text-gray-900">
                  Name: {movie?.show?.name}
                </h1>
                <h1 className="text-xl font-medium text-gray-700">
                  Release Date: {movie?.show?.premiered}
                </h1>
                <h1 className="text-xl font-medium text-gray-700">
                  Category: {movie?.show?.genres[0]}, {movie?.show?.genres[1]}
                </h1>
                <h1 className=" text-xl font-medium text-gray-700">
                  Language: {movie?.show?.language}
                </h1>
              </div>

              <div className="modal-action">
                <label htmlFor="my_modal_7" onClick={submit}   className="text-lg flex justify-center items-center py-2 px-4 font-medium bg-green-500  text-white rounded-lg hover:bg-gray-700 transition-colors cursor-pointe">
                  Confirm
                </label>
                <label
                  htmlFor="my_modal_7"
                  className="text-lg flex justify-center items-center py-2 px-4 font-medium bg-gray-700  text-white rounded-lg hover:bg-green-500 transition-colors cursor-pointe"
                >
                  Cancel
                </label>
              </div>
            </div>
            <label className="modal-backdrop" htmlFor="my_modal_7">
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
