import { FiBarChart2 } from "react-icons/fi";

const categories = [
  "Featured", "Music", "Drawing & Painting", "Marketing", "Animation",
  "Social Media", "UI/UX Design", "Creative Marketing", "Digital Illustration",
  "Film & Video", "Crafts", "Freelance & Entrepreneurship", "Graphic Design",
  "Photography", "Productivity", "Web Development", "Data Science", "Cooking",
];

const courses = [
  { title: "Learn Figma from Basic", by: "Jackquel Hodis", img: "https://picsum.photos/seed/c1/400/250" },
  { title: "Build Digital Asset", by: "Jackquel Hodis", img: "https://picsum.photos/seed/c2/400/250" },
  { title: "the Power of Big Data", by: "Jackquel Hodis", img: "https://picsum.photos/seed/c3/400/250" },
  { title: "Balancing Productivity an...", by: "Jackquel Hodis", img: "https://picsum.photos/seed/c4/400/250" },
  { title: "Mastering Money Manage...", by: "Jackquel Hodis", img: "https://picsum.photos/seed/c5/400/250" },
  { title: "From Idea to Startup Succ...", by: "Jackquel Hodis", img: "https://picsum.photos/seed/c6/400/250" },
];

const CourseCard = ({ title, by, img }) => (
  <div className="bg-white border border-gray-200 rounded-xl p-3 text-left">
    <div className="relative rounded-lg overflow-hidden">
      <img src={img} alt={title} className="w-full h-40 object-cover" />
      <div className="absolute bottom-2 left-2 flex gap-1 text-[10px] text-white">
        {["17 Lessons", "2 hours 30 mins", "48 Comments"].map((t) => (
          <span key={t} className="bg-black/60 px-2 py-0.5 rounded-full">{t}</span>
        ))}
      </div>
    </div>

    <div className="flex justify-between items-center mt-3">
      <h3 className="font-semibold text-sm">{title}</h3>
      <span className="text-xs text-gray-500">4.5 ☆</span>
    </div>
    <p className="text-[10px] text-gray-400">
      by <span className="text-blue-600">{by}</span>
    </p>

    <div className="flex items-center justify-between mt-3">
      <span className="flex items-center gap-1 text-[10px] border border-gray-200 rounded px-2 py-1">
        <FiBarChart2 /> Beginner
      </span>
      <div className="avatar-group -space-x-2">
        {[1, 2, 3].map((n) => (
          <div key={n} className="avatar">
            <div className="w-6">
              <img src={`https://i.pravatar.cc/40?img=${n + 10}`} alt="" />
            </div>
          </div>
        ))}
        <div className="avatar placeholder">
          <div className="w-6 bg-lime-300 text-black text-[9px]">
            <span>24+</span>
          </div>
        </div>
      </div>
    </div>

    <p className="mt-3 text-blue-700 font-bold text-sm">
      $25<span className="text-[10px] text-gray-400 font-normal">/Mpkm</span>
    </p>
  </div>
);

const Discover = () => (
  <section className="max-w-6xl mx-auto px-6 py-16 text-center">
    <h2 className="text-3xl font-bold leading-tight">
      Discover Your Passion, <br /> Build Your Skills
    </h2>
    <p className="mt-4 text-xs text-gray-500 max-w-2xl mx-auto">
      At Bytespace Courses, we bring you close to life-changing knowledge. With a variety of
      courses across different fields, from technology to the arts, and make a difference in
      your life.
    </p>

    <div className="flex flex-wrap justify-center gap-2 mt-8 max-w-4xl mx-auto">
      {categories.map((c, i) => (
        <button
          key={c}
          className={`text-xs px-3 py-1.5 rounded-full ${
            i === 0 ? "bg-lime-300 font-medium" : "bg-gray-100 text-gray-600"
          }`}
        >
          {c}
        </button>
      ))}
      <button className="text-xs text-blue-600 px-2">+ More</button>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
      {courses.map((c) => (
        <CourseCard key={c.title} {...c} />
      ))}
    </div>
  </section>
);

export default Discover;