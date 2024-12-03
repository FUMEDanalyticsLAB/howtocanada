import { Stethoscope, Users, Video, Calendar, Phone, Heart } from "lucide-react";
import SearchBar from "@/components/SearchBar";
import CategoryCard from "@/components/CategoryCard";
import TrustBadge from "@/components/TrustBadge";

const Index = () => {
  const categories = [
    {
      icon: Video,
      title: "Telehealth",
      description: "Connect with healthcare providers virtually",
    },
    {
      icon: Users,
      title: "Find Doctors",
      description: "Locate healthcare professionals near you",
    },
    {
      icon: Calendar,
      title: "Appointments",
      description: "Book and manage your medical visits",
    },
    {
      icon: Phone,
      title: "Emergency",
      description: "Quick access to emergency services",
    },
    {
      icon: Heart,
      title: "Wellness",
      description: "Preventive care and healthy living",
    },
    {
      icon: Stethoscope,
      title: "Symptoms",
      description: "Check your symptoms and get guidance",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <main className="container mx-auto px-4 py-16 animate-fade-up">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {categories.map((category) => (
            <CategoryCard key={category.title} {...category} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;