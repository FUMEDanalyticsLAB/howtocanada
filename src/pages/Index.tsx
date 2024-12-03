import { Stethoscope, Users, Video, Calendar, Phone, Heart } from "lucide-react";
import SearchBar from "@/components/SearchBar";
import CategoryCard from "@/components/CategoryCard";
import TrustBadge from "@/components/TrustBadge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

const Index = () => {
  const [selectedProvince, setSelectedProvince] = useState<string>("");

  const getTelehealthLinks = (province: string) => {
    switch (province) {
      case "NS":
        return {
          maple: "https://www.getmaple.ca/nova-scotia-online-doctors/",
          felix: "https://www.felixforyou.ca/",
        };
      default:
        return {
          maple: "https://www.getmaple.ca",
          felix: "https://www.felixforyou.ca",
        };
    };
  };

  const getDoctorFinderLink = (province: string) => {
    const links: Record<string, string> = {
      BC: "https://www.healthlinkbc.ca/health-services/search-services-your-area",
      ON: "https://doctors.cpso.on.ca/",
      AB: "https://search.cpsa.ca/physiciansearch",
      QC: "https://www.ramq.gouv.qc.ca/en/citizens/health-insurance/finding-doctor",
      NS: "https://findaprimarycareprovider.novascotia.ca/",
      NB: "https://www2.gnb.ca/content/gnb/en/departments/health/Hospital-Services/content/Patient_Connect_NB.html",
      MB: "https://www.gov.mb.ca/health/familydoctorfinder/",
      SK: "https://www.saskhealthauthority.ca/your-health/find-doctor",
      PE: "https://www.princeedwardisland.ca/en/information/health-pei/patient-registry-program",
      NL: "https://findadoctornl.ca/",
      YT: "https://yukon.ca/en/health-and-wellness/care-services/find-family-doctor-or-specialist",
      NT: "https://www.hss.gov.nt.ca/en/services/nwt-online-health-services",
      NU: "https://www.gov.nu.ca/health/information/health-centres"
    };
    return links[province] || "https://www.canada.ca/en/health-canada/services/health-care-system/primary-health-care.html";
  };

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

  const provinceSpecificInfo: Record<string, { title: string; description: string }> = {
    BC: {
      title: "BC HealthLink",
      description: "Access BC's health information line and provincial health services",
    },
    ON: {
      title: "Service Ontario Health",
      description: "Find OHIP services and healthcare providers in Ontario",
    },
    AB: {
      title: "Alberta Health Services",
      description: "Connect with Alberta's healthcare system and find local resources",
    },
    QC: {
      title: "Santé Québec",
      description: "Access Quebec's healthcare services and find local clinics",
    },
    NS: {
      title: "Nova Scotia Health",
      description: "Navigate Nova Scotia's healthcare system and services",
    },
    NB: {
      title: "New Brunswick Health",
      description: "Access New Brunswick's healthcare services and programs",
    },
    MB: {
      title: "Manitoba Health",
      description: "Find Manitoba health services and local care providers",
    },
    SK: {
      title: "Saskatchewan Health Authority",
      description: "Connect with Saskatchewan's healthcare services",
    },
    PE: {
      title: "Health PEI",
      description: "Access Prince Edward Island's health services",
    },
    NL: {
      title: "Newfoundland and Labrador Health",
      description: "Find healthcare services in Newfoundland and Labrador",
    },
    YT: {
      title: "Yukon Health",
      description: "Access Yukon's healthcare services and programs",
    },
    NT: {
      title: "Northwest Territories Health",
      description: "Connect with Northwest Territories health services",
    },
    NU: {
      title: "Nunavut Health",
      description: "Find healthcare services in Nunavut",
    },
  };

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

          <div className="max-w-md mx-auto mb-12">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select your province or territory for more accurate results
            </label>
            <Select onValueChange={setSelectedProvince} value={selectedProvince}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Choose your province" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="BC">British Columbia</SelectItem>
                <SelectItem value="ON">Ontario</SelectItem>
                <SelectItem value="AB">Alberta</SelectItem>
                <SelectItem value="QC">Quebec</SelectItem>
                <SelectItem value="NS">Nova Scotia</SelectItem>
                <SelectItem value="NB">New Brunswick</SelectItem>
                <SelectItem value="MB">Manitoba</SelectItem>
                <SelectItem value="SK">Saskatchewan</SelectItem>
                <SelectItem value="PE">Prince Edward Island</SelectItem>
                <SelectItem value="NL">Newfoundland and Labrador</SelectItem>
                <SelectItem value="YT">Yukon</SelectItem>
                <SelectItem value="NT">Northwest Territories</SelectItem>
                <SelectItem value="NU">Nunavut</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

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
      </main>
    </div>
  );
};

export default Index;
