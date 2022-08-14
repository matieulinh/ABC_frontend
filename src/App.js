import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Cart from "./pages/Cart";
import Product from "./pages/Product";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/catalog/:slug" element={<Product />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/user" element={<Login />} />
          {/* </Route> */}
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
