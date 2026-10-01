import { FiCheckCircle } from "react-icons/fi";
import imgOne from "../../assets/Banner.png";
import imgTwo from "../../assets/imgTwo.png";

const stats = [
  { n: "12K", l: "Students" },
  { n: "70+", l: "Courses" },
  { n: "16", l: "Creators" },
];

const points = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

const Growth = () => (
  <section
    className="px-6 py-16"
    style={{
      background:
        "radial-gradient(circle at 10% 10%, #e9f7a8 0, transparent 35%), radial-gradient(circle at 90% 40%, #cdd8ff 0, transparent 40%), #fff",
    }}
  >
    <div className="max-w-6xl mx-auto">
      {/* Top */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold leading-tight">
            Your Path to Professional <br /> Growth Starts Here!
          </h2>

          <p className="mt-4 text-xs text-gray-500 max-w-md border border-purple-400 p-2 rounded">
            Update our curated selection of courses tailored to enhance your
            capabilities and accelerate your career journey. Whether you are
            looking to broaden specific skills, gain industry expertise, or
            embrace an a new career path nothing achieve the outcomes you
            desire.
          </p>

          <div className="flex gap-10 mt-6">
            {stats.map((s) => (
              <div key={s.l}>
                <p className="text-2xl font-bold">{s.n}</p>
                <p className="text-[10px] text-gray-500">{s.l}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="bg-white rounded-xl shadow-lg p-4 w-80">
            <p className="text-sm font-semibold">Learn Figma from Basic</p>

            <div className="flex justify-between items-end mt-3">
              <img
                src={imgOne}
                alt="Course"
                className="w-44 h-44 object-cover rounded-lg"
              />

              <div className="text-left bg-white shadow-md rounded-lg p-3">
                <p className="text-[10px]">Learning Progress</p>
                <p className="text-2xl font-bold">55%</p>

                <progress
                  className="progress progress-success h-1 w-24"
                  value="55"
                  max="100"
                />
              </div>
            </div>
          </div>

          <div className="absolute -top-4 right-10 w-12 h-12 rounded-full bg-lime-300" />
        </div>
      </div>

      {/* Bottom */}
      <div className="grid md:grid-cols-2 gap-10 items-center mt-20">
        <div className="relative flex justify-center">
          <div className="bg-white rounded-xl p-4 shadow-lg w-80 relative">
            <img
              src={imgTwo}
              alt="Instructor"
              className="w-full h-80 object-cover rounded-lg"
            />

            <div className="absolute top-6 left-6 bg-blue-800 text-white text-[10px] p-3 rounded-lg w-28">
              <p>Total Revenue</p>
              <p className="font-bold text-base">$1220.29</p>
            </div>

            <div className="absolute bottom-6 left-6 bg-white text-[10px] p-3 rounded-lg shadow">
              <p className="font-semibold">Happy Students</p>
              <p className="text-gray-400">4.5 (24k) ⭐</p>
            </div>
          </div>

          <div className="absolute -right-2 top-0 w-8 h-16 rounded-full bg-lime-300 rotate-12" />
        </div>

        <div>
          <h2 className="text-3xl font-bold">
            Create & Manage <br /> Courses Easily.
          </h2>

          <p className="mt-4 text-xs text-gray-500 max-w-md">
            ByteSpace supports individuals or entities in the creation,
            publication, and customization of educational courses.
          </p>

          <ul className="mt-5 space-y-2 text-xs">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <FiCheckCircle className="text-blue-600 text-sm" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Growth;