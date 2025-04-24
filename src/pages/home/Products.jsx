import React, { useEffect, useState } from "react";
import HeadingSection from "../../components/HeadingSection";
import { Link, useLocation } from "react-router";

const Products = () => {
  const { pathname } = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);

  const fetchData = () => {
    setIsLoading(true);
    setError(null);
    fetch("https://dummyjson.com/products/")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Data could not be fetched");
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const isHomePage = pathname === "/";
  const visibleProducts = isHomePage ? products.slice(0, 6) : products;

  return (
    <div className="max-w-screen-2xl container bg-gradient-to-br from-blue-200 via-white to-slate-100 mx-auto py-20 px-5">
      <HeadingSection
        heading="Explore our Products tailored to meet your essential needs."
        subheading="Our Products"
        description=""
      />

      {isLoading && (
        <p className="text-center text-blue-600">Loading products...</p>
      )}
      {error && <p className="text-center text-red-600">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {!isLoading &&
          !error &&
          visibleProducts.map((product) => (
            <div
              key={product.id}
              className="group border rounded-xl p-5 shadow-md bg-white hover:-translate-y-2 transition-all duration-300"
            >
              <div>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full object-cover rounded-md transform group-hover:scale-105 transition duration-300"
                />
              </div>
              <h2 className="text-lg font-bold mt-4 mb-1 text-gray-800 group-hover:text-blue-600 transition">
                {product.title}
              </h2>
              <p className="text-sm text-gray-500 mb-1 line-clamp-2">
                {product.description && product.description.substring(0, 100)}
                ...
              </p>
              <div className="flex items-center justify-between mt-3">
                <span className="text-blue-600 font-bold text-lg">
                  ${product.price}
                </span>
                <span className="text-yellow-500 font-medium text-sm">
                  ⭐ {product.rating}
                </span>
              </div>
              <Link
                to={`/products/${product.id}`}
                state={product}
                className="inline-block mt-4 text-sm text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-full transition"
              >
                Show Details
              </Link>
            </div>
          ))}
      </div>

      {isHomePage && (
        <div className="text-center mt-10">
          <Link
            to="/products"
            className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-md font-medium hover:from-indigo-500 hover:to-blue-600 transition duration-300"
          >
            See All Products
          </Link>
        </div>
      )}
    </div>
  );
};

export default Products;
