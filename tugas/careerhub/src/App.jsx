import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";

import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Profile from "./pages/Profile";
import JobDetail from "./pages/JobDetail";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <main className="max-w-7xl mx-auto px-6 py-8">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/jobs" element={<Jobs />} />

          <Route path="/profile" element={<Profile />} />

          <Route path="/jobs/:id" element={<JobDetail />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
