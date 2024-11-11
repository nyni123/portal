import { useEffect, useRef } from "react";
import MoreOptionsModal from "./MoreOptionsModal";
import NavItems from "./NavItems";
import Button from "./Button";

export default function MenuBar({user}) {
  const moreOptionsRef = useRef();

  function handleOpenOptions() {
    // moreOptionsRef.current.show();
    if (moreOptionsRef.current) {
      if (moreOptionsRef.current.open) {
        moreOptionsRef.current.close();
      } else {
        moreOptionsRef.current.show();
      }
    }
  }

  // function handleCloseOptions() {
  //   if (moreOptionsRef.current && moreOptionsRef.current.open) {
  //     moreOptionsRef.current.close();
  //   }
  // }

  useEffect(() => {
    function handleClickOutsideMoreOptions(event) {
      if (
        moreOptionsRef.current &&
        !moreOptionsRef.current.contains(event.target)
      ) {
        // handleCloseOptions();
        
      }
    }

    document.addEventListener("mousedown", handleClickOutsideMoreOptions);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideMoreOptions);
    };
  }, []);

  return (
    <div className="flex justify-between items-center p-3 bg-[#1f1f2e] text-white">
      <div className="flex items-center">
        <span className="2xl:font-bold xl:font-semibold font-normal lg:font-normal mr-2">
        {user ? `${user.companyName}` : "LevelBlue/Labs"}
        </span>
        <nav className="flex gap-4 xl:gap-1 lg:gap-1">
          <NavItems link="#dashboard">Dashboard</NavItems>
          <NavItems link="#https://app.customgpt.ai/projects/49167/ask-me-anything?embed=1">
            Security Questionair
          </NavItems>
          <NavItems link="#policies">Policies</NavItems>
          <NavItems link="#training">Training</NavItems>
          <NavItems link="#phishing-simulation">Phishing Simulation</NavItems>
          <NavItems link="#business-risk-report">Business Risk Report</NavItems>
          <NavItems link="#vulnerability-scan">Vulnerablity Scan</NavItems>
        </nav>
      </div>
      <div className="flex items-center gap-3">
        <select className="p-1 text-xs bg-[#33334d] text-white border-none rounded">
          <option>All</option>
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
        <input
          type="text"
          placeholder="Search OTX"
          className="p-1 text-xs rounded w-96 border border-gray-600 bg-[#33334d] text-white"
        />
        <span className="text-xs font-normal mr-2"> {user ? `${user.firstName} ${user.lastName}` : "STATUSONE"}</span>
        <Button onClick={handleOpenOptions}>
          <span className="text-sm ml-1 cursor-pointer">⚙️</span>
        </Button>
        <Button>
          <span className="text-sm ml-1 cursor-pointer">❓</span>
        </Button>
        <MoreOptionsModal ref={moreOptionsRef} />
      </div>
    </div>
  );
}
