import { useState } from "react";
import { FaBreadSlice } from "react-icons/fa6";
import { HiMenu, HiX } from "react-icons/hi";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const gitlink = "https://github.com/ShinzDev/Breadcalculator_SMEs-";

  return (
    <nav className="bg-yellow-100 shadow-md px-4 py-3 md:px-10 rounded-b-xl">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 text-amber-900 font-bold text-xl">
          <FaBreadSlice className="text-3xl text-yellow-700" />
          BreadCalc
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 text-sm font-semibold text-yellow-800">
          <a href="#how-to-use" className="hover:text-orange-900 transition-colors">
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

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-yellow-800 focus:outline-none"
          >
            {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu with Animation */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          menuOpen ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-3 text-yellow-800 font-semibold">
          <a href="#how-to-use" className="hover:text-orange-900 transition-colors">
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
      </div>
    </nav>
  );
};

export default Nav;
