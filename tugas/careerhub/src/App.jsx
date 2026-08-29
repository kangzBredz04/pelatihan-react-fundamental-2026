import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import JobList from "./components/JobList";
import Footer from "./components/Footer";
import UserProvider from "./context/UserContext";
import Profile from "./components/Profile";

const jobs = [
  {
    id: 1,
    jobName: "Fullstack Developer",
    company: "PT. ABC Indonesia",
    location: "Bandung",
    salary: "Rp. 7.000.000",
    status: true,
  },
  {
    id: 2,
    jobName: "Backend Developer",
    company: "PT. DEF Indonesia",
    location: "Jakarta",
    salary: "Rp. 8.000.000",
    status: false,
  },
  {
    id: 3,
    jobName: "Frontend Developer",
    company: "PT. GHI Indonesia",
    location: "Medan",
    salary: "Rp. 5.000.000",
    status: true,
  },
  {
    id: 4,
    jobName: "Data Analyst",
    company: "PT. ABC Indonesia",
    location: "Bandung",
    salary: "Rp. 6.000.000",
    status: true,
  },
  {
    id: 5,
    jobName: "Frontend Developer",
    company: "PT. GHI Indonesia",
    location: "Medan",
    salary: "Rp. 5.000.000",
    status: true,
  },
  {
    id: 6,
    jobName: "Data Analyst",
    company: "PT. ABC Indonesia",
    location: "Bandung",
    salary: "Rp. 6.000.000",
    status: true,
  },
  {
    id: 7,
    jobName: "Data Analyst",
    company: "PT. ABC Indonesia",
    location: "Bandung",
    salary: "Rp. 6.000.000",
    status: true,
  },
];

function App() {
  return (
    <UserProvider>
      <Header />

      {/* <main>
        <JobList jobs={jobs} />
      </main> */}

      <Profile />
    </UserProvider>
  );
}

export default App;

{
  /* <>
  <Header />
  <Hero />
  <JobList jobs={jobs} />

  <Footer />
</>; */
}
