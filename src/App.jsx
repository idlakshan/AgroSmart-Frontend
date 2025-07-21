import { useState } from 'react'
import { FeatureSection } from './components/FeatureSection'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import LearnMoreSeaction from './components/LearnMoreSection'
import { Navbar } from './components/Navbar'
import SoilAnalysis from './components/SoilAnalysis'



function App() {
  const [soilType, setSoilType] = useState(null);
  const [confidence, setConfidence] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [heatMapUrl, setHeatMapUrl] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const handleSoilAnalysis = (type, conf, heatMap) => {
    setSoilType(type);
    setConfidence(conf);
    setHeatMapUrl(heatMap);
    setShowResults(true);
  };

  const handleDistrictSelect = (district) => {
    setSelectedDistrict(district);
  };

  const handleClear = () => {
    setSoilType(null);
    setConfidence(null);
    setSelectedDistrict(null);
    setHeatMapUrl(null);
    setShowResults(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <Hero />
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
      
        <LearnMoreSeaction />
      </main>
      {/* <SoilAnalysis/> */}

      <Footer />
    </div>
  )
}

export default App
