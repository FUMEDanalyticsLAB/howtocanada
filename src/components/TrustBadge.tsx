import { CheckCircle } from "lucide-react";

const TrustBadge = () => {
  return (
    <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 px-4 py-2 rounded-full">
      <CheckCircle className="w-4 h-4 text-medical-blue" />
      <span>Verified by Canadian Medical Professionals</span>
    </div>
  );
};

export default TrustBadge;