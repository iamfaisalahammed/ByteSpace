
import { FiShoppingBag } from "react-icons/fi";
import { NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/courses">Courses</NavLink></li>
      <li><NavLink to="/creators">Creators</NavLink></li>
    </>
  );

  return (
    <nav className="bg-[#003BE2]">
  <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between text-white text-sm">
    <div className="flex items-center gap-2 font-bold text-lg">
      <span className="bg-lime-300 text-blue-700 w-7 h-7 rounded-md grid place-items-center font-black">b</span>
      ByteSpace
    </div>

    <ul className="hidden md:flex items-center gap-6">{links}</ul>

    <div className="flex items-center gap-5">
      <button>Sign In</button>
      <button>Join Us</button>
      <FiShoppingBag className="text-lg" />
    </div>
  </div>
</nav>
  );
};

export default Navbar;