import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/home/Home.jsx";
import Blogs from "./pages/blogs/Blogs.jsx";
import Login from "./components/Login.jsx";
import Pricing from "./pages/home/Pricing.jsx";
import Services from "./pages/home/Services.jsx";
import Products from "./pages/home/Products.jsx";
import ProductsDetails from "./components/ProductsDetails.jsx";
import Aboutus from "./pages/footer/Aboutus.jsx";
import Contact from "./pages/footer/Contact.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Register from "./components/Register.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      {/* main layout */}
      <Route element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductsDetails />} />

        {/* footer layout */}
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contact" element={<Contact />} />
        {/* Error page */}
        <Route path="*" element={<ErrorPage />} />
        {/* Authentication */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
