import React, { useEffect, useRef, useState } from "react";

function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showUpload, setShowUpload] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown
  const dropdownRef = useRef(null); // Reference for detecting outside clicks

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollPosition > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }

      if (scrollPosition > windowHeight * 0.25) {
        setShowUpload(true);
      } else {
        setShowUpload(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle Dropdown
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Detect click outside dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
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
          <div className="navbar-start flex relative ">
            <img
              className="w-[40px] h-[40px] ml-2"
              src="https://www.designify.com/logo_color.svg"
              alt="logo"
            />
            <p className="poppins-semibold text-3xl ml-3"> designify</p>
          </div>
          <div className="navbar-center  lg:ml-[-20%] hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-lg poppins-medium">
              {/* Get Started with dropdown */}
              <li className="relative bg-transparent">
                <button
                  className="flex items-center"
                  onClick={toggleDropdown}
                >
                  Get Started
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.292 7.292a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                
                {dropdownOpen && (
                  <div
                    ref={dropdownRef}
                    className="absolute  w-[500px] bg-white hover:bg-white rounded-md  mt-10 z-50  p-4"
                    
                  >
                    <div className="grid grid-cols-3  text-sm text-[#454545]">
                      <div className="">
                        <h3 className="font-semibold text-sm text-gray-500 ">SOLUTIONS FOR</h3>
                        <ul className="ml-[-20px]">
                          <li><a href="/ecommerce">E-Commerce</a></li>
                          <li><a href="/car-dealership">Car Dealership</a></li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm text-gray-500">WORKFLOWS</h3>
                        <ul className="ml-[-20px]">
                          <li><a href="/batch-editing">Batch Editing</a></li>
                          <li><a href="/api-integration">API Integration</a></li>
                          <li><a href="/custom-design">Customize Design</a></li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm text-gray-500">FEATURES</h3>
                        <ul className="ml-[-20px]">
                          <li><a href="/3d-shadows">3D Shadows</a></li>
                          <li><a href="/background-removal">Background Removal</a></li>
                          <li><a href="/auto-enhance">Auto Enhance</a></li>
                          <li><a href="/fix-pixelation">Fix Pixelation</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </li>
              <li>
                <a href="/Gallery">Designs</a>
              </li>
              <li>
                <a href="/Achievement">Pricing</a>
              </li>
              <li>
                <a href="/About">API</a>
              </li>
              <li>
                <a href="/Contact">Batch Editor</a>
              </li>
            </ul>
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
                  d={
                    menuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16m-16 6h16"
                  }
                />
              </svg>
            </button>

            {showUpload && (
              <button className="ml-4 bg-blue-500 text-white py-2 px-4 rounded-lg border-2 hidden lg:inline-block">
                Upload Image
              </button>
            )}
            <button className="ml-4 bg-[#F9FAFA] text-[#454545] border-2 py-2 px-4 rounded-lg hidden lg:inline-block">
              Signin/Sign Up
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="overflow-x-hidden mt-[30%]">
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
                <button className="ml-4 bg-blue-500 text-white py-2 px-4 rounded-lg ">
                Upload Image
              </button>
                </li>
                <li className="py-4">
                  <a className="ml-4 border-2 bg-[#F9FAFA]  py-2 px-4 rounded-lg">Login/Sign Up</a>
                </li>
           
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
