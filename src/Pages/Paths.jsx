import { FiPenTool, FiSmartphone, FiMonitor, FiBriefcase, FiTrendingUp, FiCamera } from "react-icons/fi";

const paths = [
  { name: "Design", icon: FiPenTool },
  { name: "Development", icon: FiSmartphone },
  { name: "IT & Software", icon: FiMonitor },
  { name: "Business", icon: FiBriefcase },
  { name: "Marketing", icon: FiTrendingUp },
  { name: "Photography", icon: FiCamera },
];

const Paths = () => (
  <section className="max-w-6xl mx-auto px-6 py-16 text-center">
    <h2 className="text-3xl font-bold">Explore Diverse Learning Paths at Bytespace</h2>
    <p className="mt-4 text-xs text-gray-500 max-w-2xl mx-auto">
      At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of
      courses spans various fields, ensuring there's something for everyone. Unleash your
      potential and explore our carefully curated categories.
    </p>

    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-10">
      {paths.map(({ name, icon: Icon }) => (
        <div
          key={name}
          className="border border-gray-200 rounded-xl py-6 flex flex-col items-center gap-3 hover:shadow-md transition cursor-pointer"
        >
          <span className="w-10 h-10 rounded-full bg-lime-300 grid place-items-center text-lg">
            <Icon />
          </span>
          <p className="text-xs font-medium">{name}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Paths;