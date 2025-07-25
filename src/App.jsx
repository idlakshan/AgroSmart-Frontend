import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import SoilAnalysis from './components/SoilAnalysis';
import CropRecomandation from './components/CropRecomandation';
import { CropModal } from './components/CropModel';
import { FeatureSection } from './pages/FeatureSection';
import { HeroSection } from './pages/HeroSection';
import LearnMoreSeaction from './pages/LearnMoreSection';
import AdminCrops from './pages/AdminCrops'; 

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [soilType, setSoilType] = useState(null);
  const [confidence, setConfidence] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [heatMapUrl, setHeatMapUrl] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [sortBy, setSortBy] = useState('confidence');
  const [filterCategory, setFilterCategory] = useState('all');
  const [selectedCrop, setSelectedCrop] = useState(null);

  const handleSoilAnalysis = (type, conf, heatMap) => {
    setSoilType(type);
    setConfidence(conf);
    setHeatMapUrl(heatMap);
    setShowResults(true);
  };

  const handleDistrictSelect = (district) => {
    setSelectedDistrict(district);
  };

  const handleCropClick = (crop) => {
    setSelectedCrop(crop);
  };

  const handleClear = () => {
    setSoilType(null);
    setConfidence(null);
    setSelectedDistrict(null);
    setHeatMapUrl(null);
    setShowResults(false);
  };

  const handleCloseModal = () => {
    setSelectedCrop(null);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <Routes>

        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <FeatureSection />
              <main className="flex-grow">
                <SoilAnalysis
                  onAnalysisComplete={handleSoilAnalysis}
                  onDistrictSelect={handleDistrictSelect}
                  onClear={handleClear}
                  selectedDistrict={selectedDistrict}
                  soilType={soilType}
                  confidence={confidence}
                  heatMapUrl={heatMapUrl}
                />
                {showResults && selectedDistrict && (
                  <>
                    <CropRecomandation
                      soilType={soilType || ''}
                      district={selectedDistrict}
                      sortBy={sortBy}
                      setSortBy={setSortBy}
                      filterCategory={filterCategory}
                      setFilterCategory={setFilterCategory}
                      onCropClick={handleCropClick}
                    />
                    {selectedCrop && (
                      <CropModal crop={selectedCrop} onClose={handleCloseModal} />
                    )}
                  </>
                )}
                <LearnMoreSeaction />
              </main>
              <Footer />
             
            </>
          }
        />

        <Route path="/admin/crops" element={<AdminCrops />} />
      </Routes>
       <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App;
