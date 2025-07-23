import { LeafIcon, UserIcon, MenuIcon } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm py-3 px-6 md:px-12 sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        <div className="flex items-center space-x-2 group">
          <LeafIcon className="h-7 w-7 text-green-600 group-hover:rotate-12 transition-transform duration-300" />
          <span className="font-heading font-bold text-2xl text-green-800 hover:text-green-700 transition-colors">
            AgroSmart
          </span>
        </div>


        <div className="hidden md:flex items-center space-x-8 font-body">
          {["Soil Analysis", "Recommendations", "Features", "About"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="relative text-gray-600 hover:text-green-600 transition-colors group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>


        <button
          className="md:hidden p-2 text-gray-600 hover:text-green-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <MenuIcon className="h-6 w-6" />
        </button>


        <div className="hidden md:flex items-center space-x-4 font-body">
          <a
            href="/admin/crops"
            className="text-green-700 font-medium hover:underline hover:text-green-800 transition-all"
          >
            Admin
          </a>
          <button className="p-2 bg-green-50 rounded-full text-green-600 hover:bg-green-100 transition-all hover:scale-105 shadow-sm">
            <UserIcon className="h-5 w-5" />
          </button>
          <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-5 py-2.5 rounded-lg hover:shadow-lg transition-all hover:scale-[1.02] active:scale-95 shadow-md">
            Get Started
          </button>
        </div>

      </div>


      {isMenuOpen && (
        <div className="md:hidden bg-white/95 mt-2 py-3 px-6 rounded-lg shadow-lg animate-fadeIn">
          {["Soil Analysis", "Recommendations", "Features", "About"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="block py-2 text-gray-700 hover:text-green-600 hover:bg-green-50/50 px-3 rounded transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <div className="flex space-x-4 pt-3 mt-2 border-t border-gray-100">
            <button className="p-2 bg-green-50 rounded-full text-green-600 hover:bg-green-100 transition-colors">
              <UserIcon className="h-5 w-5" />
            </button>
            <button className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};