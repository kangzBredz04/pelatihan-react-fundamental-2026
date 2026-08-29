import { useParams } from "react-router-dom";

const JobDetail = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Detail Lowongan</h1>

      <p>ID Lowongan: {id}</p>
    </div>
  );
};

export default JobDetail;
