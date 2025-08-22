import {
  LeafIcon,
  MenuIcon,
  SunIcon,
  DropletsIcon,
  SproutIcon,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/clerk-react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useUser();
  const role = user?.publicMetadata?.role;

  return (
    <nav className="bg-white/90 backdrop-blur-lg shadow-sm py-3 px-6 md:px-12 sticky top-0 z-50 border-b border-green-100">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="relative">
            <LeafIcon className="h-7 w-7 text-green-600 group-hover:rotate-12 transition-transform duration-300" />
            <SunIcon className="absolute -top-1 -right-1 h-3 w-3 text-yellow-500 animate-pulse" />
          </div>
          <span className="font-heading font-bold text-2xl bg-gradient-to-r from-green-700 to-green-500 bg-clip-text text-transparent">
            AgroSmart
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-8 font-medium">
          {[
            { name: "Analysis", icon: <DropletsIcon className="h-4 w-4" /> },
            { name: "Features", icon: <SproutIcon className="h-4 w-4" /> },
            { name: "Recommendations", icon: <LeafIcon className="h-4 w-4" /> },
          ].map((item) => (
            <a
              key={item.name}
              href={`#${item.name.toLowerCase().replace(" ", "-")}`}
              className="flex items-center gap-1.5 text-gray-700 hover:text-green-600 transition-colors group"
            >
              {item.icon}
              {item.name}
              <span className="block w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-green-400 to-green-600 transition-all duration-300"></span>
            </a>
          ))}
        </div>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-green-50 text-gray-600 hover:text-green-600 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <MenuIcon className="h-6 w-6" />
        </button>

        <div className="hidden md:flex items-center space-x-4">
          {role === "admin" && (
            <Link
              to="/admin/crops"
              className="text-green-700 font-medium hover:text-green-800 transition-all flex items-center gap-1 px-3 py-1.5 rounded-lg hover:bg-green-50"
            >
              <span>Admin</span>
            </Link>
          )}
          <SignedOut>
            <div className="flex items-center gap-3">
              <Link
                to="/sign-in"
                className="px-4 py-2 text-green-700 font-medium rounded-lg hover:bg-green-50 transition flex items-center gap-1.5 border border-green-100 hover:border-green-200 hover:shadow-sm"
              >
                <span>Log In</span>
              </Link>
              <Link
                to="/sign-up"
                className="px-4 py-2 bg-gradient-to-r from-green-600 to-green-500 text-white font-medium rounded-lg hover:from-green-700 hover:to-green-600 transition flex items-center gap-1.5 shadow-sm hover:shadow-md"
              >
                <span>Get Started</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </SignedOut>

          <SignedIn>
            <div className="border-l border-green-100 pl-4">
              <UserButton
                appearance={{
                  elements: {
                    userButtonAvatarBox: "h-8 w-8",
                    userButtonOuterIdentifier:
                      "text-sm font-medium text-gray-700",
                  },
                }}
              />
            </div>
          </SignedIn>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white mt-2 py-2 px-4 rounded-lg shadow-lg animate-fadeIn border border-green-50">
          {[
            {
              name: "Soil Analysis",
              icon: <DropletsIcon className="h-4 w-4" />,
            },
            { name: "Crop Health", icon: <SproutIcon className="h-4 w-4" /> },
            { name: "Recommendations", icon: <LeafIcon className="h-4 w-4" /> },
          ].map((item) => (
            <a
              key={item.name}
              href={`#${item.name.toLowerCase().replace(" ", "-")}`}
              className="flex items-center gap-2 py-2 px-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.icon}
              {item.name}
            </a>
          ))}

          <div className="pt-2 mt-2 border-t border-green-100">
            <Link
              to="/admin/crops"
              className="flex items-center gap-2 py-2 px-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Admin</span>
            </Link>
          </div>

          <div className="flex flex-col gap-2 pt-3 mt-2 border-t border-green-100">
            <SignedOut>
              <Link
                to="/sign-in"
                className="flex items-center justify-center gap-1.5 w-full px-4 py-2.5 border border-green-100 text-green-700 font-medium rounded-lg hover:bg-green-50 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>Log In</span>
              </Link>
              <Link
                to="/sign-up"
                className="flex items-center justify-center gap-1.5 w-full px-4 py-2.5 bg-gradient-to-r from-green-600 to-green-500 text-white font-medium rounded-lg hover:from-green-700 hover:to-green-600 transition shadow-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>Get Started</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </SignedOut>

            <SignedIn>
              <div className="flex justify-center py-2">
                <UserButton
                  appearance={{
                    elements: {
                      userButtonAvatarBox: "h-8 w-8",
                      userButtonOuterIdentifier:
                        "text-sm font-medium text-gray-700",
                    },
                  }}
                />
              </div>
            </SignedIn>
          </div>
        </div>
      )}
    </nav>
  );
};
