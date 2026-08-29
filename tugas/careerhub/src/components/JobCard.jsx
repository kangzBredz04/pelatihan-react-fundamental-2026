import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  return (
    <div className="border rounded-xl p-5">
      <h3 className="text-xl font-bold">{job.jobName}</h3>

      <p>{job.company}</p>

      <p>{job.location}</p>

      <p>{job.salary}</p>

      <Link
        to={`/jobs/${job.id}`}
        className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        Lihat Detail
      </Link>
    </div>
  );
};

export default JobCard;
