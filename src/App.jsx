import "./App.css";
import Home from "./Pages/Home";

import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import { Route, Routes } from "react-router-dom";
import Layout from "./Pages/Layout";
import Users from "./Pages/Users";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/users" element={<Users />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
