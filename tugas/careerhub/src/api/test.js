// const numbers = [10, 20, 30, 40, 50];

// const result = numbers.filter(
//     (number) => number > 25
// );

// console.log(result);

// // [30, 40, 50]

// const bandungJobs = jobs.filter(
//     (job) => job.location === "Bandung"
// );

// console.log(bandungJobs);

// const availableJobs = jobs.filter(
//     (job) => job.status === true
// );

// // Fullstack Developer
// // Frontend Developer

// // Fullstack Developer → true
// // Backend Developer    → false
// // Frontend Developer   → true

// // Fullstack Developer
// // Backend Developer
// // Frontend Developer

// // Frontend
// // frontend
// // FRONTEND


// // [10, 20, 30, 40, 50]

// const sortedJobs = [...jobs].sort(
//     (a, b) =>
//         a.jobName.localeCompare(b.jobName)
// );

// // Backend Developer
// // Frontend Developer
// // Fullstack Developer

// const sortedJobs = [...jobs].sort(
//     (a, b) =>
//         b.jobName.localeCompare(a.jobName)
// );

// const sortedJobs = [...jobs].sort(
//     (a, b) =>
//         a.company.localeCompare(b.company)
// );

// // PT. ABC Indonesia
// // PT. DEF Indonesia
// // PT. GHI Indonesia

// const sortedJobs = [...jobs].sort(
//     (a, b) =>
//         a.location.localeCompare(b.location)
// );

// // Bandung
// // Jakarta
// // Medan

// a.salary - b.salary

// const getSalaryValue = (salary) => {
//     return Number(
//         salary
//             .replace("Rp. ", "")
//             .replaceAll(".", "")
//     );
// };

// const sortedJobs = [...jobs].sort(
//     (a, b) =>
//         getSalaryValue(a.salary) -
//         getSalaryValue(b.salary)
// );

// const sortedJobs = [...jobs].sort(
//     (a, b) =>
//         getSalaryValue(b.salary) -
//         getSalaryValue(a.salary)
// );

// const nama = "Budi";
// const jurusan = "Teknik Informatika";
// let semester = 4;

// semester = 5;

// console.log(nama); // Budi
// console.log(jurusan); // Teknik Informatika
// console.log(semester); // 5

// let nama = "Andi";
// nama = "Budi";
// console.log(nama); // Budi

// const kampus = "Universitas Nasional PASIM Bandung";
// kampus = "Universitas Nasional PASIM Jakarta"; // error

// function sapa() {
//     console.log("Halo");
// }

// function tambah(a, b) {
//     return a + b;
// }

// const tambah = (a, b) => {
//     return a + b;
// }

// const tambah = (a, b) => a + b;

// const home = () => {
//     return h1("Selamat Datang di CareerHub");
// }

// const hitungLuas = (panjang, lebar) => {
//     return panjang * lebar;
// }

// conole.log(hitungLuas(10, 5)); // 50

// const nama = "Andi";
// console.log("Halo, " + nama + "!"); // Halo, Andi!

// const nama = "Andi";
// console.log(`Halo, ${nama}!`); // Halo, Andi!

// const produk = "Laptop";
// const harga = 15000000;
// console.log(`Produk: ${produk}, Harga: Rp. ${harga.toLocaleString("id-ID")}`);
// // Produk: Laptop, Harga: Rp. 15.000.000

// const mahasiswa = {
//     nama: "Andi",
//     jurusan: "Teknik Informatika",
//     semester: 4
// };

// const nama = mahasiswa.nama;
// const jurusan = mahasiswa.jurusan;
// const semester = mahasiswa.semester;

// const { nama, jurusan, semester } = mahasiswa;

// const warna = ["Merah", "Hijau", "Biru"];
// const [warna1, warna2, warna3] = warna;

