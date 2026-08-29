// import { useState } from "react";

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


// const getSalaryValue = (salary) => {
//     return Number(
//         salary
//             .replace("Rp. ", "")
//             .replaceAll(".", "")
//     );
// };

// const JobList = ({ jobs }) => {

//     const [search, setSearch] = useState("");
//     const [location, setLocation] = useState("Semua");
//     const [status, setStatus] = useState("Semua");
//     const [sortBy, setSortBy] = useState("default");

//     const filteredJobs = jobs.filter((job) => {

//         const matchesSearch =
//             job.jobName
//                 .toLowerCase()
//                 .includes(search.toLowerCase());

//         // jika mau seacrh beberapa data
//         // const keyword = search.toLowerCase();
//         // const matchesSearch =
//         //     job.jobName.toLowerCase().includes(keyword) ||
//         //     job.company.toLowerCase().includes(keyword) ||
//         //     job.location.toLowerCase().includes(keyword);

//         const matchesLocation =
//             location === "Semua" ||
//             job.location === location;

//         const matchesStatus =
//             status === "Semua" ||
//             (status === "Tersedia" &&
//                 job.status === true) ||
//             (status === "Ditutup" &&
//                 job.status === false);

//         return (
//             matchesSearch &&
//             matchesLocation &&
//             matchesStatus
//         );
//     });

//     const sortedJobs = [...filteredJobs];

//     if (sortBy === "name-asc") {
//         sortedJobs.sort(
//             (a, b) =>
//                 a.jobName.localeCompare(b.jobName)
//         );
//     }

//     if (sortBy === "name-desc") {
//         sortedJobs.sort(
//             (a, b) =>
//                 b.jobName.localeCompare(a.jobName)
//         );
//     }

//     if (sortBy === "salary-low") {
//         sortedJobs.sort(
//             (a, b) =>
//                 getSalaryValue(a.salary) -
//                 getSalaryValue(b.salary)
//         );
//     }

//     if (sortBy === "salary-high") {
//         sortedJobs.sort(
//             (a, b) =>
//                 getSalaryValue(b.salary) -
//                 getSalaryValue(a.salary)
//         );
//     }

//     const jobsPerPage = 2;

//     const [currentPage, setCurrentPage] = useState(1);

//     return (
//         <section className="space-y-6">

//             <div className="
//                 flex
//                 flex-col
//                 md:flex-row
//                 gap-4
//             ">

//                 <input
//                     type="text"
//                     placeholder="Cari lowongan..."
//                     value={search}
//                     onChange={(event) =>
//                         setSearch(event.target.value)
//                     }
//                     className="
//                         flex-1
//                         border
//                         rounded-xl
//                         px-4
//                         py-3
//                     "
//                 />

//                 <select
//                     value={location}
//                     onChange={(event) =>
//                         setLocation(event.target.value)
//                     }
//                     className="
//                         border
//                         rounded-xl
//                         px-4
//                         py-3
//                     "
//                 >
//                     <option value="Semua">
//                         Semua Lokasi
//                     </option>

//                     <option value="Bandung">
//                         Bandung
//                     </option>

//                     <option value="Jakarta">
//                         Jakarta
//                     </option>

//                     <option value="Medan">
//                         Medan
//                     </option>
//                 </select>

//                 <select
//                     value={status}
//                     onChange={(event) =>
//                         setStatus(event.target.value)
//                     }
//                     className="
//                         border
//                         rounded-xl
//                         px-4
//                         py-3
//                     "
//                 >
//                     <option value="Semua">
//                         Semua Status
//                     </option>

//                     <option value="Tersedia">
//                         Tersedia
//                     </option>

//                     <option value="Ditutup">
//                         Ditutup
//                     </option>
//                 </select>

//                 <select
//                     value={sortBy}
//                     onChange={(event) =>
//                         setSortBy(event.target.value)
//                     }
//                     className="
//                         border
//                         rounded-xl
//                         px-4
//                         py-3
//                     "
//                 >
//                     <option value="default">
//                         Urutan Default
//                     </option>

//                     <option value="name-asc">
//                         Nama A-Z
//                     </option>

//                     <option value="name-desc">
//                         Nama Z-A
//                     </option>

//                     <option value="salary-low">
//                         Gaji Terendah
//                     </option>

//                     <option value="salary-high">
//                         Gaji Tertinggi
//                     </option>
//                 </select>

//             </div>

//             <p className="text-gray-500">
//                 Menampilkan {sortedJobs.length} lowongan
//             </p>

//             <div className="
//                 grid
//                 grid-cols-1
//                 md:grid-cols-2
//                 lg:grid-cols-3
//                 gap-6
//             ">

//                 {sortedJobs.length > 0 ? (

//                     sortedJobs.map((job) => (

//                         <div
//                             key={job.id}
//                             className="
//                                 bg-white
//                                 rounded-2xl
//                                 shadow-md
//                                 p-6
//                                 hover:shadow-xl
//                                 transition
//                             "
//                         >

//                             <h3 className="
//                                 text-xl
//                                 font-bold
//                             ">
//                                 {job.jobName}
//                             </h3>

//                             <p className="
//                                 text-gray-600
//                                 mt-2
//                             ">
//                                 {job.company}
//                             </p>

//                             <p className="
//                                 text-gray-500
//                                 mt-1
//                             ">
//                                 📍 {job.location}
//                             </p>

//                             <p className="
//                                 font-semibold
//                                 text-blue-600
//                                 mt-4
//                             ">
//                                 {job.salary}
//                             </p>

//                             <p className="mt-2">
//                                 {job.status
//                                     ? "🟢 Lowongan Tersedia"
//                                     : "🔴 Lowongan Ditutup"
//                                 }
//                             </p>

//                         </div>

//                     ))

//                 ) : (

//                     <div className="
//                         col-span-full
//                         text-center
//                         py-12
//                     ">
//                         <p className="
//                             text-gray-500
//                             text-lg
//                         ">
//                             Lowongan tidak ditemukan.
//                         </p>
//                     </div>

//                 )}

//             </div>

//         </section>
//     );
// };

// export default JobList;


import { useState } from "react";
import JobCard from "./JobCard";
import EditForm from "./EditForm";

const JobList = ({ jobs }) => {
    const [jobList, setJobList] = useState(jobs);
    const [editingJob, setEditingJob] = useState(null);
    const handleEdit = (job) => {
        setEditingJob(job);
    };
    const handleUpdateJob = (updatedJob) => {
        setJobList(
            jobList.map((job) =>
                job.id === updatedJob.id
                    ? updatedJob
                    : job
            )
        );
        setEditingJob(null);
    };
    return (
        <div>
            <div className="grid gap-4">
                {jobList.map((job) => (
                    <JobCard
                        key={job.id}
                        job={job}
                        onEdit={handleEdit}
                    />
                ))}
            </div>
            {editingJob && (
                <EditForm
                    job={editingJob}
                    onSave={handleUpdateJob}
                    onCancel={() => setEditingJob(null)}
                />
            )}
        </div>
    );
};
export default JobList
