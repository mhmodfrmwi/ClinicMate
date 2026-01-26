import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Appointment from "@/components/ui/Appointment";
import AdminSide from "./AdminSide";
import {
  fetchAppointments,
  deleteAppointment,
} from "@/rtk/slices/appointmentSlice";
import { fetchDoctors } from "@/rtk/slices/doctorsSlice";
import { toast } from "react-toastify";

const AdminPanel = () => {
  const dispatch = useDispatch();

  const { appointments, loading, error } = useSelector(
    (state) => state.appointments,
  );
  const { doctors } = useSelector((state) => state.doctors);

  useEffect(() => {
    dispatch(fetchAppointments());
    dispatch(fetchDoctors());
  }, [dispatch]);

  const handleDelete = (appointmentId) => {
    dispatch(deleteAppointment(appointmentId))
      .unwrap()
      .then(() => {
        toast.success("Appointment canceled successfully");
      })
      .catch((error) => {
        toast.error("Cancellation failed:", error);
      });
  };

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-slate-950">
      <AdminSide />

      <div className="flex-1 space-y-8 p-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="glass flex items-center justify-start space-x-4 rounded-2xl p-6 shadow-xl transition-transform hover:scale-105">
            <div className="rounded-full bg-blue-100 p-3 dark:bg-blue-900/30">
              <img
                src="../../assets/icons/doctorIcon.svg"
                alt="Doctors"
                className="h-8 w-8"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
                {doctors.length}
              </h1>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Doctors</p>
            </div>
          </div>

          <div className="glass flex items-center justify-start space-x-4 rounded-2xl p-6 shadow-xl transition-transform hover:scale-105">
            <div className="rounded-full bg-teal-100 p-3 dark:bg-teal-900/30">
              <img
                src="../../assets/icons/appointmentsIcon.svg"
                alt="Appointments"
                className="h-8 w-8"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
                {appointments.length}
              </h1>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Appointments</p>
            </div>
          </div>

          <div className="glass flex items-center justify-start space-x-4 rounded-2xl p-6 shadow-xl transition-transform hover:scale-105">
            <div className="rounded-full bg-purple-100 p-3 dark:bg-purple-900/30">
              <img
                src="../../assets/icons/patientsIcon.svg"
                alt="Patients"
                className="h-8 w-8"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
                {appointments.length}
              </h1>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Patients</p>
            </div>
          </div>
        </div>

        <div className="glass rounded-2xl p-8 shadow-xl">
          <div className="mb-6 flex items-center space-x-4 border-b border-gray-200 pb-4 dark:border-gray-700">
            <div className="rounded-lg bg-blue-50 p-2 dark:bg-slate-800">
              <img
                src="assets/icons/list_icon.svg"
                alt="Latest Appointment"
                className="h-6 w-6"
              />
            </div>
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
              Latest Appointments
            </h1>
          </div>

          {loading ? (
            <div className="text-center text-lg text-gray-600">
              Loading appointments...
            </div>
          ) : error ? (
            <div className="text-center text-lg text-red-500">
              Error: {error}
            </div>
          ) : appointments.length === 0 ? (
            <div className="text-center text-lg text-gray-600">
              No appointments available
            </div>
          ) : (
            <div className="space-y-4">
              {appointments.slice(0, 4).map((appointment) => (
                <div
                  key={appointment.id}
                  className="flex flex-col items-start justify-between gap-4 rounded-xl border border-transparent bg-white/50 p-4 transition-all hover:border-blue-200 hover:bg-white hover:shadow-md dark:bg-slate-800/50 dark:hover:border-blue-900 dark:hover:bg-slate-800 sm:flex-row sm:items-center"
                >
                  <div className="flex items-center space-x-4">
                    <div>
                      <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100">
                        {appointment.patientName}
                      </h2>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Dr. {appointment.doctorName}
                      </p>
                      <div className="mt-1 flex flex-wrap gap-2 text-xs text-gray-400">
                        <span className="rounded bg-gray-100 px-2 py-0.5 dark:bg-slate-700">📅 {appointment.date}</span>
                        <span className="rounded bg-gray-100 px-2 py-0.5 dark:bg-slate-700">⏰ {appointment.time}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-row items-center gap-4 sm:flex-col sm:items-end">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          appointment.status === "Confirmed"
                            ? "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
                            : appointment.status === "Pending"
                              ? "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400"
                              : "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
                        }`}
                      >
                        {appointment.status}
                      </span>
                    <button
                      onClick={() => handleDelete(appointment.id)}
                      className="text-sm font-medium text-red-500 transition-colors hover:text-red-700 hover:underline dark:text-red-400 dark:hover:text-red-300"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
