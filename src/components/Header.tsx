import SearchBar from "@/components/SearchBar";
import TrustBadge from "@/components/TrustBadge";

const Header = () => {
  return (
    <div className="text-center mb-16">
      <img
        src="/maple-leaf.svg"
        alt="Canadian Healthcare"
        className="w-12 h-12 mx-auto mb-6"
      />
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
        How do I...
      </h1>
      <div className="flex justify-center mb-6">
        <SearchBar />
      </div>
      <div className="flex justify-center mb-12">
        <TrustBadge />
      </div>
    </div>
  );
};

export default Header;