// const profile = ({ nama, jurusan, semester }) => {
//     return (
//         <div>
//             <h1>{nama}</h1>
//             <p>{jurusan}</p>
//             <p>{semester}</p>
//         </div>
//     )
// }

// props.nama
// props.jurusan
// props.semester

// const mahasiwa = {
//     nama = "Wahyu",
//     pekerjaan = "Middleware Engineer",
//     kota = "Bandung"
// }

// const { nama, pekerjaan, kota } = user;

// console.log(nama);
// console.log(pekerjaan);
// console.log(kota);

// const angka1 = [1, 2, 3];
// const angka2 = [...angka1];

// console.log(angka2); //Output: [1, 2, 3]

// const totalPages = Math.ceil(
//     jobs.length / jobsPerPage
// );


// const startIndex =
//     (currentPage - 1) * jobsPerPage;

// const endIndex =
//     startIndex + jobsPerPage;

// const currentJobs =
//     jobs.slice(startIndex, endIndex);


// import { useState } from "react";

// const JobList = ({ jobs }) => {

//     const [currentPage, setCurrentPage] =
//         useState(1);

//     const jobsPerPage = 2;

//     return (
//         <div>
//             {/* Daftar Job */}
//         </div>
//     );
// };

// export default JobList;

// const startIndex =
//     (currentPage - 1) * jobsPerPage;

// const endIndex =
//     startIndex + jobsPerPage;

// const currentJobs =
//     jobs.slice(startIndex, endIndex);

// {currentJobs.map((job) => (
//     <div key={job.id}>
//         <h3>{job.jobName}</h3>

//         <p>{job.company}</p>

//         <p>{job.location}</p>

//         <p>{job.salary}</p>
//     </div>
// ))}


// const pageNumbers = Array.from(
//     { length: totalPages },
//     (_, index) => index + 1
// );

// <button
//     key={page}
//     onClick={() => setCurrentPage(page)}
//     className={`
//         px-4
//         py-2
//         rounded-lg
//         ${
//             currentPage === page
//                 ? "bg-blue-600 text-white"
//                 : "bg-gray-100 text-gray-700"
//         }
//     `}
// >
//     {page}
// </button>

{/* <button
    onClick={() => setCurrentPage(currentPage - 1)}
>
    Previous
</button> */}

{/* <button
    onClick={() => setCurrentPage(currentPage - 1)}
    disabled={currentPage === 1}
>
    Previous
</button> */}

{/* <button
    onClick={() => setCurrentPage(currentPage + 1)}
>
    Next
</button> */}

{/* <button
    onClick={() => setCurrentPage(currentPage + 1)}
    disabled={currentPage === totalPages}
>
    Next
</button> */}

{/* <div className="flex items-center gap-2">

    <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 rounded-lg bg-gray-200 disabled:opacity-50"
    >
        Previous
    </button>

    {pageNumbers.map((page) => (
        <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-4 py-2 rounded-lg ${
                currentPage === page
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700"
            }`}
        >
            {page}
        </button>
    ))}

    <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 rounded-lg bg-gray-200 disabled:opacity-50"
    >
        Next
    </button>

</div> */}


// const Pagination = ({
//     currentPage,
//     totalPages,
//     onPageChange
// }) => {

//     const pageNumbers = Array.from(
//         { length: totalPages },
//         (_, index) => index + 1
//     );

//     return (
//         <div className="flex justify-center items-center gap-2 mt-6">

//             <button
//                 onClick={() => onPageChange(currentPage - 1)}
//                 disabled={currentPage === 1}
//                 className="
//                     px-4 py-2
//                     rounded-lg
//                     border
//                     disabled:opacity-40
//                     disabled:cursor-not-allowed
//                 "
//             >
//                 Previous
//             </button>

//             {pageNumbers.map((page) => (
//                 <button
//                     key={page}
//                     onClick={() => onPageChange(page)}
//                     className={`
//                         px-4 py-2
//                         rounded-lg
//                         ${
//                             currentPage === page
//                                 ? "bg-blue-600 text-white"
//                                 : "bg-gray-100 text-gray-700"
//                         }
//                     `}
//                 >
//                     {page}
//                 </button>
//             ))}

