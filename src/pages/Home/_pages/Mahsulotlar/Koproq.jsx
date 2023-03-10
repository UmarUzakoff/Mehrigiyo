import { Select, Option } from "@material-tailwind/react";
 
export default function Koproq() {
  return (
    <div className="w-72 mb-4">
      <hr />
      <Select className="text-auth" variant = "outlined" color="green">
        <Option className="bg-auth opacity-50 font-extrabold rounded-2xl">Rohat Sirop</Option>
        <Option className="bg-auth opacity-50 rounded-2xl">Organic Bananas</Option>
        <Option className="bg-auth opacity-50 rounded-2xl">ROHAT Yog`i №2</Option>
      </Select>
      <hr />
    </div>
  );
}