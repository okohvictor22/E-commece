import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  });

  const [showWelcome, setShowWelcome] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    setShowWelcome(true);

    // Simulate delay then navigate
    setTimeout(() => {
      navigate("/products"); // make sure your route is set up
    }, 2500);
  };

  return (
    <main className="bg-lightblue min-h-screen p-6">
      <div className="flex flex-col items-center">
        {/* Header */}
        <div className="flex items-center gap-6 mb-8">
          <img src="/IMG-20241115-WA0014.jpg" alt="Logo" className="w-24 h-24 object-cover rounded-full shadow-md" />
          <p className="text-black font-bold text-3xl text-center">Victor's E-commerce <br /> Stores</p>
        </div>

        {/* Sign Up Form */}
        <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-lg">
          <h1 className="text-3xl text-brown-700 font-semibold text-center mb-4">Sign up</h1>
          <p className="text-center text-gray-600 mb-6">Fill the form to register your account</p>

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4">
              <input type="text" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="border p-2 rounded-md" />
              <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" className="border p-2 rounded-md" />
              <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" className="border p-2 rounded-md" />
              <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Re-enter Password" className="border p-2 rounded-md" />
            </div>

            <div className="mt-6 text-center">
              <button type="submit" className="text-xl bg-black text-white px-6 py-2 rounded-xl hover:bg-gray-700 transition duration-300 w-full">
                Sign up
              </button>
            </div>
          </form>
        </div>

        {/* Welcome Message Animation */}
        {showWelcome && (
          <div className="mt-6 bg-green-100 border border-green-400 text-green-800 px-4 py-3 rounded-lg shadow-md transition-opacity duration-700 ease-in-out animate-fade-in">
            Welcome, <span className="font-bold">{formData.username}</span>! 🎉
          </div>
        )}

        <p className="mt-4 font-semibold text-center text-sm text-gray-800">
          For more enquiries call: <span className="text-blue-700">08039899182</span>
        </p>
      </div>
    </main>
  );
};

export default SignIn;
