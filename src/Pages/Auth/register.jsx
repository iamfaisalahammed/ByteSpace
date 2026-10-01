import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";

const Register = () => {
  const {
    registerUser,
    signInWithGoogle,
    updateUserProfile,
  } = useContext(AuthContext);

  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      setLoading(false);
      return;
    }

    try {
      await registerUser(email, password);

      await updateUserProfile({
        displayName: name,
      });

      navigate("/");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleRegister = async () => {
    setError("");
    setLoading(true);

    try {
      await signInWithGoogle();
      navigate("/");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition focus:border-blue-600 focus:bg-white";

  return (
    <div
      className="flex min-h-screen items-center justify-center bg-blue-700 px-4 py-10"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }}
    >
      <div className="grid w-full max-w-5xl items-center gap-10 lg:grid-cols-2">
        {/* Left side */}
        <div className="hidden text-white lg:block">
          <h3 className="text-lg font-semibold">Sign up and come in</h3>
          <p className="mt-2 max-w-xs text-sm text-blue-100">
            The registration process is straightforward, uncomplicated, and
            efficient, allowing users to sign up quickly, easily, and at no
            cost.
          </p>

          <div className="relative mt-10 h-72">
            {/* Back card */}
            <div className="absolute left-24 top-0 w-64 rounded-2xl bg-white p-3 shadow-xl">
              <div className="flex h-28 items-end justify-center gap-1 rounded-xl bg-gray-900 p-3">
                {[30, 55, 80, 60, 40, 25, 15].map((h, i) => (
                  <div
                    key={i}
                    className="w-3 rounded-t bg-cyan-400"
                    style={{ height: `${h}%` }}
                  ></div>
                ))}
              </div>

              <div className="mt-3 flex items-center justify-between text-gray-900">
                <h4 className="font-bold">the Power of Big Data</h4>
                <span className="text-sm text-gray-600">
                  4.5 <span className="text-yellow-400">★</span>
                </span>
              </div>

              <div className="mt-2 flex items-center justify-between">
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600">
                  Beginner
                </span>
                <span className="rounded-full bg-gray-900 px-2 py-1 text-xs text-white">
                  26+
                </span>
              </div>
            </div>

            {/* Front card */}
            <div className="absolute left-0 top-24 w-48 rounded-2xl bg-white p-3 shadow-xl">
              <div className="h-24 rounded-xl bg-gray-200"></div>
              <h4 className="mt-3 font-bold text-gray-900">Build Digital</h4>
              <span className="mt-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600">
                Beginner
              </span>
              <p className="mt-2 font-bold text-gray-900">$25</p>
            </div>

            {/* Happy students badge */}
            <div className="absolute bottom-0 left-36 rounded-xl bg-lime-300 px-4 py-3 text-sm font-medium text-gray-900 shadow-lg">
              Happy Students
              <span className="ml-2 rounded-full bg-gray-900 px-2 py-0.5 text-xs text-white">
                2K+
              </span>
            </div>
          </div>
        </div>

        {/* Right side form card */}
        <div className="w-full rounded-3xl bg-white p-6 shadow-xl md:p-10">
          <div className="mb-7">
            <p className="text-sm text-blue-600">Create an Account</p>

            <h2 className="mt-1 text-4xl font-bold leading-tight text-gray-900">
              Welcome to
              <br />
              ByteSpace
            </h2>
          </div>

          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="mb-1 block text-xs font-medium text-gray-800">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                placeholder="Jamie Davis"
                required
                className={inputClass}
              />
            </div>

            <div>
              <label className="mb-1 block text-xs font-medium text-gray-800">
                Email
              </label>

              <input
                type="email"
                name="email"
                placeholder="designer@example.com"
                required
                className={inputClass}
              />
            </div>

            <div>
              <label className="mb-1 block text-xs font-medium text-gray-800">
                Password
              </label>

              <input
                type="password"
                name="password"
                placeholder="Minimum 6 characters"
                required
                className={inputClass}
              />
            </div>

            {error && (
              <p className="rounded-lg bg-red-50 p-3 text-sm text-red-600">
                {error}
              </p>
            )}

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className="rounded-full bg-lime-300 px-8 py-2.5 text-sm font-semibold text-gray-900 transition hover:bg-lime-400 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Creating account..." : "Continue"}
              </button>
            </div>
          </form>

          <div className="my-5 flex items-center gap-3">
            <div className="h-px flex-1 bg-gray-200"></div>
            <span className="text-sm text-gray-400">OR</span>
            <div className="h-px flex-1 bg-gray-200"></div>
          </div>

          <button
            onClick={handleGoogleRegister}
            disabled={loading}
            className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-200 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50 disabled:opacity-60"
          >
            <FcGoogle className="text-xl" />
            Continue with Google
          </button>

          <p className="mt-8 text-center text-xs text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="font-medium text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
