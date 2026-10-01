import { FiBarChart2, FiStar } from "react-icons/fi";
import { Link } from "react-router";

const CourseCard = ({ course = {} }) => {
  const {
    id,
    image = "https://placehold.co/600x400",
    title = "Course Title",
    author = "Puzzpaat Studio",
    rating = 4.5,
    level = "Beginner",
    price = 25,
    lessons = 17,
    duration = "2 Hours",
  } = course;

  return (
    <div className="card bg-base-100 shadow-md border border-base-200">
      <figure>
        <img src={image} alt={title} className="h-56 w-full object-cover" />
      </figure>

      <div className="card-body">
        <p className="text-sm text-primary font-medium">{author}</p>

        <h2 className="card-title text-lg">{title}</h2>

        <div className="flex items-center gap-2 text-sm">
          <FiStar />
          <span>{rating}</span>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <FiBarChart2 />
            {level}
          </span>

          <span>{lessons} Lessons</span>
          <span>{duration}</span>
        </div>

        <div className="card-actions justify-between items-center mt-4">
          <span className="text-2xl font-bold">${price}</span>

          <Link to={`/courses/${id}`} className="btn bg-gradient-to-r from-lime-300 to-lime-300 btn-sm text-black">
            Enroll Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;