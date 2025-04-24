import React, { useEffect, useState } from "react";
import { useParams, useLocation, Link } from "react-router";

const ProductsDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const [product, setProduct] = useState(location.state || null);
  const [isLoading, setIsLoading] = useState(!location.state);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!product) {
      setIsLoading(true);
      fetch(`https://dummyjson.com/products/${id}`)
        .then((res) => {
          if (!res.ok) throw new Error("Failed to load product details");
          return res.json();
        })
        .then((data) => setProduct(data))
        .catch((err) => setError(err.message))
        .finally(() => setIsLoading(false));
    }
  }, [id, product]);

  return (
    <div className="max-w-4xl mx-auto px-5 py-10">
      <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">
        Product Details
      </h2>
      {isLoading && <p className="text-center py-10">Product is loading...</p>}
      {error && <p className="text-center text-red-500">error</p>}
      {!isLoading && !error && (
        <article className="bg-white p-6 rounded-lg shadow-md">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-fullobject-cover rounded mb-4"
          />
          <h3 className="text-2xl font-bold mb-4 text-gray-800">
            {product.title}
          </h3>
          <p className="text-gray-700 mb-2">{product.category}</p>
          <p className="text-gray-700 mb-2">{product.description}</p>
          <p className="text-blue-600 text-xl font-semibold mb-2">
            ${product.price}
          </p>
          <p className="text-yellow-500 font-medium">⭐ {product.rating}</p>
          <Link
            to="/products"
            className="inline-block mt-4 text-sm text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-full transition"
          >
            Continue Shopping
          </Link>
        </article>
      )}
    </div>
  );
};

export default ProductsDetails;
