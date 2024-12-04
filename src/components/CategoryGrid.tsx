import { Stethoscope, Users, Video, Calendar, Phone, Heart, ChevronDown, ChevronUp } from "lucide-react";
import CategoryCard from "@/components/CategoryCard";
import { getTelehealthLinks, getDoctorFinderLink, provinceSpecificInfo } from "@/utils/provinceUtils";
import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface CategoryGridProps {
  selectedProvince: string;
}

const CategoryGrid = ({ selectedProvince }: CategoryGridProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const telehealthLinks = getTelehealthLinks(selectedProvince);

  const categories = [
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
      <Collapsible open={isOpen} onOpenChange={setIsOpen} className="col-span-1">
        <CollapsibleTrigger className="w-full">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer border border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Video className="w-8 h-8 text-medical-blue mb-4" />
              </div>
              {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </div>
            <h3 className="text-lg font-semibold mb-2">Telehealth</h3>
            <p className="text-gray-600 text-sm">Connect with healthcare providers virtually</p>
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-2 space-y-2">
          <div 
            onClick={() => window.open(telehealthLinks.maple, '_blank')}
            className="bg-white p-4 rounded-lg shadow cursor-pointer hover:shadow-md transition-shadow border border-gray-100"
          >
            <h4 className="font-semibold text-medical-blue">Maple</h4>
            <p className="text-sm text-gray-600">Connect with Canadian doctors online 24/7. Get prescriptions, lab work, and specialist referrals.</p>
          </div>
          <div 
            onClick={() => window.open(telehealthLinks.felix, '_blank')}
            className="bg-white p-4 rounded-lg shadow cursor-pointer hover:shadow-md transition-shadow border border-gray-100"
          >
            <h4 className="font-semibold text-medical-blue">Felix</h4>
            <p className="text-sm text-gray-600">Online prescriptions and medication delivery. Specialized in lifestyle medications and ongoing care.</p>
          </div>
        </CollapsibleContent>
      </Collapsible>
      {categories.map((category) => (
        <CategoryCard key={category.title} {...category} />
      ))}
    </div>
  );
};

export default CategoryGrid;