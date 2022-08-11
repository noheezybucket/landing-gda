import React from "react";
import logo from "../assets/Logo.png";

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row md:space-between pb-5 md:pb-20 md:text-2xl text-md pt-10 md:px-10 px-5">
      <nav className="flex flex-col md:flex-row mb-3">
        <div className="mr-10">
          <img src={logo} alt="gda" className="w-10 mb-3" />
        </div>
        <ul className="font-bold flex flex-col md:flex-row md:gap-x-7 leading-normal">
          <li>
            <a href="##" className="hover:text-secondary duration-150">
              ACCUEIL
            </a>
          </li>
          <li>
            <a href="##" className="hover:text-secondary">
              AVANTAGES
            </a>
          </li>
          <li>
            <a href="##" className="hover:text-secondary">
              CE QU'ILS PENSENT
            </a>
          </li>
          <li>
            <a href="##" className="hover:text-secondary">
              AUTRES SERVICES
            </a>
          </li>
        </ul>
      </nav>
      <div className="flex items-center self-end">
        <button className="bg-primary text-white font-bold px-5 py-3 rounded-xl hover:bg-secondary duration-200 md:text-2xl hidden md:block">
          CONTACTEZ-NOUS
        </button>
      </div>
    </header>
  );
};

export default Header;
