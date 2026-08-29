import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between">
        <Link to="/" className="text-2xl font-bold">
          CareerHub
        </Link>

        <nav className="flex gap-6">
          <Link to="/">Home</Link>

          <Link to="/jobs">Lowongan Kerja</Link>

          <Link to="/profile">Profile</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
