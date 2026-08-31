import { Home, Info, Zap, Briefcase, Mail } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { NAVIGATION } from "../../lib/constants";

// Icon map for navigation items
const iconMap: Record<string, React.ReactNode> = {
  "/": <Home size={20} />,
  "/about": <Info size={20} />,
  "/services": <Zap size={20} />,
  "/projects": <Briefcase size={20} />,
  "/contact": <Mail size={20} />,
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Navbar */}
      <header className="fixed left-0 top-0 z-50 w-full hidden md:block">
        <div className="mx-auto max-w-[1440px] px-6 pt-5 sm:px-8 lg:px-12">
          <nav className="flex items-center justify-between border border-white/10 bg-black/70 px-5 py-3 backdrop-blur-xl">
            <Link
              to="/"
              className="flex items-center gap-3"
              onClick={() => setIsOpen(false)}
            >
              <span className="hidden text-sm font-medium sm:block">
                AR Digital Solutions
              </span>
            </Link>

            <div className="hidden items-center gap-8 md:flex">
              {NAVIGATION.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  className={({ isActive }) =>
                    `text-sm transition-colors ${
                      isActive
                        ? "text-white"
                        : "text-neutral-500 hover:text-white"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            <Link
              to="/contact"
              className="rounded-full bg-white px-5 py-2 text-sm font-medium text-black transition hover:bg-neutral-200"
            >
              Let's talk
            </Link>
          </nav>
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed left-0 bottom-0 z-50 w-full md:hidden">
        <div className="flex items-center justify-center gap-2 px-4 py-4">
          <div className="flex items-center gap-3 rounded-full border border-white/20 bg-black/60 px-4 py-3 backdrop-blur-xl">
            {NAVIGATION.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  `flex items-center gap-2 transition-all duration-300 ${
                    isActive
                      ? "rounded-full bg-white px-4 py-2 text-black font-medium"
                      : "text-neutral-400 hover:text-white px-2 py-2"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <div className="flex items-center justify-center">
                      {iconMap[item.href]}
                    </div>
                    {isActive && <span>{item.label.split(" ")[0]}</span>}
                  </>
                )}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>

    </>
  );
}