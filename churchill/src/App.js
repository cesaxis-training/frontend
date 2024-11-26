import React from 'react';
import { FiRefreshCw, FiPlus, FiEdit, FiTrash2 } from 'react-icons/fi'; // Install react-icons if not already

function App() {
  return (
    <div className="min-h-screen bg-base-200 flex flex-col items-center">
      {/* Header */}
      <header className="w-full bg-primary text-primary-content py-4 shadow-lg">
        <div className="container mx-auto flex justify-center items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            {/* <h1 className="text-2xl font-bold">Churchill</h1> */}
            <img src="/logo.png" alt="Churchill Logo" style={{ height: '70px' }}/>
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
        <blockquote className="text-xl sm:text-2xl md:text-3xl font-semibold italic text-gray-800 max-w-2xl mb-16">
          <p>
            "Pedras no meu caminho? Guardo todas. Um dia vou construir um carro."
          </p>
          <footer className="mt-4 text-sm font-medium text-gray-500">
            – António Costa
          </footer>
        </blockquote>

        {/* Quote List */}
        <div className="border-t border-gray-300 pt-4">
          <h2 className="text-xl font-semibold mb-4">All Quotes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Example Quote */}
            <div class="card bg-base-100 w-96 shadow-xl">
              <div class="card-body">
              <blockquote className="text-xl pb-5 font-semibold italic text-gray-800 max-w-2xl">
                <p>
                  "Pedras no meu caminho? Guardo todas. Um dia vou construir um carro."
                </p>
                <footer className="mt-4 text-sm font-medium text-gray-500">
                  – António Costa
                </footer>
              </blockquote>
                <div class="card-actions justify-end">
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
            {/* Repeat the quote card for more quotes */}
            <div class="card bg-base-100 w-96 shadow-xl">
              <div class="card-body">
              <blockquote className="text-xl pb-5 font-semibold italic text-gray-800 max-w-2xl">
                <p>
                "Os ventos da dúvida sopram mais forte quando o relógio decide dormir, mas é na madrugada silenciosa que o caos aprende a dançar."
                </p>
                <footer className="mt-4 text-sm font-medium text-gray-500">
                  – Nuno Nunes aka Churchill
                </footer>
              </blockquote>
                <div class="card-actions justify-end">
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
            <div class="card bg-base-100 w-96 shadow-xl">
              <div class="card-body">
              <blockquote className="text-xl pb-5 font-semibold italic text-gray-800 max-w-2xl">
                <p>
                "Rica em ouro, mas pobre, pobre em sonhos."
                </p>
                <footer className="mt-4 text-sm font-medium text-gray-500">
                  – Floribela
                </footer>
              </blockquote>
                <div class="card-actions justify-end">
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
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
