const JobCard = ({
    title,
    company,
    location,
    salary,
}) => {
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

            <button className="mt-5 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-300">
                Lihat Detail
            </button>
        </div>
    );
};

export default JobCard;