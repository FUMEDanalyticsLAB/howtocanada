import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ProvinceSelectorProps {
  selectedProvince: string;
  setSelectedProvince: (value: string) => void;
}

const ProvinceSelector = ({ selectedProvince, setSelectedProvince }: ProvinceSelectorProps) => {
  return (
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
  );
};

export default ProvinceSelector;