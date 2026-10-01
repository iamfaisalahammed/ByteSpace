import { FiBox, FiCpu, FiLayers, FiHexagon, FiZap } from "react-icons/fi";

const logos = [FiLayers, FiBox, FiZap, FiHexagon, FiCpu];

const Logos = () => (
  <section className="bg-gray-100 py-8">
    <div className="max-w-5xl mx-auto px-6 flex flex-wrap items-center justify-between gap-6 text-gray-500">
      {logos.slice(0, 4).map((Icon, i) => (
        <div key={i} className="flex items-center gap-2 font-semibold">
          <Icon className="text-2xl" /> Logoipsum
        </div>
      ))}
    </div>
  </section>
);

export default Logos;