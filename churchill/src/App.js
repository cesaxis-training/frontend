import React, { useEffect, useState } from "react";
import { FiRefreshCw, FiPlus, FiEdit, FiTrash2, FiX } from "react-icons/fi";

const fetchQuotes = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/quotes`);
  if (!response.ok) {
    throw new Error("Failed to fetch quotes");
  }
  const data = await response.json();
  return data.slice(0, 100);
};

const addQuote = async (quote) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/quotes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(quote),
  });
  if (!response.ok) {
    throw new Error("Failed to add quote");
  }
  return response.json();
};

const updateQuote = async (id, quote) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/quotes/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(quote),
  });
  if (!response.ok) {
    throw new Error("Failed to update quote");
  }
  return response.json();
};

const deleteQuote = async (id) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/quotes/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete quote");
  }
  return response.json();
};

// Modal Component
const QuoteModal = ({ isOpen, onClose, onSubmit }) => {
  const [newQuote, setNewQuote] = useState({ text: "", author: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(newQuote);
    setNewQuote({ text: "", author: "" }); // Reset form
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center" style={{ zIndex: 1000 }}>
      <div className="bg-white p-6 rounded shadow-lg w-96 relative">
        <button className="absolute top-2 right-2" onClick={onClose}>
          <FiX className="text-lg" />
        </button>
        <h2 className="text-xl font-semibold mb-4">Add New Quote</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Quote text"
            value={newQuote.text}
            onChange={(e) => setNewQuote({ ...newQuote, text: e.target.value })}
            className="input input-bordered w-full"
            required
          />
          <input
            type="text"
            placeholder="Author"
            value={newQuote.author}
            onChange={(e) => setNewQuote({ ...newQuote, author: e.target.value })}
            className="input input-bordered w-full"
            required
          />
          <button type="submit" className="btn btn-primary">
            Add Quote
          </button>
        </form>
      </div>
    </div>
  );
};

function App() {
  const [quotes, setQuotes] = useState([]); // State for storing quotes
  const [error, setError] = useState(null); // State for error handling
  const [quote, setQuote] = useState(quotes[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  const handleAddQuote = async (quote) => {
    try {
      const addedQuote = await addQuote(quote);
      setQuotes([...quotes, addedQuote]);
      setIsModalOpen(false); // Close modal after adding
    } catch (err) {
      setError(err.message);
    }
  };

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
    setQuote(quotes[0]);
  }, []);

  return (
    <div className="min-h-screen bg-base-200 flex flex-col items-center">
      {/* Header */}
      <header className="w-full bg-primary text-primary-content py-4 shadow-lg">
        <div className="container mx-auto flex justify-center items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Churchill Logo" style={{ height: "70px" }} />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col justify-center items-center text-center px-6 py-16">
        {/* Quote */}
        <blockquote className="bg-white p-6 rounded-lg shadow-md border border-gray-200 max-w-lg mx-auto">
          <p className="text-2xl font-bold italic text-gray-800 mb-4">"{quote?.text}"</p>
          <footer className="text-lg font-medium text-gray-500">– {quote?.author}</footer>
        </blockquote>

        {/* Buttons */}
        <div className="mt-8 mb-6 flex gap-4">
          <button className="btn btn-primary flex items-center gap-2" onClick={getRandomQuote}>
            <FiRefreshCw className="text-lg" />
            Random Quote
          </button>
          <button className="btn btn-secondary flex items-center gap-2" onClick={() => setIsModalOpen(true)}>
            <FiPlus className="text-lg" />
            Add New Quote
          </button>
        </div>

        {/* Quote Modal */}
        <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleAddQuote} />

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
                        <footer className="mt-4 text-sm font-medium text-gray-500">– {quote.author}</footer>
                      </blockquote>
                      <div className="card-actions justify-end">
                        <button className="btn btn-outline btn-sm flex items-center gap-1">
                          <FiEdit />
                          Edit
                        </button>
                        <button
                          className="btn btn-outline btn-error btn-sm flex items-center gap-1"
                          onClick={() => deleteQuote(quote.id)}
                        >
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
