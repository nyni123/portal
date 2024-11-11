import { useState } from "react";
import Pulses from "./Pulses";
import Activity from "./Activity";
import SuggestedEdits from "./SuggestedEdits";

const buttonBaseClasses =
  "px-4 py-2 font-semibold rounded-md transition duration-200 text-xs sm:text-xs lg:text-sm 2xl:text-md";
const selectedButtonClass = "bg-blue-500 text-white shadow";

export default function Taskbar() {
  const [selectedButton, setSelectedButton] = useState("Pulses");

  function handleSelectedButton(buttonName) {
    setSelectedButton(buttonName);
  }

  return (
    <div className="w-full">
      <nav className="border border-gray-300 flex mt-4 rounded-md bg-gray-50 shadow-sm p-1 gap-2">
        <button
          className={`${buttonBaseClasses} ${
            selectedButton === "Pulses" && selectedButtonClass
          }`}
          onClick={() => handleSelectedButton("Pulses")}
        >
          Pulses
        </button>
        <button
          className={`${buttonBaseClasses} ${
            selectedButton === "Activity" && selectedButtonClass
          }`}
          onClick={() => handleSelectedButton("Activity")}
        >
          Activity
        </button>
        <button
          className={`${buttonBaseClasses} ${
            selectedButton === "Edits" && selectedButtonClass
          }`}
          onClick={() => handleSelectedButton("Edits")}
        >
          Suggested Edits (0)
        </button>
      </nav>

      <div className="mt-4">
        {selectedButton === "Pulses" && <Pulses />}
        {selectedButton === "Activity" && <Activity />}
        {selectedButton === "Edits" && <SuggestedEdits />}
      </div>
    </div>
  );
}
