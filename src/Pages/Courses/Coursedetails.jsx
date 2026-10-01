import { useState } from "react";
import { useParams } from "react-router";
import {
  FiBarChart2,
  FiStar,
  FiUsers,
  FiShare2,
  FiPlay,
  FiBookOpen,
  FiVideo,
  FiAward,
  FiMessageCircle,
} from "react-icons/fi";
import { FaCheckCircle } from "react-icons/fa";
import courses from "./courses.json";

const includes = [
  { icon: <FiBookOpen />, text: "Learning Resources" },
  { icon: <FiVideo />, text: "Quality Learning Video" },
  { icon: <FiAward />, text: "Certificate of Completion" },
  { icon: <FiMessageCircle />, text: "Private Consultation" },
];

const CourseDetails = () => {
  const { id } = useParams();
  const [tab, setTab] = useState("about");

  const c = courses.find((item) => String(item.id) === String(id));

  if (!c) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Course Not Found</h2>
          <p className="mt-2 text-gray-500">
            The course you are looking for does not exist.
          </p>
        </div>
      </div>
    );
  }

  // lessons যদি array হয় তাহলে ব্যবহার করবে
  // না হলে empty array রাখবে যাতে .map() error না দেয়
  const lessonList = Array.isArray(c.lessons) ? c.lessons : [];

  return (
    <div className="bg-base-100 min-h-screen">
      {/* HERO */}
      <section
        className="relative bg-[#0b3dff] text-white pb-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 pt-16">
          <div className="flex items-start justify-between gap-4">
            <div className="lg:w-2/3">
              <h1 className="text-3xl md:text-4xl font-bold">
                {c.title}
              </h1>

              <p className="mt-2 text-white/90">
                {c.subtitle}
              </p>

              <p className="mt-3 text-sm">
                by <span className="underline">{c.author}</span>
              </p>

              <div className="mt-4 flex flex-wrap gap-2 text-sm">
                <span className="badge badge-lg bg-white text-black border-0 gap-1">
                  <FiBarChart2 />
                  {c.level}
                </span>

                <span className="badge badge-lg bg-white text-black border-0 gap-1">
                  <FiStar />
                  {c.rating} ({c.reviews || 0} reviews)
                </span>

                <span className="badge badge-lg bg-white text-black border-0 gap-1">
                  <FiUsers />
                  {c.students || 0} Students
                </span>
              </div>
            </div>

            <button className="btn btn-sm bg-[#d4f542] text-black border-0 hover:bg-[#c3e535] rounded-full">
              <FiShare2 />
              Share
            </button>
          </div>
        </div>
      </section>

      {/* BODY */}
      <div className="max-w-6xl mx-auto px-4 -mt-32 grid lg:grid-cols-3 gap-8">
        {/* LEFT */}
        <div className="lg:col-span-2">
          {/* VIDEO / THUMBNAIL */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl bg-base-200">
            <img
              src={c.thumbnail || c.image || "https://placehold.co/1200x700"}
              alt={c.title}
              className="w-full h-64 md:h-[420px] object-cover"
            />

            <button className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-black/60 text-white flex items-center justify-center">
              <FiPlay size={26} />
            </button>
          </div>

          {/* TABS */}
          <div className="mt-8 flex gap-2">
            {["about", "lessons", "reviews"].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`btn btn-sm rounded-full capitalize ${
                  tab === t
                    ? "btn-neutral"
                    : "btn-ghost border-base-300"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* ABOUT */}
          {tab === "about" && (
            <div className="mt-6 space-y-8">
              {/* DESCRIPTION */}
              <div>
                <h3 className="font-bold text-lg mb-2">
                  Description
                </h3>

                <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                  {Array.isArray(c.description) ? (
                    c.description.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))
                  ) : (
                    <p>
                      {c.description ||
                        "Learn practical skills and build your knowledge through this course."}
                    </p>
                  )}
                </div>
              </div>

              {/* SNEAK PEEK */}
              <div>
                <h3 className="font-bold text-lg mb-3">
                  Sneak Peek
                </h3>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {Array.isArray(c.snookPeek) &&
                  c.snookPeek.length > 0 ? (
                    c.snookPeek.map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt={`Preview ${i + 1}`}
                        className="rounded-xl h-28 w-full object-cover"
                      />
                    ))
                  ) : (
                    <div className="col-span-full">
                      <img
                        src={
                          c.thumbnail ||
                          c.image ||
                          "https://placehold.co/600x400"
                        }
                        alt="Course preview"
                        className="rounded-xl h-28 w-full object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* KEY POINTS */}
              <div>
                <h3 className="font-bold text-lg mb-3">
                  Key Points
                </h3>

                <ul className="space-y-3 text-sm">
                  {Array.isArray(c.keyPoints) &&
                  c.keyPoints.length > 0 ? (
                    c.keyPoints.map((k, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2"
                      >
                        <FaCheckCircle className="text-[#0b3dff]" />
                        {k}
                      </li>
                    ))
                  ) : (
                    <>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-[#0b3dff]" />
                        Practical learning resources
                      </li>

                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-[#0b3dff]" />
                        Step-by-step lessons
                      </li>

                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-[#0b3dff]" />
                        Certificate of completion
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          )}

          {/* LESSONS */}
          {tab === "lessons" && (
            <div className="mt-6">
              {lessonList.length > 0 ? (
                <ul className="divide-y divide-base-200 border border-base-200 rounded-xl">
                  {lessonList.map((lesson, i) => (
                    <li
                      key={lesson.title || i}
                      className="flex items-center justify-between p-4 text-sm"
                    >
                      <span>
                        {String(i + 1).padStart(2, "0")}{" "}
                        {lesson.title}
                      </span>

                      <span className="text-[#0b3dff]">
                        {lesson.time}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="border border-base-200 rounded-xl p-6 text-center">
                  <FiBookOpen
                    size={30}
                    className="mx-auto text-[#0b3dff]"
                  />

                  <h3 className="mt-3 font-semibold">
                    {c.totalLessons || 0} Lessons
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    Lesson details will be available soon.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* REVIEWS */}
          {tab === "reviews" && (
            <div className="mt-6 text-sm text-gray-500">
              No reviews to show yet.
            </div>
          )}
        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="lg:sticky lg:top-6 self-start">
          <div className="bg-white rounded-2xl shadow-xl border border-base-200 p-5">
            <h3 className="font-bold">
              {c.totalLessons || c.lessons || 0} Lessons
              {c.totalHours ? ` (${c.totalHours} hours)` : ""}
            </h3>

            {/* LESSON LIST */}
            {lessonList.length > 0 && (
              <ul className="mt-3 space-y-2 text-xs">
                {lessonList.map((lesson, i) => (
                  <li
                    key={lesson.title || i}
                    className="flex justify-between gap-2"
                  >
                    <span>
                      {String(i + 1).padStart(2, "0")}{" "}
                      {lesson.title}
                    </span>

                    <span className="text-[#0b3dff] whitespace-nowrap">
                      {lesson.time}
                    </span>
                  </li>
                ))}
              </ul>
            )}

            <p className="mt-2 text-xs text-gray-500">
              {c.moreVideos || 0} more videos
            </p>

            <p className="mt-4 text-xs text-gray-500">
              Ready to Dive In? Enroll Now and Start Building Your
              Digital Future!
            </p>

            <p className="mt-3 text-2xl font-bold">
              ${c.price || 0}
              <span className="text-xs font-normal text-gray-500">
                /Mo/one
              </span>
            </p>

            <button className="btn w-full mt-3 rounded-full bg-[#d4f542] text-black border-0 hover:bg-[#c3e535]">
              Enroll Now
            </button>

            {/* COURSE INCLUDES */}
            <h4 className="mt-5 font-semibold text-sm">
              This course includes
            </h4>

            <ul className="mt-3 space-y-2 text-xs text-gray-600">
              {includes.map((item) => (
                <li
                  key={item.text}
                  className="flex items-center gap-2"
                >
                  <span className="text-[#0b3dff]">
                    {item.icon}
                  </span>

                  {item.text}
                </li>
              ))}
            </ul>

            <hr className="my-4 border-base-200" />

            {/* CREATOR */}
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="w-10 rounded">
                  <img
                    src={
                      c.authorImage ||
                      "https://placehold.co/80x80"
                    }
                    alt={c.author}
                  />
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold">
                  {c.author || "PurePearl Studio"}
                </p>

                <p className="text-xs text-gray-500">
                  Professional Creator
                </p>
              </div>
            </div>

            <p className="mt-3 text-xs text-gray-500">
              Ready to Dive In? Enroll Now and Start Building Your
              Digital Future!
            </p>

            <button className="btn btn-xs btn-outline mt-2 rounded-full">
              See Full Profile
            </button>
          </div>
        </aside>
      </div>

      <div className="h-16" />
    </div>
  );
};

export default CourseDetails;