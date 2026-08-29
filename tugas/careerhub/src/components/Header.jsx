import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Header = () => {
  const { user } = useContext(UserContext);

  return (
    <header>
      <h1>CareerHub</h1>

      <p>Halo, {user.name}</p>
    </header>
  );
};

export default Header;
