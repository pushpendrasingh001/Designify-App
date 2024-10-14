import React, { useEffect, useState } from "react";

function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div>
        <div
          className={`navbar bg-transparent text-white fixed top-0 left-0 right-0 z-50 ${
            sticky
              ? "sticky-navbar shadow-md bg-white navtextcolor duration-300 translate-all ease-in-out"
              : ""
          }`}
        >
          <div className="navbar-start ">
            <img className="w-[40px] h-[40px] ml-2" src="https://www.designify.com/logo_color.svg" alt="logo" /> 
          <p className="poppins-semibold text-3xl ml-3"> designify</p>
          </div>
          <div className="navbar-center  lg:ml-[-20%] hidden lg:flex">
            <ul className="menu menu-horizontal px-1  text-lg poppins-medium">
              <li>
                <a href="/">Get Started</a>
              </li>
              <li>
                <a href="/Gallery">Designs</a>
              </li>
              <li>
                <a href="/Achievement">pricing</a>
              </li>
              <li>
                <a href="/About">API</a>
              </li>
              <li>
                <a href="/Contact">Batch Editor</a>
              </li>
               </ul>
          <div>
            
            
          </div>
          </div>
         
                
                
            
          <div className="navbar-end flex items-center space-x-4">
            <button
              className="btn btn-ghost lg:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
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
                  d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-16 6h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className=" overflow-x-hidden   mt-[30%]">
            <div className="bg-white h-screen p-8 rounded-lg shadow-lg">
              <ul className="text-center font- text-xl font-semibold">
                <li className="py-2">
                  <a href="/">Get Started</a>
                </li>
                <li className="py-2">
                  <a href="/Gallery">Designs</a>
                </li>
                <li className="py-2">
                  <a href="/Achievement">Pricing</a>
                </li>
                <li className="py-2">
                  <a href="/About">API</a>
                </li>
                <li className="py-2">
                  <a href="/Contact">Batch Editor</a>
                </li>
                <li className="py-2">
                  <a className="btn border-2 mt-2">Login/Sign Up</a>
                </li>
              </ul>
            </div>
            <button
              className="absolute top-4 right-4 text-white"
              onClick={() => setMenuOpen(false)}
            >
           
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
