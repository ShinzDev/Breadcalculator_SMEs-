import { FaBreadSlice } from "react-icons/fa6";

const Nav = () => {
  let gitlink = "https://github.com/ShinzDev/Breadcalculator_SMEs-";

  return (
    <nav className="bg-yellow-100 shadow-md px-4 py-3 md:px-10 flex items-center justify-between rounded-b-xl">
      <div className="flex items-center gap-2 text-amber-900 font-bold text-xl">
        <FaBreadSlice className="text-3xl text-yellow-700" />
        BreadCalc
      </div>

      <div className="hidden md:flex gap-6 text-sm font-semibold text-yellow-800">
        <a
          href="#how-to-use"
          className="hover:text-orange-900 transition-colors"
        >
          How to Use
        </a>
        <a
          href={gitlink}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-900 transition-colors"
        >
          GitHub
        </a>
      </div>

      {/* Mobile Menu (optional hamburger) */}
      {/* You could add a dropdown menu for mobile here */}
    </nav>
  );
};

export default Nav;
