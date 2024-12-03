import { useState } from "react";
import Header from "@/components/Header";
import ProvinceSelector from "@/components/ProvinceSelector";
import CategoryGrid from "@/components/CategoryGrid";

const Index = () => {
  const [selectedProvince, setSelectedProvince] = useState<string>("");

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <main className="container mx-auto px-4 py-16 animate-fade-up">
        <Header />
        <ProvinceSelector 
          selectedProvince={selectedProvince} 
          setSelectedProvince={setSelectedProvince} 
        />
        <CategoryGrid selectedProvince={selectedProvince} />
      </main>
    </div>
  );
};

export default Index;