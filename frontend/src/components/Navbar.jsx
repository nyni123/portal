import React, { useState, useRef, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from '../assets/darknet.png';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import SignUp from "./auth/SignUp";
import SignIn from "./auth/SignIn";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true); // State to toggle between Sign Up and Sign In
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State for login status
  const [isLoading, setIsLoading] = useState(false);
  const modalRef = useRef(null);
  const navigate = useNavigate();

  const handleNav = () => {
    setNav(!nav);
  };

  const toggleModal = () => {
    setIsSignUp(true);
    setIsModalOpen(!isModalOpen);
  };

  const switchForm = () => {
    setIsSignUp(!isSignUp); // Toggle between Sign Up and Sign In forms
  };

  const handleLogout = () => {
    // Handle logout logic (e.g., remove token, reset state)
    setIsLoading(true);
    localStorage.removeItem('token'); // Remove the token from localStorage
    setIsLoggedIn(false); // Update login state
    setTimeout(() => {
      setIsLoading(false);
      navigate('/'); // Change '/dashboard' to your desired route
    }, 1000);
  };
  
  useEffect(() => {
    // Check if the token exists in localStorage and set the login state
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []); // This runs only once when the component mounts

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModalOpen]);

  const loaderStyle = {
    border: '4px solid #f3f3f3',
    borderTop: '4px solid #3498db',
    borderRadius: '50%',
    width: '20px',
    height: '20px',
    animation: 'spin 1s linear infinite'
  };

  return (
    <div className='bg-gray-100 pe-10 md:pe-0 flex justify-between items-center h-24 mx-auto text-gray-900'>
      <div className='w-full -z-50 pattern-bg h-full' />
      <div>
        <NavLink to="/" exact="true">
          <img alt='logo' className='w-32 md:w-52 logo' src={logo} />
        </NavLink>
      </div>
      <ul className='hidden px-10 items-center md:flex'>
        <li key="homeD" className='p-4'>
          <NavLink
            to="/"
            exact="true"
            className={({ isActive }) =>
              isActive ? 'border-b-2 border-[#00df9a]' : 'hover:border-b-2 hover:border-[#00df9a]'
            }
          >
            Home
          </NavLink>
        </li>
        {isLoggedIn && (
          <li key="dashboard" className='p-4'>
            <NavLink
              to="/dashboard"
              exact="true"
              className={({ isActive }) =>
                isActive ? 'border-b-2 border-[#00df9a]' : 'hover:border-b-2 hover:border-[#00df9a]'
              }
            >
              Dashboard
            </NavLink>
          </li>
        )}
        <li key="vendorD" className='p-4'>
          <NavLink
            to="/vendors"
            className={({ isActive }) =>
              isActive ? 'border-b-2 border-[#00df9a]' : 'hover:border-b-2 hover:border-[#00df9a]'
            }
          >
            Vendors
          </NavLink>
        </li>
        <li key="aptD" className='p-4'>
          <NavLink
            to="/apt"
            className={({ isActive }) =>
              isActive ? 'border-b-2 border-[#00df9a]' : 'hover:border-b-2 hover:border-[#00df9a]'
            }
          >
            APT
          </NavLink>
        </li>
        <li key="newthreat" className='p-4'>
          <NavLink
            to="/newthreat"
            className={({ isActive }) =>
              isActive ? 'border-b-2 border-[#00df9a]' : 'hover:border-b-2 hover:border-[#00df9a]'
            }
          >
            Threat Reports
          </NavLink>
        </li>
        <button 
          onClick={isLoggedIn ? handleLogout : toggleModal} 
          className='bg-[#00df9a] hover:brightness-75 ease-in duration-150 cursor-pointer w-[150px] rounded-md font-medium my-6 mx-auto py-2 text-black flex justify-center items-center'
        >
          {isLoading ? <div style={loaderStyle}></div> : (isLoggedIn ? 'Logout' : 'Login')}
        </button>
      </ul>
      <div onClick={handleNav} className='block z-10 md:hidden'>
        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r z-10 border-r-gray-900 text-gray-100 bg-[#000300] ease-in-out duration-500' : 'ease-in-out fixed left-0 z-10 top-0 h-full duration-500 left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>Darknet Safe</h1>
        <li key="home" className='p-4 border-b border-gray-600'>
          <NavLink
            to="/"
            onClick={() => setNav(false)}
            exact="true"
            className={({ isActive }) =>
              isActive ? 'border-b-2 border-[#00df9a]' : ''
            }
          >
            Home
          </NavLink>
        </li>
        <li key="vendors" className='p-4 border-b border-gray-600'>
          <NavLink
            onClick={() => setNav(false)}
            to="/vendors"
            className={({ isActive }) =>
              isActive ? 'border-b-2 border-[#00df9a]' : ''
            }
          >
            Vendors
          </NavLink>
        </li>
        <li key="apt" className='p-4 border-b border-gray-600'>
          <NavLink
            to="/apt"
            onClick={() => setNav(false)}
            className={({ isActive }) =>
              isActive ? 'border-b-2 border-[#00df9a]' : ''
            }
          >
            APTs
          </NavLink>
        </li>
        <li key="newthreat" className='p-4 border-b border-gray-600'>
          <NavLink
            to="/newthreat"
            onClick={() => setNav(false)}
            className={({ isActive }) =>
              isActive ? 'border-b-2 border-[#00df9a]' : ''
            }
          >
            Threat Report
          </NavLink>
        </li>
        <li key="ai" className='p-4 border-b border-gray-600'>
          <NavLink
            to="/ai"
            onClick={() => setNav(false)}
            className={({ isActive }) =>
              isActive ? 'border-b-2 border-[#00df9a]' : ''
            }
          >
            A I
          </NavLink>
        </li>
      </ul>
      {/* Modal */}
      {isModalOpen && (
         <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-50">
         <div ref={modalRef} className="relative p-4 w-full max-w-md bg-white rounded-lg shadow">
           <button type="button" className="absolute top-3 right-3 text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg w-8 h-8 flex justify-center items-center" onClick={toggleModal}>
             <AiOutlineClose />
             <span className="sr-only">Close modal</span>
           </button>
           <div className="p-4">
             {isSignUp ? 
               <SignUp switchForm={switchForm} /> 
               : 
               <SignIn switchForm={switchForm} setIsLoggedIn={setIsLoggedIn} setIsModalOpen={setIsModalOpen} />} 
             {/* Pass setIsLoggedIn to SignIn */}
           </div>
         </div>
       </div>
      )}
    </div>
  );
};

export default Navbar;
