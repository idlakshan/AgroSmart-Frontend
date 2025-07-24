import { useState } from "react";
import {
  PlusCircle,
  Image,
  Clock,
  Droplet,
  ChevronDown,
  Sprout,
  Trees
} from "lucide-react";

const AdminCrops = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: "",
    growthPeriod: "",
    waterRequirements: "",
    category: "",
    fertilizers: "",
    soilRequirements: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting:", formData);
  };

  const categories = [
    "Vegetables",
    "Fruits",
    "Grains",
    "Legumes",
    "Herbs",
  ];

  return (
    <div className="max-w-3xl mx-auto my-6 p-5 bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="flex items-center mb-6">
        <PlusCircle className="h-6 w-6 text-green-600 mr-2" />
        <h1 className="text-xl font-bold text-gray-800">Add New Crop</h1>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="bg-green-50/50 p-4 rounded-lg border border-green-100">
          <h2 className="text-base font-semibold text-green-800 mb-3 flex items-center">
            <span className="w-1.5 h-4 bg-green-500 rounded-full mr-2"></span>
            Basic Information
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-xs font-medium text-gray-600">Crop Name*</label>
              <input
                type="text"
                name="name"
                placeholder="e.g., Tomato, Rice"
                className="w-full text-sm border border-gray-200 rounded-md p-2 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="space-y-1">
              <label className="text-xs font-medium text-gray-600">Category</label>
              <div className="relative">
                <select
                  name="category"
                  className="w-full text-sm appearance-none border border-gray-200 rounded-md p-2 pr-7 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  value={formData.category}
                  onChange={handleChange}
                >
                  <option value="">Select category</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
                <ChevronDown className="h-3 w-3 text-gray-400 absolute right-2 top-1/2 transform -translate-y-1/2" />
              </div>
            </div>
          </div>
          
          <div className="mt-3 space-y-1">
            <label className="text-xs font-medium text-gray-600">Description</label>
            <textarea
              name="description"
              placeholder="Brief description about the crop..."
              rows="2"
              className="w-full text-sm border border-gray-200 rounded-md p-2 focus:ring-2 focus:ring-green-500 focus:border-transparent"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
          
          <div className="mt-3 space-y-1">
            <label className="text-xs font-medium text-gray-600">Image URL</label>
            <div className="flex items-center">
              <Image className="h-4 w-4 text-gray-400 mr-1" />
              <input
                type="text"
                name="image"
                placeholder="Paste image URL here"
                className="w-full text-sm border border-gray-200 rounded-md p-2 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                value={formData.image}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        
        <div className="bg-amber-50/50 p-4 rounded-lg border border-amber-100">
          <h2 className="text-base font-semibold text-amber-800 mb-3 flex items-center">
            <span className="w-1.5 h-4 bg-amber-500 rounded-full mr-2"></span>
            Growth Requirements
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-xs font-medium text-gray-600 flex items-center">
                <Clock className="h-3 w-3 mr-1 text-amber-600" />
                Growth Period
              </label>
              <input
                type="text"
                name="growthPeriod"
                placeholder="e.g., 90-120 days"
                className="w-full text-sm border border-gray-200 rounded-md p-2 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                value={formData.growthPeriod}
                onChange={handleChange}
              />
            </div>
            
            <div className="space-y-1">
              <label className="text-xs font-medium text-gray-600 flex items-center">
                <Droplet className="h-3 w-3 mr-1 text-blue-600" />
                Water Requirements
              </label>
              <input
                type="text"
                name="waterRequirements"
                placeholder="e.g., Moderate, 2-3 times/week"
                className="w-full text-sm border border-gray-200 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={formData.waterRequirements}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        
        <div className="bg-emerald-50/50 p-4 rounded-lg border border-emerald-100">
          <h2 className="text-base font-semibold text-emerald-800 mb-3 flex items-center">
            <span className="w-1.5 h-4 bg-emerald-500 rounded-full mr-2"></span>
            Soil & Fertilization
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-xs font-medium text-gray-600 flex items-center">
                <Trees className="h-3 w-3 mr-1 text-emerald-600" />
                Soil Requirements
              </label>
              <textarea
                name="soilRequirements"
                placeholder="e.g., Well-drained loamy soil"
                rows="2"
                className="w-full text-sm border border-gray-200 rounded-md p-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                value={formData.soilRequirements}
                onChange={handleChange}
              />
            </div>
            
            <div className="space-y-1">
              <label className="text-xs font-medium text-gray-600 flex items-center">
                <Sprout className="h-3 w-3 mr-1 text-lime-600" />
                Fertilizers
              </label>
              <textarea
                name="fertilizers"
                placeholder="e.g., NPK 10-10-10 monthly"
                rows="2"
                className="w-full text-sm border border-gray-200 rounded-md p-2 focus:ring-2 focus:ring-lime-500 focus:border-transparent"
                value={formData.fertilizers}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white text-sm font-semibold py-2 rounded-lg hover:shadow-md transition-all flex items-center justify-center"
        >
          <PlusCircle className="h-4 w-4 mr-1" />
          Save Crop
        </button>
      </form>
    </div>
  );
};

export default AdminCrops;