//             <button
//                 onClick={() => onPageChange(currentPage + 1)}
//                 disabled={currentPage === totalPages}
//                 className="
//                     px-4 py-2
//                     rounded-lg
//                     border
//                     disabled:opacity-40
//                     disabled:cursor-not-allowed
//                 "
//             >
//                 Next
//             </button>

//         </div>
//     );
// };

// export default Pagination;


// import { useState } from "react";
// import Pagination from "./Pagination";

// const JobList = ({ jobs }) => {

//     const [currentPage, setCurrentPage] = useState(1);

//     const jobsPerPage = 2;

//     const totalPages = Math.ceil(
//         jobs.length / jobsPerPage
//     );

//     const startIndex =
//         (currentPage - 1) * jobsPerPage;

//     const endIndex =
//         startIndex + jobsPerPage;

//     const currentJobs =
//         jobs.slice(startIndex, endIndex);

//     return (
//         <div>

//             <div className="grid gap-4">

//                 {currentJobs.map((job) => (
//                     <div
//                         key={job.id}
//                         className="p-5 border rounded-xl"
//                     >
//                         <h3 className="text-xl font-bold">
//                             {job.jobName}
//                         </h3>

//                         <p>{job.company}</p>

//                         <p>{job.location}</p>

//                         <p>{job.salary}</p>
//                     </div>
//                 ))}

//             </div>

//             <Pagination
//                 currentPage={currentPage}
//                 totalPages={totalPages}
//                 onPageChange={setCurrentPage}
//             />

//         </div>
//     );
// };

// export default JobList;


{/* <Pagination
    currentPage={currentPage}
    totalPages={totalPages}
    onPageChange={setCurrentPage}
/> */}

// {
//     id: 1,
//     jobName: "Fullstack Developer",
//     company: "PT. ABC Indonesia",
//     location: "Bandung",
//     salary: "Rp. 8.000.000",
//     status: true
// }

// const JobCard = ({ job, onEdit }) => {

//     return (
//         <div className="border rounded-xl p-5">

//             <h3 className="text-xl font-bold">
//                 {job.jobName}
//             </h3>

//             <p>{job.company}</p>

//             <p>{job.location}</p>

//             <p>{job.salary}</p>

//             <button
//                 onClick={() => onEdit(job)}
//                 className="mt-4 px-4 py-2 rounded-lg bg-blue-600 text-white"
//             >
//                 Edit
//             </button>

//         </div>
//     );
// };

// export default JobCard;


// {
//     id: 1,
//     jobName: "Fullstack Developer",
//     company: "PT. ABC Indonesia",
//     location: "Bandung",
//     salary: "Rp. 8.000.000",
//     status: true
// }

// {
//     id: 1,
//     jobName: "Fullstack Developer",
//     company: "PT. ABC Indonesia",
//     location: "Bandung",
//     salary: "Rp. 8.000.000",
//     status: true
// }

// {editingJob && (
//     <EditForm job={editingJob} />
// )}

// const EditForm = ({ job, onSave, onCancel }) => {

//     return (
//         <div className="p-6 border rounded-xl">

//             <h2 className="text-xl font-bold mb-4">
//                 Edit Lowongan
//             </h2>

//             <div className="space-y-4">

//                 <div>
//                     <label>
//                         Nama Pekerjaan
//                     </label>

//                     <input
//                         type="text"
//                         value={job.jobName}
//                         className="w-full border rounded-lg px-4 py-2"
//                     />
//                 </div>

//                 <div>
//                     <label>
//                         Perusahaan
//                     </label>

//                     <input
//                         type="text"
//                         value={job.company}
//                         className="w-full border rounded-lg px-4 py-2"
//                     />
//                 </div>

