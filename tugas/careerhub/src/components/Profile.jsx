import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Profile = () => {
  const { user, setUser } = useContext(UserContext);

  const handleChangeName = () => {
    setUser({
      ...user,
      name: "Wahyu Developer",
    });
  };

  return (
    <div>
      <h1>Bagian Profile</h1>
      <h2>{user.name}</h2>

      <p>{user.email}</p>

      <button
        onClick={handleChangeName}
        className="px-4 py-2 rounded-lg bg-blue-600 text-white"
      >
        Ubah Nama
      </button>
    </div>
  );
};

export default Profile;
