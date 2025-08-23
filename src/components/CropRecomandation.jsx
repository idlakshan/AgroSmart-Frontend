import { FilterSort } from "./FilterSort";
import { CropCard } from "./CropCard";

const toViewModel = (item) => {
  const c = item.crop || {};
  const pct = Math.round((item.confidence ?? 0) * 100);
  return {
    id: c._id,
    name: c.name,
    image: c.image,
    shortDescription: c.description,
    fullDescription: c.description,
    confidence: pct,
    category: (c.category || "").toLowerCase(),
    growthPeriod: c.growthPeriod,
    waterRequirements: c.waterRequirements,
    soilRequirements: c.soilRequirements,
    idealTemperature: c.avgTemperature, 
    idealHumadity: c.avgHumidity, 
    idealRainfall: c.rainfall, 
  };
};

const CropRecomandation = ({
  sortBy,
  setSortBy,
  filterCategory,
  setFilterCategory,
  onCropClick,
  results = [],
}) => {
  const adapted = results.map(toViewModel);

  const filtered = adapted.filter(
    (crop) => filterCategory === "all" || crop.category === filterCategory
  );

  const sorted = [...filtered].sort((a, b) =>
    sortBy === "confidence" ? b.confidence - a.confidence : a.name.localeCompare(b.name)
  );

  return (
    <section id="soil-analysis" className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Recommended Crops</h2>
          <p className="text-gray-600 mt-2">
            Tailored crop recommendations based on your selections to help you farm smarter.
          </p>
        </div>

        <FilterSort
          sortBy={sortBy}
          setSortBy={setSortBy}
          filterCategory={filterCategory}
          setFilterCategory={setFilterCategory}
        />

        <hr className="my-6 border-t border-gray-200" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sorted.map((crop) => (
            <CropCard key={crop.id} crop={crop} onClick={onCropClick} />
          ))}
        </div>

        {sorted.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-500">No crops match your current filters.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CropRecomandation;
