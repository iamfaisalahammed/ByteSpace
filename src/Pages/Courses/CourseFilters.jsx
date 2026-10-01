import { FiFilter, FiBarChart2, FiGrid, FiSliders } from "react-icons/fi";

const categories = [
  "Featured", "Music", "Drawing & Painting", "Marketing", "Animation",
  "Social Media", "UI/UX Design", "Creative Marketing", "Cooking",
];

const levels = ["All", "Beginner", "Intermediate", "Advanced"];

const pillClass =
  "flex items-center gap-1.5 border border-gray-300 rounded-full px-3 py-1.5 text-xs bg-white";

const CourseFilters = ({ filters, setFilters }) => {
  const update = (key, value) =>
    setFilters((prev) => ({ ...prev, [key]: value }));

  return (
    <div className="max-w-6xl mx-auto px-4 pt-8">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <div className="flex flex-wrap gap-2">
          <label className={pillClass}>
            <FiFilter />
            <select
              value={filters.rating}
              onChange={(e) => update("rating", Number(e.target.value))}
              className="bg-transparent outline-none cursor-pointer"
            >
              <option value={0}>All Ratings</option>
              <option value={3}>3+ Stars</option>
              <option value={4}>4+ Stars</option>
              <option value={4.5}>4.5+ Stars</option>
            </select>
          </label>

          <label className={pillClass}>
            <FiBarChart2 />
            <select
              value={filters.level}
              onChange={(e) => update("level", e.target.value)}
              className="bg-transparent outline-none cursor-pointer"
            >
              {levels.map((l) => (
                <option key={l} value={l}>
                  {l === "All" ? "All Levels" : l}
                </option>
              ))}
            </select>
          </label>

          <label className={pillClass}>
            <FiGrid />
            <select
              value={filters.category}
              onChange={(e) => update("category", e.target.value)}
              className="bg-transparent outline-none cursor-pointer"
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </label>
        </div>

        <label className={pillClass}>
          <FiSliders />
          <select
            value={filters.sort}
            onChange={(e) => update("sort", e.target.value)}
            className="bg-transparent outline-none cursor-pointer"
          >
            <option value="relevant">Most relevant</option>
            <option value="rating">Top rated</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </label>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => update("category", c)}
            className={`whitespace-nowrap rounded-full px-3 py-1.5 text-xs ${
              filters.category === c ? "bg-[#D4F34A] font-semibold" : "bg-gray-100"
            }`}
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CourseFilters;