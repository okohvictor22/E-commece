import { Link } from "react-router-dom";
interface AdminDashboardProps {
  setIsAdmin: (isAdmin: boolean) => void;
}


const AdminDashboard:React.FC<AdminDashboardProps> = ({ setIsAdmin }) => {
  const handleLogout = () => {
    setIsAdmin(false);
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      
      
      <Link to="/admin/products" className="bg-blue-500 text-white px-4 py-2 block mt-4">
        Manage Products
      </Link>
        <a href="AdminSign">
          <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 mt-4">
            Logout
          </button>
      </a>
    </div>
  );
};

export default AdminDashboard;
interface AdminDashboardProps {
  setIsAdmin: (isAdmin: boolean) => void;
}
