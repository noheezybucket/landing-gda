import React from "react";
import logo from "../assets/logo-gda.svg";

const Header = () => {
  return (
    <header className="flex justify-between pb-32 text-2xl pt-10 px-10">
      <nav className="flex items-center">
        <div className="mr-10">
          <img src={logo} alt="gda" className="w-10" />
        </div>
        <ul className="font-bold flex space-x-5 ">
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
      <div className="flex items-center">
        <button className="bg-primary text-white font-bold px-5 py-3 rounded-xl hover:bg-secondary duration-200">
          CONTACTEZ-NOUS
        </button>
      </div>
    </header>
  );
};

export default Header;
