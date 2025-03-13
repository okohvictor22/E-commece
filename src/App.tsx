import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Layout from "./pages/layout";
import Dashboard from "@/pages/Dashboard";
import SignIn from "@/pages/SignIn";
import Products from "./component/Product";
import AdminSign from "./pages/AdminSign";
import AdminDashboard from "./pages/AdminDashboard";
import AdminProducts from "./pages/AdminProducts"; // Import the component
import { IProduct } from "./interface";

function App() {
  const [isAdmin, setIsAdmin] = useState<boolean>(
    localStorage.getItem("isAdmin") === "true"
  );

  useEffect(() => {
    localStorage.setItem("isAdmin", String(isAdmin));
  }, [isAdmin]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path="/signIn"
          element={
            <Layout>
              <SignIn />
            </Layout>
          }
        />
        <Route
          path="/products"
          element={
            <Layout>
              <Products />
            </Layout>
          }
        />
        <Route
          path="/AdminSign"
          element={<AdminSign setIsAdmin={setIsAdmin} />}
        />

        {/* Admin Routes */}
        <Route
          path="/admin"
          element={
            isAdmin ? <AdminDashboard setIsAdmin={function (_isAdmin: boolean): void {
              throw new Error("Function not implemented.");
            } } /> : <Navigate to="/AdminSign" />
          }
        />

        <Route
          path="/admin/products"
          element={
            isAdmin ? <AdminProducts products={[]} setProducts={function (_updatedProducts: IProduct[]): void {
              throw new Error("Function not implemented.");
            } }/>
        :(
          <p></p>
        )}
        />
      </Routes>
    </Router>
  );
}

export default App;
