import { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  onClick?: () => void;
}

const CategoryCard = ({ icon: Icon, title, description, onClick }: CategoryCardProps) => {
  return (
    <div 
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer border border-gray-100"
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      <Icon className="w-8 h-8 text-medical-blue mb-4" />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default CategoryCard;