import { Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.toLowerCase().includes("prepare") || query.toLowerCase().includes("doctor")) {
      navigate("/prepare-visit");
    }
    console.log("Searching for:", query);
  };

  return (
    <form onSubmit={handleSearch} className="w-full max-w-3xl">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-gray-200 focus:border-medical-blue focus:outline-none focus:ring-2 focus:ring-medical-blue/20 text-lg transition-all"
          placeholder="search for health information..."
        />
      </div>
      <div className="mt-2 text-sm text-gray-600">
        Try: "How do I prepare for my doctor's visit?"
      </div>
    </form>
  );
};

export default SearchBar;