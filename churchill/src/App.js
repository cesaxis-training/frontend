import React, { useEffect, useState } from 'react';
import { FiRefreshCw, FiPlus, FiEdit, FiTrash2 } from 'react-icons/fi';

// Utility function to fetch quotes from the backend
const fetchQuotes = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/quotes`);
  if (!response.ok) {
    throw new Error("Failed to fetch quotes");
  }
  return response.json();
};

function App() {
  const [quotes, setQuotes] = useState([]); // State for storing quotes
  const [error, setError] = useState(null); // State for error handling

  // Fetch quotes on component mount
  useEffect(() => {
    const getQuotes = async () => {
      try {
        const data = await fetchQuotes();
        setQuotes(data);
      } catch (err) {
        setError(err.message);
      }
    };
    getQuotes();
  }, []);

  return (
    <div className="min-h-screen bg-base-200 flex flex-col items-center py-16">
      {/* Header */}
      <header className="w-full bg-primary text-primary-content py-4 shadow-lg">
        <div className="container mx-auto flex justify-center items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Churchill Logo" style={{ height: '70px' }} />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col justify-center items-center text-center px-6">
        {/* Buttons */}
        <div className="mb-6 flex gap-4">
          <button className="btn btn-primary flex items-center gap-2">
            <FiRefreshCw className="text-lg" />
            Random Quote
          </button>
          <button className="btn btn-secondary flex items-center gap-2">
            <FiPlus className="text-lg" />
            Add New Quote
          </button>
        </div>

        {/* Quote List */}
        <div className="border-t border-gray-300 pt-4 w-full">
          <h2 className="text-xl font-semibold mb-4">All Quotes</h2>
          {error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {quotes.length === 0 ? (
                <p className="text-gray-500">No quotes available.</p>
              ) : (
                quotes.map((quote) => (
                  <div key={quote.id} className="card bg-base-100 w-96 shadow-xl">
                    <div className="card-body">
                      <blockquote className="text-xl pb-5 font-semibold italic text-gray-800">
                        <p>{quote.text}</p>
                        <footer className="mt-4 text-sm font-medium text-gray-500">
                          – {quote.author}
                        </footer>
                      </blockquote>
                      <div className="card-actions justify-end">
                        <button className="btn btn-outline btn-sm flex items-center gap-1">
                          <FiEdit />
                          Edit
                        </button>
                        <button className="btn btn-outline btn-error btn-sm flex items-center gap-1">
                          <FiTrash2 />
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
