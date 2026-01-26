import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAppointments } from "@/rtk/slices/appointmentSlice";

const PatientProfile = () => {
  const dispatch = useDispatch();
  const { appointments, loading, error } = useSelector(
    (state) => state.appointments
  );

  useEffect(() => {
    dispatch(fetchAppointments());
  }, [dispatch]);

  const getStatusColor = (status) => {
    switch (status) {
      case "Confirmed":
        return "text-green-600 bg-green-100";
      case "Cancelled":
        return "text-red-600 bg-red-100";
      default:
        return "text-yellow-600 bg-yellow-100";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="glass mx-auto max-w-6xl rounded-2xl p-8 shadow-xl">
        <h1 className="mb-8 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-3xl font-extrabold text-transparent">
          My Appointments
        </h1>

        {loading ? (
          <div className="py-10 text-center text-lg text-gray-500 animate-pulse">
            Loading your history...
          </div>
        ) : error ? (
          <div className="py-10 text-center text-lg text-red-500">
            Error: {error}
          </div>
        ) : appointments.length === 0 ? (
          <div className="py-10 text-center text-lg text-gray-500">
            You have no appointments yet.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-full table-auto text-left">
              <thead>
                <tr className="border-b border-gray-200 text-sm font-medium text-gray-500">
                  <th className="px-6 py-4">Doctor</th>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4">Time</th>
                  <th className="px-6 py-4">Reason</th>
                  <th className="px-6 py-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((apt, index) => (
                  <tr
                    key={apt.id || index}
                    className="border-b border-gray-100 transition-colors hover:bg-gray-50/50 animate-fade-in-up"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <td className="px-6 py-4 font-medium text-gray-900">
                      {apt.doctorName}
                    </td>
                    <td className="px-6 py-4 text-gray-600">{apt.date}</td>
                    <td className="px-6 py-4 text-gray-600">{apt.time}</td>
                    <td className="px-6 py-4 text-gray-600">{apt.reason}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${getStatusColor(
                          apt.status
                        )}`}
                      >
                        {apt.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default PatientProfile;
