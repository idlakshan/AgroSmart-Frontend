import { FilterSort } from './FilterSort';
import { CropCard } from './CropCard';


// Mock crop data
const mockCrops = [
    {
        id: '1',
        name: 'Rice',
        image: 'https://images.unsplash.com/photo-1568347355280-d33fca36f010?auto=format&fit=crop&w=600&q=80',
        shortDescription: 'A staple food crop ideal for wet and humid conditions.',
        fullDescription:
            "Rice is a staple food for over half the world's population. It grows in paddies and requires high water. Ideal for tropical regions with frequent rain.",
        confidence: 95,
        category: 'grains',
        growthPeriod: '3-6 months depending on variety',
        waterRequirements: 'High - requires flooding for most varieties',
        soilRequirements: 'Clay or loamy soil with good water retention',
        idealTemperature: '20-35°C',
    },
    {
        id: '2',
        name: 'Tomatoes',
        image: 'https://images.unsplash.com/photo-1592841200333-999085e4bcc6?auto=format&fit=crop&w=600&q=80',
        shortDescription: 'A versatile fruit used as a vegetable in many cuisines.',
        fullDescription:
            "Tomatoes are technically fruits but used as vegetables. Rich in lycopene and vitamin C. Require warm, moist soil and sun.",
        confidence: 87,
        category: 'vegetables',
        growthPeriod: '60-100 days to harvest',
        waterRequirements: 'Medium - consistent moisture needed',
        soilRequirements: 'Well-drained, slightly acidic soil rich in organic matter',
        idealTemperature: '21-24°C day, 16-18°C night',
    },
    {
        id: '3',
        name: 'Mango',
        image: 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?auto=format&fit=crop&w=600&q=80',
        shortDescription: 'A tropical fruit known for its sweet flavor and juicy flesh.',
        fullDescription:
            'Mangoes need a tropical/subtropical climate and a dry season. Long-living tree with sweet fruits.',
        confidence: 82,
        category: 'fruits',
        growthPeriod: '3-5 years for new trees to bear fruit',
        waterRequirements: 'Medium - regular watering, especially when young',
        soilRequirements: 'Well-drained, deep loamy soil',
        idealTemperature: '24-30°C',
    },
    {
        id: '4',
        name: 'Carrots',
        image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=600&q=80',
        shortDescription: 'A root vegetable known for its high vitamin A content.',
        fullDescription:
            'Carrots grow in sandy, loose soil and are rich in beta-carotene. Require consistent watering for quality roots.',
        confidence: 78,
        category: 'vegetables',
        growthPeriod: '70-80 days to harvest',
        waterRequirements: 'Medium - consistent moisture for good root development',
        soilRequirements: 'Sandy, loose soil free of rocks',
        idealTemperature: '16-21°C',
    },
    {
        id: '5',
        name: 'Green Beans',
        image: 'https://images.unsplash.com/photo-1567375698348-5d9d5ae99de0?auto=format&fit=crop&w=600&q=80',
        shortDescription: 'A legume that improves soil health while providing nutritious pods.',
        fullDescription:
            'Green beans fix nitrogen and grow quickly. Best grown in moderate climates with support for pole varieties.',
        confidence: 75,
        category: 'legumes',
        growthPeriod: '50-60 days for bush varieties',
        waterRequirements: 'Medium - consistent moisture, especially during flowering',
        soilRequirements: 'Well-drained soil with moderate fertility',
        idealTemperature: '18-24°C',
    },
    {
        id: '6',
        name: 'Basil',
        image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80',
        shortDescription: 'A fragrant herb used in many cuisines, especially Italian.',
        fullDescription:
            'Basil is a leafy herb great for warm climates. Grows fast and benefits from frequent trimming to delay flowering.',
        confidence: 70,
        category: 'herbs',
        growthPeriod: '3-4 weeks until first harvest',
        waterRequirements: 'Medium - keep soil consistently moist but not soggy',
        soilRequirements: 'Rich, well-draining soil',
        idealTemperature: '24-29°C',
    },
];

const CropRecomandation = ({ sortBy,
    setSortBy,
    filterCategory,
    setFilterCategory, onCropClick, }) => {

    const filteredCrops = mockCrops.filter(
        (crop) => filterCategory === 'all' || crop.category === filterCategory
    );

    const sortedCrops = [...filteredCrops].sort((a, b) => {
        if (sortBy === 'confidence') {
            return b.confidence - a.confidence;
        } else {
            return a.name.localeCompare(b.name);
        }
    });
    return (
        <section id="soil-analysis" className="py-16 px-4 md:px-8 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <div className='mb-12'>
                    <h2 className="text-3xl font-bold text-gray-800">Recommended Crops</h2>
                    <p className="text-gray-600 mt-2 ">
                        Tailored crop recommendations based on your selections to help you farm smarter.
                    </p>
                </div>

                {/* <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full" >
                    {filteredCrops.length} crops found
                </span> */}


                <FilterSort  sortBy={sortBy} setSortBy={setSortBy} filterCategory={filterCategory} setFilterCategory={setFilterCategory} />
                <hr className="my-6 border-t border-gray-200" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sortedCrops.map(crop => <CropCard key={crop.id} crop={crop} onClick={onCropClick} />)}
                </div>
                {sortedCrops.length === 0 && <div className="text-center py-10">
                    <p className="text-gray-500">
                        No crops match your current filters.
                    </p>
                </div>}
            </div>
        </section>

    )
}

export default CropRecomandation
