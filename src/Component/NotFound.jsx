import { Link } from "react-router";

const NotFound = () => {
  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0034e0] px-6 text-center text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
        backgroundSize: "66px 66px",
      }}
    >
      <h1
        className="select-none bg-gradient-to-b from-[#d4f21c] via-[#d4f21c]/60 to-transparent bg-clip-text text-[10rem] font-bold leading-none text-transparent sm:text-[16rem] md:text-[22rem]"
      >
        404
      </h1>

      <h2 className="-mt-10 max-w-xl text-4xl font-semibold leading-tight sm:-mt-16 md:-mt-24 md:text-5xl">
        The page you are looking for doesn’t exist
      </h2>

      <p className="mt-8 text-xs text-white/90">
        Try to use a correct url or go back to homepage to start again
      </p>

      <Link
        to="/"
        className="mt-8 rounded-full bg-[#d4f21c] px-6 py-2 text-xs font-medium text-black transition hover:brightness-95"
      >
        Back to Home
      </Link>
    </section>
  );
};

export default NotFound;