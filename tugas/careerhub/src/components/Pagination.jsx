const Pagination = ({
    currentPage,
    totalPages,
    onPageChange
}) => {
    const pageNumbers = Array.from(
        { length: totalPages },
        (_, index) => index + 1
    );
    return (
        <div className="flex justify-center items-center gap-2 mt-6">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="
px-4 py-2
rounded-lg
border
disabled:opacity-40
disabled:cursor-not-allowed
"
            >
                Previous
            </button>
            {pageNumbers.map((page) => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={`
px-4 py-2
rounded-lg
${currentPage === page
                            ? "bg-blue-600 text-white"
                            : "bg-gray-100 text-gray-700"
                        }
`}
                >
                    {page}
                </button>
            ))}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="
px-4 py-2
rounded-lg
border
disabled:opacity-40
disabled:cursor-not-allowed
"
            >
                Next
            </button>
        </div>
    );
};
export default Pagination;