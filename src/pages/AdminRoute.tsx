import { Navigate } from "react-router-dom";

interface AdminRouteProps {
  children: React.ReactNode;
  isAdmin: boolean;
}

const AdminRoute: React.FC<AdminRouteProps> = ({ children, isAdmin }) => {
  return isAdmin ? children : <Navigate to="/AdminSign" replace />;
};

export default AdminRoute;
