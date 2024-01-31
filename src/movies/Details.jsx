import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    document.title = "Course Details | Paid Courses";
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  const course = courses?.find((course) => course.id === parseInt(id));
  console.log(course);

  return (
    <div className="max-w-5xl mx-auto px-10 pt-6 pb-14">
      <div className=" bg-white border shadow-sm">
        <div className="p-4 grid gap-5 items-center justify-center">
          <div className="">
            <img
              className="w-full h-full rounded-lg"
              src={course?.thumbnail}
              alt="Thumbnail"
            />
          </div>
          <div className="space-y-1">
            <p className="text-2xl md:text-4xl font-bold text-gray-900">
              {course?.name}
            </p>
            <p className="text-xl md:text-3xl font-medium text-gray-700">
              {course?.description}
            </p>
            <p className="text-md lg:text-xl font-medium text-gray-600">
              Location: {course?.location}
            </p>
            <p className="text-md lg:text-xl font-medium text-gray-600">
              Instructor Name : {course?.instructor}
            </p>
            <p className="text-md lg:text-xl font-medium text-gray-600">
            enrollmentStatus: Open
            </p>
            <p className="text-md lg:text-xl font-medium text-gray-600">
              Course Duration: {course?.duration}
            </p>
            <p className="text-md lg:text-xl font-medium text-gray-600">
              Course Schedule: {course?.schedule}
            </p>
            
            <p className="text-md lg:text-xl font-medium text-gray-600">
              prerequisites: {course?.prerequisites[0]},
              {course?.prerequisites[1]}
            </p>
            
            <p className="text-2xl font-bold pt-3 pb-1">Syllabus</p>
            <div
              tabIndex={0}
              className="collapse collapse-arrow border border-base-300 bg-base-200"
            >
              <div className="collapse-title text-xl font-medium">
              Week: {course?.syllabus[0].week}
              </div>
              <div className="collapse-content">
                <p>Topic: {course?.syllabus[0].topic}</p>
                <p>
                Content: {course?.syllabus[0].content}
                </p>
              </div>
            </div>
            <div
              tabIndex={1}
              className="collapse collapse-arrow border border-base-300 bg-base-200"
            >
              <div className="collapse-title text-xl font-medium">
              Week: {course?.syllabus[1].week}
              </div>
              <div className="collapse-content">
                <p>Topic: {course?.syllabus[1].topic}</p>
                <p>
                Content: {course?.syllabus[1].content}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
