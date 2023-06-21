import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Store from "./pages/Store";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Missing from "./pages/Missing";
import Navbar from "./components/navbar/Navbar";
import { useState } from "react";
import Register from "./pages/Register";
import { CartStateType } from "./context/CartProvider";

export interface UserType {
  userName: string;
  email: string;
  password: string;
  carts: CartStateType[];
  _id: string;
}

function App() {
  const [viewCart, setViewCart] = useState(false);


  return (
    <div className="App">
      <Navbar viewCart={viewCart} setViewCart={setViewCart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/store" element={<Store viewCart={viewCart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Missing />} />
      </Routes>
    </div>
  );
}

export default App;
