import JobCard from "./JobCard";

const JobList = ({ jobs }) => {
    return (
        <section className="space-y-5">
            {
                jobs.map((job) => (
                    <JobCard
                        key={job.id}
                        title={job.title}
                        company={job.company}
                        location={job.location}
                        salary={job.salary}
                        status={job.status}
                    />
                ))
            }
        </section>
    );
};

export default JobList;