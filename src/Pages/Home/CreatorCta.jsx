const CreatorCta = () => (
  <section
    className="relative overflow-hidden bg-[#003BE2] text-white text-center px-6 py-20"
    style={{
      backgroundImage:
        "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
      backgroundSize: "60px 60px",
    }}
  >
    <div className="relative z-10 max-w-2xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold leading-tight">
        Unlock Your Potential as a <br /> Creator with ByteSpace
      </h2>
      <p className="mt-4 text-xs text-white/80">
        Experience the satisfaction of rich creation and transformation and discover. Register here
        and become a part of a community that 10,000 local and international creators. Whether you
        are a seasoned professional or someone with the ByteSpace Course Library.
      </p>
      <button className="mt-6 bg-lime-300 text-black text-xs font-medium rounded-full px-6 py-2.5">
        Join as Creator
      </button>
    </div>

    {/* Decorative shapes */}
    <div className="absolute left-6 top-10 w-16 h-16 rounded-2xl bg-white/90 rotate-12" />
    <div className="absolute left-0 bottom-6 w-32 h-10 rounded-full bg-lime-300 -rotate-12" />
    <div className="absolute right-10 top-8 w-20 h-8 rounded-full bg-lime-300 rotate-45" />
    <div className="absolute right-0 bottom-10 w-24 h-24 rounded-full bg-white/90" />
  </section>
);

export default CreatorCta;