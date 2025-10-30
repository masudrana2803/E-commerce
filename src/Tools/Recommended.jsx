// 📁 src/Tools/Recommended.jsx
import React from "react";
import { Link } from "react-router";
import { BiShoppingBag } from "react-icons/bi";
import { FaStar } from "react-icons/fa";

const Recommended = ({ items = [], category }) => {
  const filtered = category ? items.filter(p => p.category === category) : items;

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {filtered.map((p) => (
        <div
          key={p.id}
          className="bg-white shadow-md rounded-xl p-4 w-[220px] hover:shadow-lg transition-all duration-300"
        >
          <img
            src={p.thumbnail || p.image}
            alt={p.title || p.name}
            className="w-full h-40 object-cover rounded-md"
          />
          <h3 className="mt-2 text-lg font-semibold">
            <Link to={`/product/${p.id}`} className="hover:underline">
              {p.title || p.name}
            </Link>
          </h3>
          <p className="text-gray-500 text-sm">${p.price}</p>
          <div className="flex items-center gap-1 text-yellow-500">
            <FaStar /> <span className="text-sm">{p.rating}</span>
          </div>

          {/* <Link
            to={`/product/${p.id}`}
            className="mt-3 inline-flex items-center gap-2 bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 transition-all"
          >
            <BiShoppingBag /> View Details
          </Link> */}
        </div>
      ))}
    </div>
  );
};

export default Recommended;
