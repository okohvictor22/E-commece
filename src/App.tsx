import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import './index.css';
import HomePage from "./pages/HomePage";
import Product from "./pages/Product";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/Product"
          element={
            <Layout>
              <Product />
            </Layout>
          }
        />
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