//                 <div>
//                     <label>
//                         Lokasi
//                     </label>

//                     <input
//                         type="text"
//                         value={job.location}
//                         className="w-full border rounded-lg px-4 py-2"
//                     />
//                 </div>

//                 <div>
//                     <label>
//                         Salary
//                     </label>

//                     <input
//                         type="text"
//                         value={job.salary}
//                         className="w-full border rounded-lg px-4 py-2"
//                     />
//                 </div>

//             </div>

//         </div>
//     );
// };

// export default EditForm;


// const [formData, setFormData] = useState({
//     jobName: "",
//     company: "",
//     location: "",
//     salary: "",
//     status: true
// });

// useEffect(() => {

//     if (job) {
//         setFormData({
//             jobName: job.jobName,
//             company: job.company,
//             location: job.location,
//             salary: job.salary,
//             status: job.status
//         });
//     }

// }, [job]);

{/* <input
    type="text"
    value={formData.jobName}
    onChange={(e) =>
        setFormData({
            ...formData,
            jobName: e.target.value
        })
    }
/> */}

// {
//     jobName: "Fullstack Developer",
//     company: "PT. ABC Indonesia",
//     location: "Bandung"
// }

// setFormData({
//     ...formData,
//     jobName: "Backend Developer"
// });


// {
//     jobName: "Backend Developer",
//     company: "PT. ABC Indonesia",
//     location: "Bandung"
// }

{/* <button
    onClick={handleSubmit}
    className="px-4 py-2 bg-blue-600 text-white rounded-lg"
>
    Simpan
</button> */}


// const handleSubmit = () => {

//     const updatedJob = {
//         ...job,
//         ...formData
//     };

//     onSave(updatedJob);
// };

// {
//     ...job,
//     ...formData
// }

// {
//     id: 1,
//     jobName: "Fullstack Developer",
//     company: "PT. ABC Indonesia",
//     location: "Bandung",
//     salary: "Rp. 8.000.000",
//     status: true
// }

// {
//     id: 1,
//     jobName: "Fullstack Developer",
//     company: "PT. ABC Indonesia",
//     location: "Jakarta",
//     salary: "Rp. 10.000.000",
//     status: true
// }

// const handleUpdateJob = (updatedJob) => {

//     setJobList(
//         jobList.map((job) =>
//             job.id === updatedJob.id
//                 ? updatedJob
//                 : job
//         )
//     );

//     setEditingJob(null);
// };

// [
//     {
//         id: 1,
//         jobName: "Fullstack Developer"
//     },
//     {
//         id: 2,
//         jobName: "Backend Developer"
//     },
//     {
//         id: 3,
//         jobName: "Frontend Developer"
//     }
// ]

// jobList.map((job) =>
//     job.id === updatedJob.id
//         ? updatedJob
//         : job
// )

// [
//     {
//         id: 1,
//         jobName: "Fullstack Developer"
//     },
//     {
//         id: 2,
//         jobName: "Senior Backend Developer"
//     },
//     {
//         id: 3,
//         jobName: "Frontend Developer"
//     }
// ]


// import { useState } from "react";
// import JobCard from "./JobCard";
// import EditForm from "./EditForm";

// const JobList = ({ jobs }) => {

//     const [jobList, setJobList] = useState(jobs);

//     const [editingJob, setEditingJob] = useState(null);

//     const handleEdit = (job) => {
//         setEditingJob(job);
//     };

//     const handleUpdateJob = (updatedJob) => {

//         setJobList(
//             jobList.map((job) =>
//                 job.id === updatedJob.id
//                     ? updatedJob
//                     : job
//             )
//         );

//         setEditingJob(null);
//     };

//     return (
//         <div>

//             <div className="grid gap-4">

//                 {jobList.map((job) => (
//                     <JobCard
//                         key={job.id}
//                         job={job}
//                         onEdit={handleEdit}
//                     />
//                 ))}

