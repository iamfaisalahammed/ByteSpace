const CreatorsBanner = ({
  name = "PurePearl Studio",
  role = "Passionate UI/UX, Web designer",
  avatar = "https://i.pravatar.cc/200",
  bio = "Welcome to the creative world of [Creator's Name]. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together! Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.",
  products = 3,
  followers = 12,
  onFollow,
}) => {
  return (
    <section
      className="relative overflow-hidden bg-[#0f2cf0] px-6 py-10 text-white md:px-14"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
      }}
    >
      <div className="relative mx-auto max-w-6xl">
        {/* Top: avatar + name */}
        <div className="flex items-center gap-4">
          <img
            src={avatar}
            alt={name}
            className="h-16 w-16 rounded-2xl bg-pink-300 object-cover"
          />
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-3xl font-semibold md:text-4xl">{name}</h1>
              <span className="rounded-full bg-[#d4f21c] px-4 py-1 text-xs font-medium text-black">
                Creator
              </span>
            </div>
            <p className="mt-1 text-sm text-white/90">{role}</p>
          </div>
        </div>

        {/* Bio */}
        <p className="mt-8 max-w-5xl text-sm leading-7 text-white/90">{bio}</p>

        {/* Bottom: stats + follow */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex gap-4">
            <div className="rounded-full bg-white px-6 py-2.5 text-sm text-black">
              <span className="mr-1.5 text-[#0f2cf0]">{products}</span>
              Products
            </div>
            <div className="rounded-full bg-white px-6 py-2.5 text-sm text-black">
              <span className="mr-1.5 text-[#0f2cf0]">{followers}</span>
              Followers
            </div>
          </div>
          <button
            onClick={onFollow}
            className="rounded-full bg-[#d4f21c] px-8 py-2.5 text-sm font-medium text-black transition hover:brightness-95"
          >
            Follow
          </button>
        </div>
      </div>
    </section>
  );
};

export default CreatorsBanner;