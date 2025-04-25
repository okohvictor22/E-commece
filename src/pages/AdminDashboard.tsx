import ThirdDrop from "@/component/ThirdDrop";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAdminLoggedIn = localStorage.getItem("isAdminLoggedIn");
    if (!isAdminLoggedIn) {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isAdminLoggedIn");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-xl text-gray-800 font-semibold mb-6">
        Welcome to the Admin Dashboard! Admins can perform tasks to manage and enhance the website, making it more attractive and user-friendly. Only admins can access these features.
      </h2>

      <div className="grid grid-cols-[1fr_10fr] gap-6 mt-8 items-center">
        <img src="/star.png" alt="star icon" className="w-12 h-12 ml-4" />
        <div>
          <p className="text-lg text-gray-700">
            <span className="font-bold text-2xl mb-2">Add Product:</span><br />
            Admins can add new products to the website easily with this feature.
          </p>
        </div>
      </div>


      <div className="grid grid-cols-[1fr_10fr] gap-6 mt-8 items-center">
        <img src="/star.png" alt="star icon" className="w-12 h-12 ml-4" />
        <div>
          <p className="text-lg text-gray-700">
            <span className="font-bold text-2xl mb-2">Edit Product:</span><br />
            Edit product details to correct errors or update information quickly.
          </p>
        </div>
      </div>

    
      <div className="grid grid-cols-[1fr_10fr] gap-6 mt-8 items-center">
        <img src="/star.png" alt="star icon" className="w-12 h-12 ml-4" />
        <div>
          <p className="text-lg text-gray-700">
            <span className="font-bold text-2xl mb-2">Delete Product:</span><br />
            Remove outdated or unwanted products from the website with ease.
          </p>
        </div>
      </div>

      <p className="mt-6 text-base text-gray-600 ml-4">
        The menu button leads you to the Admin Product section. Good luck!
      </p>

      <button
        onClick={handleLogout}
        className="mt-6 px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-700 transition duration-300 w-full sm:w-auto mx-auto block"
      >
        <ThirdDrop />
      </button>
    </div>
  );
};

export default AdminDashboard;