//             </div>

//             {editingJob && (
//                 <EditForm
//                     job={editingJob}
//                     onSave={handleUpdateJob}
//                     onCancel={() => setEditingJob(null)}
//                 />
//             )}

//         </div>
//     );
// };

// export default JobList;

// const user = {
//     name: "Wahyu",
//     email: "wahyu@example.com"
// };

// import { createContext } from "react";

// const UserContext = createContext();

// export default UserContext;


// import { createContext } from "react";

// const UserContext = createContext({
//     name: "",
//     email: ""
// });

// export default UserContext;


// import { createContext, useState } from "react";

// export const UserContext = createContext();

// const UserProvider = ({ children }) => {

//     const [user, setUser] = useState({
//         name: "Wahyu",
//         email: "wahyu@example.com"
//     });

//     return (
//         <UserContext.Provider
//             value={{
//                 user,
//                 setUser
//             }}
//         >
//             {children}
//         </UserContext.Provider>
//     );
// };

// export default UserProvider;


// value={{
//     user,
//     setUser
// }}

// import UserProvider from "./context/UserContext";
// import Header from "./components/Header";
// import JobList from "./components/JobList";

// function App() {

//     return (
//         <UserProvider>

//             <Header />

//             <main>
//                 <JobList />
//             </main>

//         </UserProvider>
//     );
// }

// export default App;

// import { useContext } from "react";
// import { UserContext } from "../context/UserContext";

// const Header = () => {

//     const { user } = useContext(UserContext);

//     return (
//         <header>
//             <h1>CareerHub</h1>

//             <p>
//                 Halo, {user.name}
//             </p>
//         </header>
//     );
// };

// export default Header;

// const [user, setUser] = useState({
//     name: "Wahyu",
//     email: "wahyu@example.com"
// });

// value={{
//     user,
//     setUser
// }}

// import { useContext } from "react";
// import { UserContext } from "../context/UserContext";

// const Profile = () => {

//     const { user, setUser } =
//         useContext(UserContext);

//     const handleChangeName = () => {

//         setUser({
//             ...user,
//             name: "Wahyu Developer"
//         });

//     };

//     return (
//         <div>

//             <h2>{user.name}</h2>

//             <p>{user.email}</p>

//             <button
//                 onClick={handleChangeName}
//                 className="px-4 py-2 rounded-lg bg-blue-600 text-white"
//             >
//                 Ubah Nama
//             </button>

//         </div>
//     );
// };

// export default Profile;

// const user = {
//     name: "Wahyu",
//     email: "wahyu@example.com"
// };


// const Home = () => {
//     return (
//         <div>
//             <h1>CareerHub</h1>

//             <p>
//                 Temukan pekerjaan impianmu
//             </p>
//         </div>
//     );
// };

// export default Home;

// const Jobs = () => {
//     return (
//         <div>
//             <h1>Daftar Lowongan Kerja</h1>

//             <p>
//                 Temukan berbagai lowongan kerja
//                 yang tersedia.
//             </p>
//         </div>
//     );
// };

// export default Jobs;

// const Profile = () => {
//     return (
//         <div>
//             <h1>Profile</h1>

//             <p>
//                 Halaman profile pengguna.
//             </p>
//         </div>
//     );
// };

// export default Profile;

// import {
//     BrowserRouter,
//     Routes,
//     Route
// } from "react-router-dom";


{/* <BrowserRouter>

    <Routes>

        <Route
            path="/"
            element={<Home />}
        />

        <Route
            path="/jobs"
            element={<Jobs />}
        />

        <Route
            path="/profile"
            element={<Profile />}
        />

    </Routes>

</BrowserRouter> */}


{/* <Route
    path="/"
    element={<Home />}
/> */}


{/* <Route
    path="/jobs"
    element={<Jobs />}
/> */}


{/* <Route
    path="/profile"
    element={<Profile />}
/> */}

