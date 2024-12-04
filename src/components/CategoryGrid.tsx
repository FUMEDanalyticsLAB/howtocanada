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
  const [isDoctorOpen, setIsDoctorOpen] = useState(false);
  const [isSymptomOpen, setIsSymptomOpen] = useState(false);
  const telehealthLinks = getTelehealthLinks(selectedProvince);

  const symptomResources = {
    "Sore Throat": {
      medpage: "https://www.medpage.com/resource-centers/sore-throat",
      uptodate: "https://www.uptodate.com/contents/sore-throat-in-adults-beyond-the-basics",
      mayo: "https://www.mayoclinic.org/diseases-conditions/sore-throat/symptoms-causes/syc-20351635"
    },
    "Eye Pain": {
      medpage: "https://www.medpage.com/ophthalmology",
      uptodate: "https://www.uptodate.com/contents/eye-pain-beyond-the-basics",
      mayo: "https://www.mayoclinic.org/symptoms/eye-pain/basics/definition/sym-20050744"
    },
    "Fever": {
      medpage: "https://www.medpage.com/infectiousdisease/generalid",
      uptodate: "https://www.uptodate.com/contents/fever-in-adults-beyond-the-basics",
      mayo: "https://www.mayoclinic.org/diseases-conditions/fever/symptoms-causes/syc-20352759"
    }
  };

  const categories = [
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
      
      <Collapsible open={isSymptomOpen} onOpenChange={setIsSymptomOpen} className="col-span-1">
        <CollapsibleTrigger className="w-full">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer border border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Stethoscope className="w-8 h-8 text-medical-blue mb-4" />
              </div>
              {isSymptomOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </div>
            <h3 className="text-lg font-semibold mb-2">Symptoms</h3>
            <p className="text-gray-600 text-sm">Check your symptoms and get guidance</p>
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-2 space-y-2">
          {Object.entries(symptomResources).map(([symptom, links]) => (
            <div key={symptom} className="bg-white p-4 rounded-lg shadow border border-gray-100">
              <h4 className="font-semibold text-medical-blue mb-2">{symptom}</h4>
              <div className="space-y-2">
                <a 
                  href={links.medpage} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-sm text-blue-600 hover:underline"
                >
                  MedPage Today
                </a>
                <a 
                  href={links.uptodate} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-sm text-blue-600 hover:underline"
                >
                  UpToDate Patient
                </a>
                <a 
                  href={links.mayo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-sm text-blue-600 hover:underline"
                >
                  Mayo Clinic
                </a>
              </div>
            </div>
          ))}
        </CollapsibleContent>
      </Collapsible>

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

      <Collapsible open={isDoctorOpen} onOpenChange={setIsDoctorOpen} className="col-span-1">
        <CollapsibleTrigger className="w-full">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer border border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Users className="w-8 h-8 text-medical-blue mb-4" />
              </div>
              {isDoctorOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </div>
            <h3 className="text-lg font-semibold mb-2">Find Doctors</h3>
            <p className="text-gray-600 text-sm">Locate healthcare professionals near you</p>
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-2 space-y-2">
          <div 
            onClick={() => window.open(getDoctorFinderLink(selectedProvince), '_blank')}
            className="bg-white p-4 rounded-lg shadow cursor-pointer hover:shadow-md transition-shadow border border-gray-100"
          >
            <h4 className="font-semibold text-medical-blue">Find a Doctor</h4>
            <p className="text-sm text-gray-600">Search for doctors accepting new patients in your area</p>
          </div>
          {selectedProvince === "BC" && (
            <div 
              onClick={() => window.open("https://www.healthmatchbc.org/", '_blank')}
              className="bg-white p-4 rounded-lg shadow cursor-pointer hover:shadow-md transition-shadow border border-gray-100"
            >
              <h4 className="font-semibold text-medical-blue">Health Match BC</h4>
              <p className="text-sm text-gray-600">Register to be matched with a family doctor in British Columbia</p>
            </div>
          )}
          {selectedProvince === "ON" && (
            <div 
              onClick={() => window.open("https://www.health.gov.on.ca/en/ms/healthcareconnect/", '_blank')}
              className="bg-white p-4 rounded-lg shadow cursor-pointer hover:shadow-md transition-shadow border border-gray-100"
            >
              <h4 className="font-semibold text-medical-blue">Health Care Connect</h4>
              <p className="text-sm text-gray-600">Register to find a family doctor or nurse practitioner in Ontario</p>
            </div>
          )}
          {selectedProvince === "NS" && (
            <div 
              onClick={() => window.open("https://needafamilypractice.nshealth.ca/", '_blank')}
              className="bg-white p-4 rounded-lg shadow cursor-pointer hover:shadow-md transition-shadow border border-gray-100"
            >
              <h4 className="font-semibold text-medical-blue">Need a Family Practice</h4>
              <p className="text-sm text-gray-600">Join the registry to find a family doctor or nurse practitioner in Nova Scotia</p>
            </div>
          )}
        </CollapsibleContent>
      </Collapsible>
      {categories.map((category) => (
        <CategoryCard key={category.title} {...category} />
      ))}
    </div>
  );
};

export default CategoryGrid;
