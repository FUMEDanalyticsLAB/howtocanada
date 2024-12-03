import { Stethoscope, Users, Video, Calendar, Phone, Heart } from "lucide-react";
import CategoryCard from "@/components/CategoryCard";
import { getTelehealthLinks, getDoctorFinderLink, provinceSpecificInfo } from "@/utils/provinceUtils";

interface CategoryGridProps {
  selectedProvince: string;
}

const CategoryGrid = ({ selectedProvince }: CategoryGridProps) => {
  const categories = [
    {
      icon: Video,
      title: "Telehealth",
      description: "Connect with healthcare providers virtually",
      onClick: () => {
        const links = getTelehealthLinks(selectedProvince);
        window.open(links.maple, '_blank');
        setTimeout(() => window.open(links.felix, '_blank'), 100);
      }
    },
    {
      icon: Users,
      title: "Find Doctors",
      description: "Locate healthcare professionals near you",
      onClick: () => {
        window.open(getDoctorFinderLink(selectedProvince), '_blank');
      }
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {selectedProvince && (
        <CategoryCard
          icon={Stethoscope}
          title={provinceSpecificInfo[selectedProvince].title}
          description={provinceSpecificInfo[selectedProvince].description}
        />
      )}
      {categories.map((category) => (
        <CategoryCard key={category.title} {...category} />
      ))}
    </div>
  );
};

export default CategoryGrid;