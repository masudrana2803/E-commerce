import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import RecommendationItem from '../tools/RecommendationItem';

const AllProducts = () => {
  const navigate = useNavigate();

  const handleProductClick = (id, category) => {
    navigate(`/product/${id}`, { state: { category } });
  };

  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [currentChunk, setCurrentChunk] = useState(0); // Track chunk index

  useEffect(() => {
    const skip = (page - 1) * limit;
    fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
        setTotal(data.total);
      })
      .catch(err => console.error('Failed to fetch products:', err));
  }, [page, limit]);

  const totalPages = Math.ceil(total / limit);
  const chunkSize = 5;
  const chunkStart = currentChunk * chunkSize + 1;
  const chunkEnd = Math.min(chunkStart + chunkSize - 1, totalPages);

  const handlePageClick = (clickedPage) => {
    setPage(clickedPage);

    // If clicked page is at the end of current chunk, move to next chunk
    if (clickedPage === chunkEnd && chunkEnd < totalPages) {
      setCurrentChunk(currentChunk + 1);
    }

    // If clicked page is at the start of current chunk, move to previous chunk
    if (clickedPage === chunkStart && currentChunk > 0) {
      setCurrentChunk(currentChunk - 1);
    }
  };

  const handleLimitChange = (newLimit) => {
    setLimit(newLimit);
    setPage(1);
    setCurrentChunk(0);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">All Products</h1>

      {/* Limit Selector */}
      <div className="mb-4 flex items-center gap-2">
        <label htmlFor="limit" className="font-medium">Products per page:</label>
        <select
          id="limit"
          value={limit}
          onChange={e => handleLimitChange(Number(e.target.value))}
          className="border rounded px-2 py-1"
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {products.map(product => (
          <RecommendationItem
            key={product.id}
            product={product}
            productImage={product.thumbnail}
            Description={product.title}
            Category={product.category}
            Rating={product.rating}
            Review={product.stock}
            DiscountPrice={`$${(product.price * (1 - product.discountPercentage / 100)).toFixed(2)}`}
            Price={`$${product.price}`}
            DetailsClick={() => handleProductClick(product.id, product.category)}
          />
        ))}
      </div>

      {/* Page Numbers */}
      <div className="mt-6 flex flex-wrap justify-center gap-2 items-center">
        <span className="font-medium">Page:</span>

        {/* First Page */}
        {chunkStart > 1 && (
          <>
            <button
              onClick={() => {
                setPage(1);
                setCurrentChunk(0);
              }}
              className={`px-3 py-1 rounded border ${page === 1 ? 'bg-black text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
            >
              1
            </button>
            {chunkStart > 2 && <span>...</span>}
          </>
        )}

        {/* Chunk Pages */}
        {Array.from({ length: chunkEnd - chunkStart + 1 }, (_, i) => {
          const pageNum = chunkStart + i;
          return (
            <button
              key={pageNum}
              onClick={() => handlePageClick(pageNum)}
              className={`px-3 py-1 rounded border ${page === pageNum ? 'bg-black text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
            >
              {pageNum}
            </button>
          );
        })}

        {/* Last Page */}
        {chunkEnd < totalPages && (
          <>
            {chunkEnd < totalPages - 1 && <span>...</span>}
            <button
              onClick={() => {
                setPage(totalPages);
                setCurrentChunk(Math.floor((totalPages - 1) / chunkSize));
              }}
              className={`px-3 py-1 rounded border ${page === totalPages ? 'bg-black text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
            >
              {totalPages}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default AllProducts;