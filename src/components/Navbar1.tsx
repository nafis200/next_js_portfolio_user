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

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const handleLinkClick = () => setDropdownOpen(false);

  return (
    <nav className="navbar fixed z-10 w-full bg-black h-20 text-white px-4 flex justify-between items-center">
      <div className="navbar-start flex items-center">
        <div className="lg:hidden">
          <button onClick={toggleDropdown} className="btn btn-ghost" aria-label="Toggle menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {dropdownOpen && (
            <ul className="absolute top-16 left-4 bg-black rounded-lg shadow-md p-4 w-60 flex flex-col gap-3 z-20">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={handleLinkClick}
                    className={`block ${
                      pathname === href ? "text-red-600 font-bold" : "text-white hover:text-teal-500"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <label className="flex gap-2 items-center cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 3v1m0 16v1m8.66-10h1M3.34 12h1m12.02 6.36l.71.71m-9.19-.71l-.71.71m12.02-12.02l.71-.71m-9.19.71l-.71-.71M12 5a7 7 0 100 14 7 7 0 000-14z"
                    />
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
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
                    />
                  </svg>
                </label>
              </li>
            </ul>
          )}
        </div>

        <Link href="/" className="ml-3 text-xl font-bold hidden lg:block">
          
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex gap-6 items-center">
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`${
              pathname === href ? "text-red-600 font-bold" : "text-white hover:text-teal-500"
            }`}
          >
            {label}
          </Link>
        ))}

        <label className="flex gap-2 items-center cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 3v1m0 16v1m8.66-10h1M3.34 12h1m12.02 6.36l.71.71m-9.19-.71l-.71.71m12.02-12.02l.71-.71m-9.19.71l-.71-.71M12 5a7 7 0 100 14 7 7 0 000-14z"
            />
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
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
            />
          </svg>
        </label>
      </div>

      <div className="navbar-end flex items-center gap-2">
        <a
          className="btn btn-sm btn-outline text-white"
          href="https://drive.google.com/file/d/1OxYll_P_45jmlzNvZVTGKABn4ZTJRCP2/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Resume
        </a>
        <a
          className="btn btn-sm btn-outline text-white"
          href="https://drive.google.com/uc?export=download&id=1OxYll_P_45jmlzNvZVTGKABn4ZTJRCP2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download
        </a>
      </div>
    </nav>
  );
};

export default Navbar1;
