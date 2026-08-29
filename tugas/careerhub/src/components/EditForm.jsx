import { useEffect, useState } from "react";

const EditForm = ({ job, onSave }) => {
  const [formData, setFormData] = useState({
    jobName: "",
    company: "",
    location: "",
    salary: "",
    status: true,
  });

  useEffect(() => {
    if (job) {
      setFormData({
        jobName: job.jobName,
        company: job.company,
        location: job.location,
        salary: job.salary,
        status: job.status,
      });
    }
  }, [job]);

  const handleSubmit = () => {
    const updatedJob = {
      ...job,
      ...formData,
    };
    onSave(updatedJob);
  };
  return (
    <div className="p-6 border rounded-xl">
      <h2 className="text-xl font-bold mb-4">Edit Lowongan</h2>
      <div className="space-y-4">
        <div>
          <label>Nama Pekerjaan</label>
          <input
            type="text"
            value={formData.jobName}
            onChange={(e) =>
              setFormData({
                ...formData,
                jobName: e.target.value,
              })
            }
          />
        </div>
        <div>
          <label>Perusahaan</label>
          <input
            type="text"
            value={formData.company}
            onChange={(e) =>
              setFormData({
                ...formData,
                company: e.target.value,
              })
            }
          />
        </div>
        <div>
          <label>Lokasi</label>
          <input
            type="text"
            value={formData.location}
            onChange={(e) =>
              setFormData({
                ...formData,
                location: e.target.value,
              })
            }
          />
        </div>
        <div>
          <label>Salary</label>
          <input
            type="text"
            value={formData.salary}
            onChange={(e) =>
              setFormData({
                ...formData,
                salary: e.target.value,
              })
            }
          />
        </div>

        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          Simpan
        </button>
      </div>
    </div>
  );
};
export default EditForm;
