import { useState } from "react";

const JobCard = ({
    title,
    company,
    location,
    salary,
    status,
}) => {

    const [isApplied, setIsApplied] = useState(false);

    const handleApply = () => {
        setIsApplied(true);
    };

    return (
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition duration-300">

            <h2 className="text-2xl font-bold text-gray-800">
                {title}
            </h2>

            <p className="text-gray-600 mt-2">
                {company}
            </p>

            <p className="text-gray-500">
                📍 {location}
            </p>

            <p className="text-green-600 font-semibold mt-2">
                💰 {salary}
            </p>

            <p
                className={`mt-2 font-semibold ${status
                    ? "text-green-600"
                    : "text-red-600"
                    }`}
            >
                Status: {status ? "Open" : "Closed"}
            </p>

            <button
                onClick={handleApply}
            >
                {
                    isApplied
                        ? "Sudah Dilamar"
                        : "Lamar Sekarang"
                }
            </button>

        </div>
    );
};

export default JobCard;