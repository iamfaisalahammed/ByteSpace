const reviews = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    img: 5,
    text: "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have contributed my expectations. The platform truly feels a sense of community and lifelong learning.",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    img: 12,
    text: "I've had several amazing learning platforms, and ByteSpace stands out for its vibrant community and the range of subjects. The user navigation and engaging content make it a go-to platform for continuous self-development.",
  },
  {
    name: "Alex B.",
    role: "Aspired Creator",
    img: 33,
    text: "As a creator, ByteSpace gave a stage for me. It's user friendly, and the support from the community is incredible. I'm fulfilling to see my courses making a positive impact on learners globally.",
  },
];

const Testimonials = () => (
  <section className="max-w-6xl mx-auto px-6 py-20">
    <div className="grid md:grid-cols-[1fr_2fr] gap-10 items-start">
      <div>
        <h2 className="text-2xl font-bold leading-tight">
          Discover What Our <br /> Community Is Saying
        </h2>
      </div>
      <p className="text-xs text-gray-500">
        At ByteSpace, our vibrant community of learners and creators is at the heart of what we do.
        Hear directly from those whose lives have been transformed, the transformative power of our
        platform. Explore testimonials that reflect the diverse perspectives of our community and
        their shared passion.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-5 mt-10">
      {reviews.map((r) => (
        <div key={r.name} className="bg-white border border-gray-100 shadow-md rounded-xl p-5">
          <div className="flex items-center gap-3">
            <img src={`https://i.pravatar.cc/80?img=${r.img}`} alt="" className="w-10 h-10 rounded-full" />
            <div>
              <p className="text-xs font-semibold">{r.name}</p>
              <p className="text-[10px] text-blue-600">{r.role}</p>
            </div>
          </div>
          <p className="mt-4 text-[11px] text-gray-500 leading-relaxed">"{r.text}"</p>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;