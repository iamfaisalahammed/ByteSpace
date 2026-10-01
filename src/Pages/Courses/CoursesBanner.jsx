// CourseBanner.jsx
import { FiSearch, FiChevronDown } from "react-icons/fi";

const CourseBanner = () => {
  return (
    <section
      className="py-14 px-4 text-center bg-[#0B3BF5]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }}
    >
      <h1 className="text-white text-2xl md:text-3xl font-bold mb-6">
        Find Your Next Course
      </h1>

      <div className="flex items-center justify-center gap-2 max-w-xl mx-auto">
        <label className="flex items-center gap-2 bg-white rounded-full px-4 py-2.5 flex-1">
          <FiSearch className="text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-full outline-none text-sm bg-transparent"
          />
        </label>
        <button className="flex items-center gap-1 bg-[#D4F34A] text-black text-sm font-semibold rounded-full px-5 py-2.5">
          Courses <FiChevronDown />
        </button>
      </div>
    </section>
  );
};

export default CourseBanner;