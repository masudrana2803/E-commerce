import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

const SearchResults = ({ query, onProductClick }) => {
  const [results, setResults] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const searchTimeout = React.useRef(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    const performSearch = async () => {
      if (!query.trim()) {
        setResults([]);
        return;
      }

      setIsLoading(true);
      try {
        const response = await axios.get(`https://dummyjson.com/products/search?q=${query}`);
        setResults(response.data.products);
      } catch (error) {
        console.error('Search failed:', error);
        setResults([]);
      }
      setIsLoading(false);
    };

    // Clear previous timeout
    if (searchTimeout.current) {
      clearTimeout(searchTimeout.current);
    }

    // Set new timeout for search
    searchTimeout.current = setTimeout(performSearch, 300);

    // Cleanup timeout on unmount or when query changes
    return () => {
      if (searchTimeout.current) {
        clearTimeout(searchTimeout.current);
      }
    };
  }, [query]);

  const handleProductClick = (id) => {
    onProductClick?.();
    navigate(`/product/${id}`);
  };

  if (isLoading) {
    return (
      <div className="absolute w-full mt-2 bg-white rounded-lg shadow-lg z-50 p-4 text-center text-gray-500">
        Searching...
      </div>
    );
  }

  if (results.length === 0 && query.trim() !== '') {
    return (
      <div className="absolute w-full mt-2 bg-white rounded-lg shadow-lg z-50 p-4 text-center text-gray-500">
        No products found
      </div>
    );
  }

  if (results.length === 0) {
    return null;
  }

  return (
    <div className="absolute w-full mt-2 bg-white rounded-lg shadow-lg z-50 max-h-[400px] overflow-y-auto">
      {results.map((product) => (
        <div
          key={product.id}
          onClick={() => handleProductClick(product.id)}
          className="flex items-center gap-3 p-3 hover:bg-gray-100 cursor-pointer border-b"
        >
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-12 h-12 object-cover rounded"
          />
          <div>
            <h3 className="font-medium text-sm">{product.title}</h3>
            <p className="text-sm text-gray-600">₹{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
