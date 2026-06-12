"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const DropDown = ({ menuItem }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathUrl = usePathname();

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className={`hover:nav-gradient relative border border-transparent px-4 py-1.5 text-sm transition-all duration-300 ${
          pathUrl === menuItem.path
            ? "nav-gradient text-white"
            : "text-white/80 hover:text-white"
        }`}
      >
        {menuItem.title}
        <svg
          className={`ml-1 inline-block transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 9L12 15L18 9"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {isOpen && (
        <ul className="absolute left-0 mt-2 w-48 rounded-lg bg-dark/90 backdrop-blur-md border border-white/10 shadow-xl z-50 py-2">
          {menuItem.submenu.map((subItem: any, idx: number) => (
            <li key={idx}>
              <Link
                href={subItem.path}
                className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                  pathUrl === subItem.path
                    ? "bg-white/10 text-white"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                {subItem.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDown;