import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAdminLoggedIn = localStorage.getItem("isAdminLoggedIn");
    if (!isAdminLoggedIn) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <h2>Welcome to Admin Dashboard</h2>

      <a href="adminproducts">
         <button
        onClick={() => {
          localStorage.removeItem("isAdminLoggedIn");
          navigate("/login");
        }}
        className="bg-red-500 text-white px-4 py-2"
      >
        AdminProduct
      </button>
      </a>

     
    </div>
  );
};

export default AdminDashboard;