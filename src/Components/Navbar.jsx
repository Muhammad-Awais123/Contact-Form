import React from "react";
import { Link } from "react-router-dom";
import '../App.css'

const Navbar = () => {
  return (
<>

    <nav className="navbar flex items-center text-purple-600 justify-around bg-white h-[8vh]">
      <div className="text-[2rem] font-bold">My Website</div>
      <ul className="flex gap-[20px] text-[1.2rem] ">
        <li className="hover:underline text-2xl hover:font-bold "><Link to="/">Home</Link></li>
        <li className="hover:underline text-2xl hover:font-bold "  ><Link to="/about">About</Link></li>
        <li className="hover:underline text-2xl hover:font-bold "  ><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  </>
  );
};

export default Navbar;
