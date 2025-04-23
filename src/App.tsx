import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { useState, useEffect } from "react";
import Layout from "./pages/layout";
import Dashboard from "@/pages/Dashboard";
import SignIn from "@/pages/SignIn";
import Products from "./component/Product";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminProducts from "./pages/AdminProducts";
import { IProduct } from "./interface";

function App() {
  const [isAdmin] = useState<boolean>(
    localStorage.getItem("isAdmin") === "true"
  );

  useEffect(() => {
    localStorage.setItem("isAdmin", String(isAdmin));
  }, [isAdmin]);

  return (
    <><Router>
      <Routes>

        <Route
          path="/"
          element={
          <Layout>
            <Dashboard />
          </Layout>} />

          <Route
            path="/signIn"
            element={
            <Layout>
              <SignIn />
            </Layout>} />

          <Route
          path="/products"
          element={
          <Layout>
            <Products />
          </Layout>} />

          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/AdminLogin" element={<AdminLogin />} />
          <Route path="/AdminDashboard" element={<AdminDashboard />} />

            <Route
              path="/adminproducts"
              element={isAdmin ? <AdminProducts products={[]} setProducts={function (_updatedProducts: IProduct[]): void {
                throw new Error("Function not implemented.");
              } } />
                : (
                  <p></p>
                )} />

      </Routes>
    </Router></>
  );
}

export default App;
