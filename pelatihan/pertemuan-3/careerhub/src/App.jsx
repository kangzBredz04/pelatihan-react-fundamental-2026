import Header from "./components/Header";
import Hero from "./components/Hero";
import JobList from "./components/JobList";
import Footer from "./components/Footer";


const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "PT ABC Indonesia",
    location: "Bandung",
    salary: "Rp8.000.000",
    status: true
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "PT Maju Bersama",
    location: "Jakarta",
    salary: "Rp10.000.000",
    status: false
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "PT Creative Studio",
    location: "Yogyakarta",
    salary: "Rp7.500.000",
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

