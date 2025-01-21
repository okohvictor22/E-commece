import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import './index.css';
import Home from "@/pages/Home";
import SignIn from "@/pages/SignIn";
import Cart from "@/component/Cart";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/sign-in"
          element={
            <Layout>
              < SignIn/>
            </Layout>
          }
        />
        <Route
          path="/"
          element={
            <Layout>
              <Home />
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
      
      </Routes>
    </Router>
  );
}

export default App;
