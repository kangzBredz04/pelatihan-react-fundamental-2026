// import { jobs } from "../job";
import JobCard from "./JobCard";
// import { jobs } from "../job.js";
import { useState } from "react";

// const jobs = [
//     {
//         id: 1,
//         jobName: "Fullstack Developer",
//         company: "PT. ABC Indonesia",
//         location: "Bandung",
//         salary: "Rp. 8.000.000",
//         status: true
//     },
//     {
//         id: 2,
//         jobName: "Backend Developer",
//         company: "PT. DEF Indonesia",
//         location: "Jakarta",
//         salary: "Rp. 8.000.000",
//         status: false
//     },
//     {
//         id: 3,
//         jobName: "Frontend Developer",
//         company: "PT. GHI Indonesia",
//         location: "Medan",
//         salary: "Rp. 8.000.000",
//         status: true
//     }
// ];

const JobList = ({ jobs }) => {
    console.log(jobs);

    // onClick handler for job card
    const handleJobClick = (jobId) => {
        console.log(`Clicked on job with ID: ${jobId}`);
        alert(`Clicked on job with ID: ${jobId}`);
    }

    // onChange handler for search input
    const handleSearch = (event) => {
        const searchTerm = event.target.value.toLowerCase();
        const filteredJobs = jobs.filter((job) =>
            job.jobName.toLowerCase().includes(searchTerm) ||
            job.company.toLowerCase().includes(searchTerm) ||
            job.location.toLowerCase().includes(searchTerm)
        );
        console.log(filteredJobs);
    }

    // onSubmit handler for search form
    const handleSearchSubmit = (event) => {
        event.preventDefault();
        console.log("Search submitted");
    }

    const [isApplied, setIsApplied] = useState(false);
    const handleApplyClick = () => {
        setIsApplied(!isApplied);
        alert("Anda telah melamar pekerjaan ini!");
    }

    return (
        <section className="job-list">

            <h2>Daftar Lowongan Kerja</h2>

            <form onSubmit={handleSearchSubmit}>
                <input
                    type="text"
                    placeholder="Cari lowongan kerja..."
                    onChange={handleSearch}
                    className="border border-gray-300 rounded-md p-2 mb-4 w-full"
                />
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">
                    Cari
                </button>
            </form>

            <div>

                {jobs.map((job) => (

                    <div key={job.id} className="bg-blue-200 my-2">
                        <h3>{job.jobName}</h3>
                        <p className="text-red-600"><strong>Perusahaan :</strong> {job.company}</p>
                        <p><strong>Lokasi :</strong> {job.location}</p>
                        <p><strong>Gaji :</strong> {job.salary}</p>
                        <p className={job.status ? "text-green-600 font-semibold" : "text-red-600 font-semibold"}>{job.status ? "Open" : "Closed"}</p>

                        <button onClick={handleApplyClick}>
                            {isApplied ? "Sudah Melamar" : "Lamar Sekarang"}
                        </button>

                        <button className="font-extrabold" onClick={() => handleJobClick(job.id)}>
                            Lihat Detail
                        </button>
                    </div>
                ))}

            </div>

        </section>
    );
};

export default JobList;