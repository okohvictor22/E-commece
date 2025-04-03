import { useState } from "react";

const ThirdDrop = () => {
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
            href="/"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Home
          </a>
          <a
            href="adminproducts"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
           Admin Products
          </a>
        </div>
      )}
    </div>
  );
};

export default ThirdDrop;
