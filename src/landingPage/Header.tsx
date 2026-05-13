import { useState } from "react";
import { Logo } from "../components/Logo";

export const Header = () => {
  const [nav, setNav] = useState(false);
  return (
    <div>
      <div className="bg-slate-50 h-20 pt-3 pl-2 flex items-center justify-between px-4">
        <div>
          <Logo />
        </div>
        {/*desktop nave bar*/}
        <div className="hidden md:flex gap-4 font-medium">
          <span>Platform</span>
          <span>Solutions</span>
          <span>Pricing</span>
          <span>Resources</span>
          <span>Customers</span>
          <span>Company</span>
        </div>
        <button
          className="md:hidden cursor-pointer"
          onClick={() => {
            setNav(!nav);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="w-7 h-7 text-blue-500 hover:text-blue-700 transition duration-300"
          >
            <line x1="4" y1="6" x2="20" y2="6"></line>
            <line x1="4" y1="12" x2="20" y2="12"></line>
            <line x1="4" y1="18" x2="20" y2="18"></line>
          </svg>
        </button>
      </div>
      {nav && (
        <div className="bg-slate-50 hidden sm:flex flex-col items-center justify-center gap-4 font-medium md:hidden">
          <span>Platform</span>
          <span>Solutions</span>
          <span>Pricing</span>
          <span>Resources</span>
          <span>Customers</span>
          <span>Company</span>
        </div>
      )}
    </div>
  );
};
