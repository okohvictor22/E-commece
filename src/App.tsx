import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import './index.css';
import Dashboard from "@/pages/Dashboard";
import SignIn from "@/pages/SignIn";
import Products from "./component/Product";
import checkCart from "./component/Cart";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
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
          path="/products"
          element={
            <Layout>
              <Products/>
            </Layout>
          }
        />
        <Route
          path="/checkCart"
          element={
            <Layout>
              <checkCart/>
            </Layout>
          }
        />
      
      </Routes>
    </Router>
  );
}

export default App;
