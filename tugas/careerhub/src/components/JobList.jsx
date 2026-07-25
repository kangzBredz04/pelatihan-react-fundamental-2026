import JobCard from "./JobCard";

const JobList = () => {
    return (
        <section className="job-list">

            <h2>Daftar Lowongan Kerja</h2>

            <div className="jobs">

                <JobCard />

                <JobCard />

                <JobCard />

            </div>

        </section>
    );
};

export default JobList;