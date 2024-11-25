import React from 'react';
import { FiRefreshCw, FiPlus } from 'react-icons/fi'; // Install react-icons if not already

function App() {
  return (
    <div className="min-h-screen bg-base-200 flex flex-col items-center">
      {/* Header */}
      <header className="w-full bg-primary text-primary-content py-4 shadow-lg">
        <div className="container mx-auto flex justify-center items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold">Churchill</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col justify-center items-center text-center px-6">
        {/* Buttons */}
        <div className="mb-6 flex gap-4">
          {/* Random Quote Button */}
          <button className="btn btn-primary flex items-center gap-2">
            <FiRefreshCw className="text-lg" />
            Random Quote
          </button>

          {/* Add New Quote Button */}
          <button className="btn btn-secondary flex items-center gap-2">
            <FiPlus className="text-lg" />
            Add New Quote
          </button>
        </div>

        {/* Quote */}
        <blockquote className="text-xl sm:text-2xl md:text-3xl font-semibold italic text-gray-800 max-w-2xl">
          <p>
            "Pedras no meu caminho? Guardo todas. Um dia vou construir um carro."
          </p>
          <footer className="mt-4 text-sm font-medium text-gray-500">
            – António Costa
          </footer>
        </blockquote>
      </main>
    </div>
  );
}

export default App;
