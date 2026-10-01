const cols = [
  ["Popular Courses", "Medical Science", "Business", "IT", "Design"],
  ["Development", "Marketing", "Photography", "Data", "Music"],
  ["Become a Creator", "Affiliate Program", "Terms", "Help", "About"],
];

const Footer = () => (
  <footer className="max-w-6xl mx-auto px-6 pt-10 pb-6 border-t border-gray-200">
    <div className="grid md:grid-cols-[1.5fr_2fr] gap-10">
      <div>
        <div className="flex items-center gap-2 font-bold text-lg">
          <span className="bg-lime-300 w-7 h-7 rounded-md grid place-items-center font-black">b</span>
          ByteSpace
        </div>
        <p className="mt-3 text-[10px] text-gray-500">
          Stay up to date with our latest features, courses and creator updates.
        </p>
        <div className="flex gap-2 mt-3 max-w-xs">
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-gray-200 rounded px-3 py-1.5 text-xs flex-1 outline-none"
          />
          <button className="bg-lime-300 text-xs font-medium px-3 rounded">Subscribe</button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 text-[11px] text-gray-500">
        {cols.map((col, i) => (
          <ul key={i} className="space-y-2">
            {col.map((l) => (
              <li key={l} className="hover:text-black cursor-pointer">{l}</li>
            ))}
          </ul>
        ))}
      </div>
    </div>

    <div className="flex justify-between mt-10 text-[10px] text-gray-400">
      <p>© 2026 ByteSpace. All rights reserved.</p>
      <div className="flex gap-4">
        <span>Privacy Policy</span>
        <span>Terms of Service</span>
        <span>Cookie Policy</span>
      </div>
    </div>
  </footer>
);

export default Footer;