// import {
//     BrowserRouter,
//     Routes,
//     Route
// } from "react-router-dom";

// import Home from "./pages/Home";
// import Jobs from "./pages/Jobs";
// import Profile from "./pages/Profile";

// const App = () => {

//     return (
//         <BrowserRouter>

//             <Routes>

//                 <Route
//                     path="/"
//                     element={<Home />}
//                 />

//                 <Route
//                     path="/jobs"
//                     element={<Jobs />}
//                 />

//                 <Route
//                     path="/profile"
//                     element={<Profile />}
//                 />

//             </Routes>

//         </BrowserRouter>
//     );
// };

// export default App;

{/* <nav>

    <Link to="/">
        Home
    </Link>

    <Link to="/jobs">
        Lowongan Kerja
    </Link>

    <Link to="/profile">
        Profile
    </Link>

</nav> */}

// import { Link } from "react-router-dom";

// const Header = () => {

//     return (
//         <header className="border-b">

//             <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between">

//                 <Link
//                     to="/"
//                     className="text-2xl font-bold"
//                 >
//                     CareerHub
//                 </Link>

//                 <nav className="flex gap-6">

//                     <Link to="/">
//                         Home
//                     </Link>

//                     <Link to="/jobs">
//                         Lowongan Kerja
//                     </Link>

//                     <Link to="/profile">
//                         Profile
//                     </Link>

//                 </nav>

//             </div>

//         </header>
//     );
// };

// export default Header;

// import {
//     BrowserRouter,
//     Routes,
//     Route
// } from "react-router-dom";

// import Header from "./components/Header";

// import Home from "./pages/Home";
// import Jobs from "./pages/Jobs";
// import Profile from "./pages/Profile";

// const App = () => {

//     return (
//         <BrowserRouter>

//             <Header />

//             <main className="max-w-7xl mx-auto px-6 py-8">

//                 <Routes>

//                     <Route
//                         path="/"
//                         element={<Home />}
//                     />

//                     <Route
//                         path="/jobs"
//                         element={<Jobs />}
//                     />

//                     <Route
//                         path="/profile"
//                         element={<Profile />}
//                     />

//                 </Routes>

//             </main>

//         </BrowserRouter>
//     );
// };

// export default App;

{/* <Link to="/jobs">
    Lowongan Kerja
</Link> */}

{/* <Link to="/profile">
    Profile
</Link> */}

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
//     }
// ];

{/* <Route
    path="/jobs/:id"
    element={<JobDetail />}
/> */}

// import { Link } from "react-router-dom";

// const JobCard = ({ job }) => {

//     return (
//         <div className="border rounded-xl p-5">

//             <h3 className="text-xl font-bold">
//                 {job.jobName}
//             </h3>

//             <p>{job.company}</p>

//             <p>{job.location}</p>

//             <p>{job.salary}</p>

//             <Link
//                 to={`/jobs/${job.id}`}
//                 className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
//             >
//                 Lihat Detail
//             </Link>

//         </div>
//     );
// };

// export default JobCard;

// import { useParams } from "react-router-dom";

// const JobDetail = () => {

//     const { id } = useParams();

//     return (
//         <div>

//             <h1>Detail Lowongan</h1>

//             <p>
//                 ID Lowongan: {id}
//             </p>

//         </div>
//     );
// };

// export default JobDetail;

// {
//     "scripts": {
//         "dev": "vite",
//         "build": "vite build",
//         "preview": "vite preview"
//     }
// }


// node -v

// v24.17.0

// npm -v

// 11.13.0

// mkdir belajar-node

// cd belaja-node

// npm init -y

// npm i react-router-dom

// node_modules/

// package-lock.json

// npm run start

// npm install -g pnpm

// pnpm -v

// 11.8.0


// cd react-fundamental

// pnpm init

// pnpm update

// pnpm list

// pnpm create vite

// cd careerhub

// pnpm dev

// http://localhost:5173