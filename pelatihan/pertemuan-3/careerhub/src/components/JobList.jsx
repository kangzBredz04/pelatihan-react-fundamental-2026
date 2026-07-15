import JobCard from "./JobCard";

const JobList = () => {
    return (
        <section>
            <h2>Daftar Lowongan Kerja</h2>
            <JobCard
                title="Frontend Developer"
                company="PT ABC Indonesia"
                location="Bandung"
                salary="Rp8.000.000"
            />
            <JobCard
                title="Backend Developer"
                company="PT DEF Indonesia"
                location="Jakarta"
                salary="Rp9.000.000"
            />
            <JobCard
                title="Fullstack Developer"
                company="PT GHI Indonesia"
                location="Surabaya"
                salary="Rp10.000.000"
            />

        </section>
    );
};

export default JobList;