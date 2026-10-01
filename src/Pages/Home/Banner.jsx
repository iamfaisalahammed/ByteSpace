import { FiSearch } from "react-icons/fi";

const Banner = () => {
  return (
    <section
      className="relative bg-[#003BE2] overflow-hidden text-white text-center px-6 pt-10 min-h-[640px]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }}
    >
      {/* Heading */}
      <h1 className="relative z-10 text-4xl md:text-6xl font-bold leading-tight max-w-3xl mx-auto">
        Get Access to Hundreds <br className="hidden md:block" /> Courses Available
      </h1>
      <p className="relative z-10 mt-4 text-sm text-white/80 max-w-xl mx-auto">
        Unlock your creativity, gain valuable knowledge, and grow your business
        with our wide range of courses.
      </p>

      {/* Search */}
      <div className="relative z-10 mt-6 flex items-center justify-center gap-2">
        <label className="flex items-center gap-2 bg-white rounded-full px-4 py-2.5 w-80 text-gray-500">
          <FiSearch />
          <input
            type="text"
            placeholder="Course, topic, creator"
            className="outline-none w-full text-sm bg-transparent"
          />
        </label>
        <button className="bg-lime-300 text-black font-medium text-sm rounded-full px-6 py-2.5">
          Search
        </button>
      </div>

      {/* Lime circle + student */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-[-520px] w-[820px] h-[820px] rounded-full bg-lime-300" />
      <img
        src="/src/assets/Banner.png"
        alt="student"
        className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[340px] z-10"
      />

      {/* Floating cards */}
      <div className="hidden lg:block absolute left-[24%] bottom-[210px] z-20 bg-white text-black text-left rounded-lg px-3 py-2 text-xs shadow">
        <p className="font-semibold">UI/UX Design</p>
        <p className="text-gray-400">200 Courses • 1000+ Students</p>
      </div>

      <div className="hidden lg:block absolute right-[24%] bottom-[190px] z-20 bg-white text-black text-left rounded-lg px-4 py-3 w-44 shadow">
        <p className="text-xs">Learning Progress</p>
        <p className="text-2xl font-bold">55%</p>
        <progress className="progress progress-success h-1.5" value="55" max="100" />
      </div>

      <div className="hidden lg:block absolute left-[20%] bottom-10 z-20 bg-white text-black text-left rounded-lg px-3 py-2 text-xs shadow">
        <p className="font-semibold">Happy Students</p>
        <p className="text-gray-400">4.5 (24k) ⭐</p>
      </div>
    </section>
  );
};

export default Banner;