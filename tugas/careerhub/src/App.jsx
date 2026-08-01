import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import JobList from "./components/JobList";
import Footer from "./components/Footer";

const jobs = [
  {
    id: 1,
    jobName: "Fullstack Developer",
    company: "PT. ABC Indonesia",
    location: "Bandung",
    salary: "Rp. 8.000.000",
    status: true
  },
  {
    id: 2,
    jobName: "Backend Developer",
    company: "PT. DEF Indonesia",
    location: "Jakarta",
    salary: "Rp. 8.000.000",
    status: false
  },
  {
    id: 3,
    jobName: "Frontend Developer",
    company: "PT. GHI Indonesia",
    location: "Medan",
    salary: "Rp. 8.000.000",
    status: true
  }
];

function App() {
  return (
    <>
      <Header />
      <Hero />
      <JobList jobs={jobs} />
      
      <Footer />
    </>
  );
}

export default App;