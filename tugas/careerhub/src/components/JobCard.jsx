const JobCard = ({ job, onEdit }) => {
    return (
        <div className="border rounded-xl p-5">
            <h3 className="text-xl font-bold">
                {job.jobName}
            </h3>
            <p>{job.company}</p>
            <p>{job.location}</p>
            <p>{job.salary}</p>
            <button
                onClick={() => onEdit(job)}
                className="mt-4 px-4 py-2 rounded-lg bg-blue-600 text-white"
            >
                Edit
            </button>
        </div>
    );
};
export default JobCard;
