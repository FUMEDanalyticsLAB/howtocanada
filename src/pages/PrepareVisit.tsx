import { useEffect, useState } from "react";
import ReactGA from "react-ga4";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const PrepareVisit = () => {
  const { toast } = useToast();
  const [userLocation, setUserLocation] = useState<string>("");

  useEffect(() => {
    // Get user's location from IP (in a real app, you'd use a geolocation service)
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => setUserLocation(data.region));
  }, []);

  const resources = [
    {
      title: "General Health History Template",
      description: "A comprehensive template to record your medical history, current medications, and symptoms",
      filename: "health-history-template.pdf"
    },
    {
      title: "Symptom Tracker",
      description: "Track your symptoms, their frequency, and severity before your visit",
      filename: "symptom-tracker.pdf"
    },
    {
      title: "Medication List Template",
      description: "Keep track of all your current medications, dosages, and schedules",
      filename: "medication-list.pdf"
    }
  ];

  const handleDownload = (filename: string, title: string) => {
    // In a real app, this would be a real file URL
    const fileUrl = `/templates/${filename}`;
    
    // Track download event
    ReactGA.event({
      category: "Downloads",
      action: "PDF Download",
      label: title,
      location: userLocation || "Unknown"
    });

    // For demo purposes, show a toast instead of actual download
    toast({
      title: "Download Started",
      description: `${title} is being downloaded. Location: ${userLocation || "Unknown"}`,
    });

    // In a real app, trigger actual file download
    // window.open(fileUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Prepare for Your Doctor's Visit</h1>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Download these helpful templates to organize your thoughts and information before your medical appointment. Being prepared helps both you and your healthcare provider make the most of your visit.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {resources.map((resource) => (
            <div key={resource.filename} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold mb-3">{resource.title}</h3>
              <p className="text-gray-600 mb-6">{resource.description}</p>
              <Button
                onClick={() => handleDownload(resource.filename, resource.title)}
                className="w-full"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Template
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrepareVisit;