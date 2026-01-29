import { useState } from "react";

const Dropdown = ({ title = "Select", options = [], onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(title);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
    if (onSelect) onSelect(option); // send to parent
  };

  return (
    <div className="relative w-64">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-white/30 backdrop-blur-md text-gray-800 font-semibold py-2 px-4 rounded-lg shadow-md flex justify-between items-center"
      >
        {selected}
        <span className={`ml-2 transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}>▼</span>
      </button>

      {isOpen && (
        <ul className="absolute w-full mt-2 bg-white/30 backdrop-blur-md rounded-lg border border-white/20 shadow-lg overflow-hidden">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleSelect(option)}
              className="px-4 py-2 hover:bg-white/40 cursor-pointer transition"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};


export default Dropdown;