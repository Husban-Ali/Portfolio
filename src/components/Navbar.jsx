import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";

const menu =
  "https://ik.imagekit.io/bqzlidc77g/my%20portfolio/menu.png?updatedAt=1750673289882";
const close =
  "https://ik.imagekit.io/bqzlidc77g/my%20portfolio/close.png?updatedAt=1750673269591";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-2 z-20 bg-[#050a208e] fixed`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-0"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          {/* Logo from public/assets */}
          <img
            src="/assets/logo.png"
            alt="logo"
            loading="lazy"
            className="w-16 object-contain"
            width={64}
            height={64}
          />
          <p className="text-white text-[17px] font-semibold cursor-pointer">
            <span className="sm:block font-bold">HUSBAN</span>
          </p>
        </Link>

        {/* Desktop nav */}
        <ul className="list-none hidden text-nowrap sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-[#FF9900]"
              } hover:text-[#ffffffac] text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile menu icon */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            loading="lazy"
            className="w-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
            width={28}
            height={28}
          />
        </div>
      </div>

      {/* Mobile menu drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 sm:w-1/2 bg-[#050816] shadow-lg transition-transform duration-300 z-40 ${
          toggle ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-8 p-6">
          <div className="w-full flex items-center justify-end">
            <img
              src={close}
              alt="close"
              loading="lazy"
              className="w-[24px] h-[24px] object-contain cursor-pointer"
              onClick={() => setToggle(false)}
              width={24}
              height={24}
            />
          </div>

          {navLinks.map((link) => (
            <p
              key={link.id}
              onClick={() => {
                setActive(link.title);
                setToggle(false);
              }}
              className="text-[22px] mt-2 text-[#ffffffb0] hover:text-white font-medium cursor-pointer transition-all"
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </p>
          ))}
        </div>
      </div>

      {/* Overlay */}
      {toggle && (
        <div
          onClick={() => setToggle(false)}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30"
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
