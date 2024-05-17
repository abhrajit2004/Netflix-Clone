import logo from "../assets/logo.svg"
import { FaSearch } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaRegBell } from "react-icons/fa";
import profile from "../assets/profile.png"
import { useEffect, useRef } from "react";
import { logout } from "../firebase";

const Navbar = () => {

  const navRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        if (window.scrollY >= 80) {
          navRef.current.classList.add('bg-black');
        } else {
          navRef.current.classList.remove('bg-black');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={navRef} className="navbar flex justify-around items-center sticky top-0 z-10">
        <div className="navlogo">
          <img className="w-24" src={logo} alt="" />
        </div>
      <div className="links flex justify-center items-center m-4 gap-6 text-white">
        <ul className="flex gap-5">
          <li className="cursor-pointer transition-all hover:font-bold">Home</li>
          <li className="cursor-pointer transition-all hover:font-bold">Tv Shows</li>
          <li className="cursor-pointer transition-all hover:font-bold">Movies</li>
          <li className="cursor-pointer transition-all hover:font-bold">New & Popular</li>
          <li className="cursor-pointer transition-all hover:font-bold">My List</li>
          <li className="cursor-pointer transition-all hover:font-bold">Browse by Languages</li>
        </ul>
      </div>
      <div className="searchbar flex justify-center items-center m-4 gap-4">
         {/* <input className="px-4 py-2 text-black rounded-md" type="text" placeholder="Search Here" /> */}
         <FaSearch className="text-white cursor-pointer" />
         <span className="text-white">Children</span>
         <FaRegBell className="text-white cursor-pointer"  />
         <img src={profile} alt="" />
         <IoMdArrowDropdown  className="text-white cursor-pointer"/>
         <p onClick={()=>{logout()}} className="text-white cursor-pointer transition-all hover:font-bold">Sign Out</p>
      </div>
    </div>
  )
}

export default Navbar
