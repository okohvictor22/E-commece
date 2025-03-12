import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import './index.css';
import Dashboard from "@/pages/Dashboard";
import SignIn from "@/pages/SignIn";
import Products from "./component/Product";
import AdminSign from "./pages/admin-sign";


function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              < Dashboard/>
            </Layout>
          }
        />
        <Route
          path="/signIn"
          element={
            <Layout>
              < SignIn/>
            </Layout>
          }
        />
       
        <Route
          path="/Products"
          element={
            <Layout>
              <Products/>
            </Layout>
          }
        />
        <Route
          path="/AdminSign"
          element={
            <Layout>
              <AdminSign/>
            </Layout>
          }
        />
        
       
      
      </Routes>
    </Router>
  );
}

export default App;
