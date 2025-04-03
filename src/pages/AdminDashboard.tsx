import ThirdDrop from "@/component/thirdDrop";
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
    
      >
        <ThirdDrop/>
      </button>
      </a>

     
    </div>
  );
};

export default AdminDashboard;