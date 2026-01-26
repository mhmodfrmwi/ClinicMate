import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createAppointment } from "@/rtk/slices/appointmentSlice";
import { fetchDoctors } from "@/rtk/slices/doctorsSlice";
import { toast } from "react-toastify";

const CreateAppointmentForm = () => {
  const [formData, setFormData] = useState({
    doctorName: "",
    patientName: "",
    date: "",
    time: "",
    reason: "",
    status: "Pending",
  });

  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const { doctors, loading } = useSelector((state) => state.doctors);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  useEffect(() => {
    dispatch(fetchDoctors());
  }, [dispatch]);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.doctorName ||
      !formData.patientName ||
      !formData.date ||
      !formData.time ||
      !formData.reason
    ) {
      setError("Please fill out all fields.");
      return;
    }

    dispatch(createAppointment(formData))
      .unwrap()
      .then((data) => {
        setError("");
        toast.success(data.message);
        setFormData({
          doctorName: "",
          patientName: "",
          date: "",
          time: "",
          reason: "",
          status: "Pending",
        });
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 dark:bg-slate-950">
      <div className="glass w-full max-w-lg rounded-3xl bg-white/50 p-8 shadow-2xl dark:bg-slate-900/50">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-800 dark:text-white">
          Create Appointment
        </h2>
        {error && (
            <div className="mb-4 rounded-xl bg-red-100 p-3 text-sm text-red-600 dark:bg-red-900/30 dark:text-red-400">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="doctorName"
              className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Doctor Name
            </label>
            <select
              name="doctorName"
              id="doctorName"
              value={formData.doctorName}
              onChange={handleChange}
              className="w-full rounded-xl border-gray-200 bg-white/50 px-4 py-3 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-slate-800/50 dark:text-white"
            >
              <option value="" disabled>
                Select a doctor
              </option>
              {doctors.map((doctor) => (
                <option key={doctor.id} value={doctor.name}>
                  {doctor.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="patientName"
              className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Patient Name
            </label>
            <input
              type="text"
              name="patientName"
              id="patientName"
              value={formData.patientName}
              onChange={handleChange}
              className="w-full rounded-xl border-gray-200 bg-white/50 px-4 py-3 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-slate-800/50 dark:text-white"
              placeholder="Enter patient's name"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="date"
                  className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full rounded-xl border-gray-200 bg-white/50 px-4 py-3 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-slate-800/50 dark:text-white"
                />
              </div>

              <div>
                <label
                  htmlFor="time"
                  className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Time
                </label>
                <input
                  type="time"
                  name="time"
                  id="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full rounded-xl border-gray-200 bg-white/50 px-4 py-3 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-slate-800/50 dark:text-white"
                />
              </div>
          </div>

          <div>
            <label
              htmlFor="reason"
              className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Reason
            </label>
            <input
              type="text"
              name="reason"
              id="reason"
              value={formData.reason}
              onChange={handleChange}
              className="w-full rounded-xl border-gray-200 bg-white/50 px-4 py-3 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-slate-800/50 dark:text-white"
              placeholder="Brief reason for appointment"
            />
          </div>

          <div>
            <label
              htmlFor="status"
              className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Status
            </label>
            <select
              name="status"
              id="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full rounded-xl border-gray-200 bg-white/50 px-4 py-3 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-slate-800/50 dark:text-white"
            >
              <option value="Pending">Pending</option>
              <option value="Confirmed">Confirmed</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 py-3 text-lg font-bold text-white shadow-lg transition-transform hover:scale-[1.02] hover:bg-blue-700"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAppointmentForm;
