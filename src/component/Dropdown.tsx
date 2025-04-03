import { useState } from "react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none"
      >
        Menu
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md">
          <a
            href="SignIn"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
           User Mode
          </a>
          <a
            href="AdminLogin"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
           Admin Mode
          </a>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
