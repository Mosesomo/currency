import { useState, useEffect } from "react";
import CurrencyList from "./components/CurrencyList";
import fxData from "./data/fx.json";
import { CiSearch } from "react-icons/ci";
import { BsCurrencyExchange } from "react-icons/bs";

// Main Application Component
const App = () => {
  const [currencies, setCurrencies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Loading data from fx.json
  useEffect(() => {
    // Setting the fx data on component mount
    setCurrencies(fxData.fx || []);
  }, []);

  // Updating search term based on the URL hash
  useEffect(() => {
    const hash = window.location.hash.slice(1); // Get search term from URL hash
    if (hash) {
      setSearchTerm(decodeURIComponent(hash)); // Decode URI components
    }
  }, []);

  // Update URL hash on search term change
  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    window.location.hash = encodeURIComponent(term); // Encode URI components
  };

  return (
    <div className="min-h-screen bg-gray-100 p-0">
      {/* Header with Sticky Search Bar */}
      <header className="w-full top-0 bg-white shadow-md z-10 text-gray-700">
        <div className="flex justify-between items-center p-5">
          <div className="flex justify-center items-center gap-3">
            <BsCurrencyExchange size={32} className="text-gray-700" />
            <h1 className="hidden md:block text-2xl font-bold">Currency Exchange Rates</h1>
          </div>
          <div className="fixed right-4 flex items-center">
            <CiSearch
              size={20}
              className="absolute left-3 text-gray-400 pointer-events-none"
            />
            <input
              type="text"
              placeholder="Search for a currency..."
              value={searchTerm}
              onChange={handleSearch}
              className="pl-10 pr-4 py-2 border rounded focus:outline-none focus:ring focus:ring-gray-600"
            />
          </div>
        </div>
      </header>

      {/* Currency List */}
      <CurrencyList currencies={currencies} searchTerm={searchTerm} />
    </div>
  );
};

export default App;
