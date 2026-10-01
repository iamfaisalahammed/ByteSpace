import { useMemo, useState } from "react";
import CourseBanner from "./CoursesBanner";
import CourseFilters from "./CourseFilters";
import CourseCard from "./CourseCard";
import coursesData from "./courses.json";

const Courses = () => {
  const [filters, setFilters] = useState({
    category: "Featured",
    level: "All",
    rating: 0,
    sort: "relevant",
  });

  const filteredCourses = useMemo(() => {
    let result = coursesData.filter((course) => {
      const matchCategory =
        filters.category === "Featured" || course.category === filters.category;
      const matchLevel =
        filters.level === "All" || course.level === filters.level;
      const matchRating = Number(course.rating) >= filters.rating;

      return matchCategory && matchLevel && matchRating;
    });

    if (filters.sort === "price-low") {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (filters.sort === "price-high") {
      result = [...result].sort((a, b) => b.price - a.price);
    } else if (filters.sort === "rating") {
      result = [...result].sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [filters]);

  return (
    <div>
      <CourseBanner />
      <CourseFilters filters={filters} setFilters={setFilters} />

      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No courses found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Courses;