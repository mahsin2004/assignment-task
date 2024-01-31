import { useEffect, useState } from "react";
import CourseCart from "./MoviesCart";

const AllCourses = () => {
  const [courses, setCourses] = useState([]);
  const [filterCourse, setFilterCourse] = useState([]);
  const [noDataFound, setNoDataFound] = useState(false);
  useEffect(() => {
    document.title = "All Courses | Paid Courses";
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  const takeValue = (e) => {
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    from.reset();
    const filterCourse = courses?.filter((course) =>
      course.name.toLowerCase().includes(name.toLowerCase()) || course.instructor.toLowerCase().includes(name.toLowerCase())
    );

    if (filterCourse.length === 0) {
      setNoDataFound(true);
    } else {
      setNoDataFound(false);
    }

    setFilterCourse(filterCourse);
  };

  return (
    <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-8 md:py-10 lg:py-14">
      <div className="mb-6 lg:mb-14">
        <h1 className="text-lg md:text-2xl lg:text-3xl font-medium text-center">
          Please enter either the course title <br /> or the name of the
          instructor to start your search.
        </h1>
        <div className="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
          <div className="w-full sm:w-auto mx-auto">
            <form onSubmit={takeValue} className="grid grid-cols-10 gap-3">
              <label className="sr-only ">Search</label>
              <input
                type="text"
                id="hero-input"
                name="name"
                required
                className="px-2 col-span-7 lg:col-span-8 py-2 lg:py-4 lg:px-4 border block w-full lg:min-w-[26rem] border-gray-200 shadow-sm rounded-md dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                placeholder="enter name of the instructor"
              />
              <button
                className="w-full h-full col-span-3 lg:col-span-2 px-4 rounded-md sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium "
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
        <p className="text-xl md:text-4xl lg:text-5xl font-bold">
          Courses to get you started
        </p>
      </div>

      <div>
        {filterCourse.length > 0 ? (
          filterCourse.map((course) => (
            <CourseCart key={course.id} course={course}></CourseCart>
          ))
        ) : noDataFound ? (
          <div className="text-center py-10">
            <p className="text-4xl text-red-400">No Courses Found</p>
          </div>
        ) : (
          courses.map((course) => <CourseCart key={course.id} course={course}></CourseCart>)
        )}
      </div>
    </div>
  );
};

export default AllCourses;
