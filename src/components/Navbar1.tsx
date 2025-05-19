"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar1 = () => {
  const pathname = usePathname();
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/blogs", label: "Blogs" },
    { href: "/contact", label: "Contact" },
    { href: "/experience", label: "Experience" },
  ];

  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [dropdownOpen, setDropdownOpen] = useState(false);

 
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTheme = e.target.checked ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };


  const handleLinkClick = () => {
    setDropdownOpen(false);
  };

  const links = (
    <div className="space-x-3 gap-4 flex sm:flex-col lg:flex-row">
      {navLinks.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={`${
            pathname === href
              ? "text-blue-600 font-bold"
              : "text-white hover:text-teal-700"
          } ${label === "Home" ? "ml-3" : ""}`}
          onClick={handleLinkClick}
        >
          {label}
        </Link>
      ))}

      <section className="flex items-center mt-2 sm:mt-4 lg:mt-0">
        <label className="flex gap-2 cursor-pointer select-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <input
            type="checkbox"
            onChange={handleToggle}
            checked={theme === "dark"}
            className="toggle theme-controller"
            aria-label="Toggle dark mode"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
      </section>
    </div>
  );

  return (
    <nav className="navbar fixed z-10 w-full bg-black h-20 text-white flex items-center justify-between px-4">
      <div className="navbar-start flex items-center">
     
        <div className="dropdown relative lg:hidden">
          <button
            onClick={toggleDropdown}
            className="btn btn-ghost"
            aria-label="Toggle menu"
            aria-expanded={dropdownOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          {dropdownOpen && (
            <ul
              className="menu menu-sm dropdown-content bg-black rounded-box mt-2 w-52 p-4 shadow absolute left-0 top-full"
              onClick={handleLinkClick}
            >
              {links}
            </ul>
          )}
        </div>

        <Link href="/" className="ml-3 text-xl font-bold hidden lg:block">
          
        </Link>
      </div>

     
      <div className="navbar-center hidden lg:flex">{links}</div>

      <div className="navbar-end flex items-center">
        <a
          className="btn btn-neutral mr-3"
          href="https://drive.google.com/file/d/1OxYll_P_45jmlzNvZVTGKABn4ZTJRCP2/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Resume
        </a>
        <a
          className="btn btn-neutral mr-3"
          href="https://drive.google.com/uc?export=download&id=1OxYll_P_45jmlzNvZVTGKABn4ZTJRCP2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar1;
