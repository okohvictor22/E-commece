import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import './index.css';
import Dashboard from "@/pages/Dashboard";
import SignIn from "@/pages/SignIn";
import Cart from "@/component/Cart";
import Products from "./component/Product";


function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/SignIn"
          element={
            <Layout>
              < SignIn/>
            </Layout>
          }
        />
        <Route
          path="/Dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path="/cart"
          element={
            <Layout>
              <Cart/>
            </Layout>
          }
        />
        <Route
          path="/products"
          element={
            <Layout>
              <Products/>
            </Layout>
          }
        />
      
      </Routes>
    </Router>
  );
}

export default App;
