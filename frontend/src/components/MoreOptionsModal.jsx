import React, { useState, useRef, useEffect } from 'react';
import { forwardRef } from "react";
import { createPortal } from "react-dom";
import { NavLink, useNavigate } from 'react-router-dom';
const MoreOptionsModal = forwardRef(function MoreOptionsModal({}, ref) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  function handleLogout() {
    setIsLoading(true);
    localStorage.removeItem('token'); // Remove the token from localStorage
    setTimeout(() => {
      setIsLoading(false);
      navigate('/'); // Change '/dashboard' to your desired route
    }, 100);
  }
  const loaderStyle = {
    border: '4px solid #f3f3f3',
    borderTop: '4px solid #3498db',
    borderRadius: '50%',
    width: '20px',
    height: '20px',
    animation: 'spin 1s linear infinite'
  };
  return createPortal(
    <dialog
      ref={ref}
      className="w-32 h-8 mr-10 top-16 left-auto shadow-md shadow-black rounded-lg bg-gray-800"
    >
      <div className="flex flex-col h-full justify-center">
        <button className="font-bold text-lg text-white" onClick={handleLogout}>
          {isLoading ? <div style={loaderStyle}></div> : 'Logout'}
        </button>
      </div>
    </dialog>,
    document.getElementById("modal")
  );
});

export default MoreOptionsModal;
