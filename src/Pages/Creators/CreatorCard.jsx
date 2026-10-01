
import courses from "../Courses/courses.json";

const FilterButton = ({ icon, label }) => (
  <button className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
    {icon}
    {label}
  </button>
);

const icons = {
  filter: (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M3 4h18l-7 8v6l-4 2v-8L3 4z" />
    </svg>
  ),

  level: (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <rect x="4" y="13" width="3" height="7" rx="1" />
      <rect x="10.5" y="8" width="3" height="12" rx="1" />
      <rect x="17" y="4" width="3" height="16" rx="1" />
    </svg>
  ),

  category: (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="7" cy="7" r="3.5" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="1" />
      <path d="M7 14l4 7H3l4-7z" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="1" />
    </svg>
  ),

  sort: (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M4 6h16M4 12h11M4 18h6" />
    </svg>
  ),
};

const Pill = ({ children }) => (
  <span className="rounded-full bg-gray-500/60 px-3 py-1 text-[11px] text-white backdrop-blur-sm">
    {children}
  </span>
);

const CreatorCard = ({ course }) => {
  const {
    image = "https://placehold.co/600x400",
    title = "Course Title",
    author = "puzzpaat studio",
    rating = 4.5,
    level = "Beginner",
    price = 25,
    priceType = "course",
    lessons = 17,
    duration = "2 hours",
    comments = 0,
    students = [],
    studentCount = 0,
  } = course;

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-2.5">
      <div className="relative h-44 overflow-hidden rounded-xl">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-x-0 bottom-0 flex justify-center gap-2 p-2.5">
          <Pill>{lessons} Lessons</Pill>
          <Pill>{duration}</Pill>
          <Pill>{comments} Comments</Pill>
        </div>
      </div>

      <div className="px-1 pb-2 pt-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="truncate text-[15px] font-semibold text-gray-900">
            {title}
          </h3>

          <span className="flex shrink-0 items-center gap-1 text-sm text-gray-500">
            {rating}

            <svg
              className="h-4 w-4 text-gray-300"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2l3 7 7 .6-5.3 4.7 1.6 7.2L12 17.8 5.7 21.5l1.6-7.2L2 9.6 9 9z" />
            </svg>
          </span>
        </div>

        <p className="text-[11px] text-gray-500">
          by <span className="text-blue-600">{author}</span>
        </p>

        <div className="mt-3 flex items-center justify-between">
          <span className="flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs text-gray-600">
            <svg
              className="h-3.5 w-3.5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <rect x="4" y="13" width="3" height="7" rx="1" />
              <rect x="10.5" y="8" width="3" height="12" rx="1" />
              <rect x="17" y="4" width="3" height="16" rx="1" />
            </svg>

            {level}
          </span>

          <div className="flex items-center">
            {students.map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                className="-ml-2 h-7 w-7 rounded-full border-2 border-white object-cover first:ml-0"
              />
            ))}

            <span className="-ml-2 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-lime-300 text-[10px] font-semibold text-gray-900">
              {studentCount}+
            </span>
          </div>
        </div>

        <p className="mt-3 text-lg font-semibold text-blue-700">
          ${price}
          <span className="text-[11px] font-normal text-gray-500">
            /{priceType}
          </span>
        </p>
      </div>
    </div>
  );
};

export default function Courses() {
  return (
    <section className="mx-auto max-w-6xl p-6">
      <div className="mb-5 flex items-center justify-between">
        <div className="flex gap-3">
          <FilterButton icon={icons.filter} label="Filter" />
          <FilterButton icon={icons.level} label="Level" />
          <FilterButton icon={icons.category} label="Category" />
        </div>

        <FilterButton icon={icons.sort} label="Most relevant" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <CreatorCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
}
