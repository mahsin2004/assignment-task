import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import Cart from "./Cart";

const Category = () => {
  const [courses, setCourses] = useState([]);
  // const [filteredJobs, setFilteredJobs] = useState([]);
  // const [noDataFound, setNoDataFound] = useState(false);
  useEffect(() => {
    document.title = "All Courses | Paid Courses";
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="px-6 lg:px-10 mx-auto pt-14">
      <div className="text-3xl lg:text-5xl text-gray-700 lg:mb-8 font-semibold">
        <h1 className="font-bold">Courses Category</h1>
      </div>
      <Marquee speed={100}>
        {courses.map((course) => (
          <Cart key={course.id} course={course}></Cart>
        ))}
      </Marquee>
    </div>
  );
};

export default Category;
