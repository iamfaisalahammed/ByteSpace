import { FiShoppingBag } from "react-icons/fi";
import { Link, NavLink, useNavigate } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="/courses">Courses</NavLink>
      </li>

      <li>
        <NavLink to="/creators">Creators</NavLink>
      </li>
    </>
  );

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="bg-[#003BE2]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 text-sm text-white">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-lg font-bold"
        >
          <span className="grid h-7 w-7 place-items-center rounded-md bg-lime-300 font-black text-blue-700">
            b
          </span>

          ByteSpace
        </Link>

        {/* Navigation */}
        <ul className="hidden items-center gap-6 md:flex">
          {links}
        </ul>

        {/* Auth */}
        <div className="flex items-center gap-5">
          {user ? (
            <>
              <div className="flex items-center gap-2">
                <img
                  src={
                    user.photoURL ||
                    "https://placehold.co/40x40?text=U"
                  }
                  alt={user.displayName || "User"}
                  className="h-8 w-8 rounded-full border-2 border-white object-cover"
                />

                <span className="hidden max-w-24 truncate font-medium sm:block">
                  {user.displayName || "User"}
                </span>
              </div>

              <button
                onClick={handleLogout}
                className="rounded-md bg-white px-4 py-2 font-semibold text-[#003BE2] transition hover:bg-gray-100"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="hover:underline"
              >
                Sign In
              </Link>

              <Link
                to="/register"
                className="rounded-md bg-lime-300 px-4 py-2 font-semibold text-blue-700 transition hover:bg-lime-200"
              >
                Join Us
              </Link>
            </>
          )}

          <FiShoppingBag className="text-lg" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;