// import { jobs } from "../job";
import JobCard from "./JobCard";
// import { jobs } from "../job.js";

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

    return (
        <section className="job-list">

            <h2>Daftar Lowongan Kerja</h2>

            <div>

                {jobs.map((job) => (

                    <div key={job.id} className="bg-blue-200 my-2">
                        <h3>{job.companyName}</h3>
                        <p className="text-red-600"><strong>Perusahaan :</strong> {job.company}</p>
                        <p><strong>Lokasi :</strong> {job.location}</p>
                        <p><strong>Gaji :</strong> {job.salary}</p>
                        <p className={job.status ? "text-green-600 font-semibold" : "text-red-600 font-semibold"}>{job.status ? "Open" : "Closed"}</p>
                        <button className="font-extrabold">Lihat Detail</button>
                    </div>
                ))}

            </div>

        </section>
    );
};

export default JobList;