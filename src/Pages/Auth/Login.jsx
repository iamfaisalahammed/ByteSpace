import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const { singInUser, signInWithGoogle } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const from = location.state?.from?.pathname || "/";

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await singInUser(email, password);
      navigate(from, { replace: true });
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError("");
    setLoading(true);

    try {
      await signInWithGoogle();
      navigate(from, { replace: true });
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0b2cff] px-4 py-10 lg:justify-between lg:px-16"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
        backgroundSize: "64px 64px",
      }}
    >
      {/* Left side – intro (hidden on small screens) */}
      <div className="relative hidden h-[520px] w-full max-w-lg lg:block">
        <div className="mb-10 h-8 w-8 rounded-lg bg-[#d4f53c]"></div>

        <h3 className="text-sm font-semibold text-white">Sign in with ease</h3>
        <p className="mt-2 max-w-xs text-xs leading-relaxed text-white/80">
          Experience a seamless and efficient sign-in process that grants you
          instant access to a world of knowledge.
        </p>

        {/* Back course card */}
        <div className="absolute left-0 top-44 w-40 rounded-2xl bg-white p-3 shadow-lg">
          <div className="h-24 rounded-xl bg-gray-200"></div>
          <p className="mt-3 text-sm font-bold text-gray-900">Learn the Basics</p>
          <p className="mt-1 text-xs font-semibold text-gray-900">$25</p>
        </div>

        {/* Main course card */}
        <div className="absolute left-20 top-36 w-64 rounded-2xl bg-white p-3 shadow-xl">
          <div className="h-32 rounded-xl bg-gray-900"></div>
          <div className="mt-3 flex items-center justify-between">
            <p className="text-sm font-bold text-gray-900">Start Learning Today</p>
            <span className="text-xs font-semibold text-gray-900">
              4.5 <span className="text-[#d4f53c]">★</span>
            </span>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <span className="rounded-full bg-gray-100 px-3 py-1 text-[10px] text-gray-600">
              Beginner
            </span>
            <span className="text-xs font-semibold text-gray-900">$25</span>
          </div>
        </div>

        {/* Decorative shapes */}
        <div className="absolute left-16 top-32 h-12 w-12 rounded-full border-[10px] border-[#d4f53c]"></div>
        <div className="absolute bottom-6 left-0 h-16 w-16 rotate-12 bg-[#d4f53c] [clip-path:polygon(50%_0%,100%_100%,0%_100%)]"></div>

        {/* Happy students badge */}
        <div className="absolute bottom-0 left-36 rounded-xl bg-[#d4f53c] px-4 py-3 shadow-lg">
          <p className="text-xs font-bold text-gray-900">Happy Students</p>
          <p className="text-[10px] text-gray-700">4.5 ★</p>
        </div>
      </div>

      {/* Right side – login card */}
      <div className="relative w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl md:p-10">
        <div className="mb-8">
          <p className="text-sm text-[#0b2cff]">Sign In</p>
          <h2 className="mt-1 text-4xl font-bold text-gray-900">Welcome Back</h2>
          <p className="mt-2 text-sm text-gray-500">Login to continue learning</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="mb-1 block text-xs font-medium text-gray-800">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="designer@example.com"
              required
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-[#0b2cff] focus:bg-white"
            />
          </div>

          <div>
            <label className="mb-1 block text-xs font-medium text-gray-800">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="********"
              required
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-[#0b2cff] focus:bg-white"
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
              className="rounded-full bg-[#d4f53c] px-8 py-2.5 text-sm font-semibold text-gray-900 transition hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </div>
        </form>

        <div className="my-7 flex items-center gap-3">
          <div className="h-px flex-1 bg-gray-200"></div>
          <span className="text-xs text-gray-400">or</span>
          <div className="h-px flex-1 bg-gray-200"></div>
        </div>

        <div className="flex items-center justify-center gap-4">
         

          <button
            type="button"
            onClick={handleGoogleLogin}
            disabled={loading}
            aria-label="Continue with Google"
            className="flex h-14 w-14 items-center justify-center rounded-2xl border border-gray-200 text-2xl transition hover:bg-gray-50 disabled:opacity-60"
          >
            <FcGoogle />
          </button>
        </div>

        <p className="mt-8 text-center text-xs text-gray-500">
          New user?{" "}
          <Link to="/register" className="text-[#0b2cff] hover:underline">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
