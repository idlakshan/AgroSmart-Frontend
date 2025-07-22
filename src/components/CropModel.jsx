import { XIcon } from 'lucide-react';

export const CropModal = ({ crop, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 backdrop-blur-sm">

            <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center border-b p-4">
                    <h2 className="text-2xl font-bold text-gray-800">{crop.name}</h2>
                    <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-100">
                        <XIcon size={24} />
                    </button>
                </div>
                <div className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-1/3">
                            <img
                                src={crop.image}
                                alt={crop.name}
                                className="w-full rounded-lg object-cover h-64"
                            />
                            <div className="mt-4 bg-green-50 rounded-lg p-3">
                                <div className="flex justify-between">
                                    <span className="text-gray-700">Confidence:</span>
                                    <span className="font-semibold text-green-700">
                                        {crop.confidence}%
                                    </span>
                                </div>
                                <div className="flex justify-between mt-2">
                                    <span className="text-gray-700">Category:</span>
                                    <span className="font-semibold">{crop.category}</span>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-2/3">
                            <h3 className="text-xl font-semibold mb-3">Description</h3>
                            <p className="text-gray-700 mb-6">{crop.fullDescription}</p>
                            <h3 className="text-xl font-semibold mb-3">
                                Growing Requirements
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-blue-50 p-3 rounded-lg">
                                    <h4 className="font-medium text-blue-800 mb-1">
                                        Growth Period
                                    </h4>
                                    <p>{crop.growthPeriod}</p>
                                </div>
                                <div className="bg-blue-50 p-3 rounded-lg">
                                    <h4 className="font-medium text-blue-800 mb-1">
                                        Water Requirements
                                    </h4>
                                    <p>{crop.waterRequirements}</p>
                                </div>
                                <div className="bg-blue-50 p-3 rounded-lg">
                                    <h4 className="font-medium text-blue-800 mb-1">
                                        Soil Requirements
                                    </h4>
                                    <p>{crop.soilRequirements}</p>
                                </div>
                                <div className="bg-blue-50 p-3 rounded-lg">
                                    <h4 className="font-medium text-blue-800 mb-1">
                                        Ideal Temperature
                                    </h4>
                                    <p>{crop.idealTemperature}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
