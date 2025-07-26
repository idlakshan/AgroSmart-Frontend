import React, { useState } from 'react';
import {
  UploadCloudIcon,
  TrashIcon,
  MapPinIcon,
  ThermometerIcon,
  DropletIcon,
  SearchIcon,
  XIcon,
  InfoIcon
} from 'lucide-react';

const districts = [
  'Ampara', 'Anuradhapura', 'Badulla', 'Batticaloa', 'Colombo', 'Galle', 'Gampaha',
  'Hambantota', 'Jaffna', 'Kalutara', 'Kandy', 'Kegalle', 'Kilinochchi', 'Kurunegala',
  'Mannar', 'Matale', 'Matara', 'Monaragala', 'Mullaitivu', 'Nuwara Eliya',
  'Polonnaruwa', 'Puttalam', 'Ratnapura', 'Trincomalee', 'Vavuniya'
];

const SoilAnalysis = ({
  onAnalysisComplete,
  onDistrictSelect,
  onClear,
  selectedDistrict,
  soilType,
  confidence,
  heatMapUrl
}) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleAnalyze = () => {
    if (!selectedImage || !selectedDistrict) return;
    setIsAnalyzing(true);
    setTimeout(() => {
      const soilTypes = ['Clay Loam', 'Sandy Loam', 'Silt Loam', 'Clay', 'Sandy'];
      const randomSoilType = soilTypes[Math.floor(Math.random() * soilTypes.length)];
      const randomConfidence = Math.round((0.7 + Math.random() * 0.25) * 100) / 100;
      const heatmapUrl = 'https://growtraffic-bc85.kxcdn.com/blog/wp-content/uploads/2015/03/Heatmap.png';
      onAnalysisComplete(randomSoilType, randomConfidence, heatmapUrl);
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <section id="analysis" className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Soil Evaluation</h2>
        <p className="text-center text-gray-600 mb-12">
          Upload your soil image and select your district for personalized crop recommendations
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Upload Soil Image</h3>
            {!previewUrl ? (
              <div
                className="border-2 border-dashed border-gray-300 rounded-lg p-12 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => document.getElementById('soil-image-input')?.click()}
              >
                <UploadCloudIcon className="h-12 w-12 text-green-600 mb-4" />
                <p className="text-gray-500 text-center">Click to upload or drag and drop</p>
                <p className="text-gray-400 text-sm mt-2">PNG, JPG, JPEG up to 10MB</p>
                <input
                  type="file"
                  id="soil-image-input"
                  className="hidden"
                  accept="image/png, image/jpeg, image/jpg"
                  onChange={handleImageChange}
                />
              </div>
            ) : (
              <div className="relative">
                <img src={previewUrl} alt="Soil preview" className="w-full h-64 object-cover rounded-lg" />
                <button
                  className="absolute top-2 right-2 bg-red-500 p-2 rounded-full text-white hover:bg-red-600 transition-colors"
                  onClick={() => {
                    setSelectedImage(null);
                    setPreviewUrl(null);
                  }}
                >
                  <TrashIcon className="h-4 w-4" />
                </button>
                {soilType && confidence && (
                  <div className="absolute bottom-3 left-3 bg-white bg-opacity-90 p-2 rounded-lg shadow-sm">
                    <div className="flex items-center">
                      <div className="mr-3">
                        <p className="text-xs text-gray-500 uppercase font-medium">Soil Type</p>
                        <p className="font-bold text-gray-800">{soilType}</p>
                      </div>
                      <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                        {(confidence * 100).toFixed(1)}% confidence
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
            <div className="mt-6">
              <div className="flex items-center mb-4">
                <MapPinIcon className="h-5 w-5 text-green-600 mr-2" />
                <h4 className="text-lg font-medium">Select Your District</h4>
              </div>
              <select
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                value={selectedDistrict || ''}
                onChange={(e) => onDistrictSelect(e.target.value)}
              >
                <option value="">Select a district</option>
                {districts.map((district) => (
                  <option key={district} value={district}>
                    {district}
                  </option>
                ))}
              </select>
            </div>
            <div className="mt-6 flex space-x-3">
              <button
                className={`flex-grow py-3 rounded-lg font-medium flex items-center justify-center ${
                  selectedImage && selectedDistrict
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white'
                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                }`}
                disabled={!selectedImage || !selectedDistrict || isAnalyzing}
                onClick={handleAnalyze}
              >
                <SearchIcon className="h-5 w-5 mr-2" />
                {isAnalyzing ? 'Analyzing...' : 'Get Crop Suggestions'}
              </button>
              <button
                className="w-1/4 py-3 rounded-lg font-medium hover:bg-gray-300 border border-gray-300 flex items-center justify-center"
                onClick={onClear}
              >
                <XIcon className="h-5 w-5 mr-2" />
                Clear
              </button>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            {!soilType ? (
              <div className="h-64 flex items-center justify-center border border-gray-200 rounded-lg">
                <p className="text-gray-500">Upload a soil image and select your district to see results</p>
              </div>
            ) : (
              <div className="space-y-6">
                {heatMapUrl && (
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-medium">Soil Analysis Heat Map</h4>
                      <button className="text-gray-500 hover:text-gray-700" title="What is this?">
                        <InfoIcon className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="relative h-64 w-full overflow-hidden rounded-lg border border-gray-200">
                      <img src={heatMapUrl} alt="Soil heat map" className="w-full h-full object-cover" />
                      <div className="absolute bottom-2 right-2 bg-white bg-opacity-90 p-2 rounded-lg text-xs">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-red-500 rounded-full mr-1"></div>
                          <span className="mr-2">High</span>
                          <div className="w-3 h-3 bg-blue-500 rounded-full mr-1"></div>
                          <span>Low</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      This heat map highlights the most important areas of your soil sample used for analysis. Red
                      regions indicate areas with higher significance for soil type determination.
                    </p>
                  </div>
                )}
                {selectedDistrict && (
                   <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <MapPinIcon className="h-5 w-5 text-emerald-600 mr-2" />
                        <h4 className="text-lg font-medium text-gray-800">{selectedDistrict}</h4>
                      </div>
                      <span className="text-xs text-emerald-600 font-medium">Past  6 months</span>
                    </div>

                    <hr className="border-t border-gray-100 my-4" />

                    <div className="flex justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-amber-50 rounded-lg text-amber-600">
                          <ThermometerIcon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Avg Temp</p>
                          <p className="font-medium text-gray-800">23°C</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-teal-50 rounded-lg text-teal-600">
                          <DropletIcon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Avg Humidity</p>
                          <p className="font-medium text-gray-800">78%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoilAnalysis;
