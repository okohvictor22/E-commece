import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const adminEmail = "admin@example.com";
    const adminPassword = "admin123"; 

    if (email === adminEmail && password === adminPassword) {
      localStorage.setItem("isAdminLoggedIn", "true"); 
      toast.success("Login Successful!");
      navigate("/admin");
    } else {
      toast.error("Invalid credentials!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
      <input
        type="email"
        placeholder="Email"
        className="border p-2 mb-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="border p-2 mb-2"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <a href="AdminDashboard"> 
        <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2">
        Login
      </button>
      </a>
     
    </div>
  );
};

export default AdminLogin;
