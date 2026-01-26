import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDoctorById } from "@/rtk/slices/doctorsSlice";

const DoctorDetails = () => {
  const { doctorId } = useParams();
  const dispatch = useDispatch();
  const doctor = useSelector((state) => state.doctors.doctor);
  const loading = useSelector((state) => state.doctors.loading);
  const error = useSelector((state) => state.doctors.error);

  useEffect(() => {
    if (doctorId) {
      dispatch(fetchDoctorById(doctorId));
    }
  }, [doctorId, dispatch]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  if (error) {
    return <div className="py-4 text-center text-red-500">Error: {error}</div>;
  }

  if (!doctor) {
    return <div className="py-4 text-center">No doctor found!</div>;
  }

  const isDoctorAvailable = doctor.availability.length > 2;

  return (
    <div className="min-h-screen bg-gray-50 py-12 dark:bg-slate-950">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="glass overflow-hidden rounded-3xl bg-white/50 shadow-2xl dark:bg-slate-900/50">
          <div className="flex flex-col md:flex-row">
            {/* Image Section */}
            <div className="relative h-96 bg-gray-200 md:h-auto md:w-1/3">
              <img
                src={doctor.image.url}
                alt={doctor.name}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden"></div>
              <div className="absolute bottom-4 left-4 md:hidden">
                <h1 className="text-3xl font-bold text-white">{doctor.name}</h1>
                <p className="text-gray-200">{doctor.specialization}</p>
              </div>
            </div>

            {/* Info Section */}
            <div className="flex flex-col justify-between p-8 md:w-2/3 md:p-12">
              <div>
                <div className="mb-6 hidden md:block">
                  <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
                    {doctor.name}
                  </h1>
                  <p className="text-xl font-medium text-blue-600 dark:text-blue-400">
                    {doctor.specialization}
                  </p>
                </div>

                <div className="mb-8 flex items-center gap-4">
                  <span
                    className={`inline-flex items-center rounded-full px-4 py-1.5 text-sm font-semibold ${
                      isDoctorAvailable
                        ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                        : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                    }`}
                  >
                    <span className={`mr-2 h-2.5 w-2.5 rounded-full ${isDoctorAvailable ? "bg-green-600" : "bg-red-600"}`}></span>
                    {isDoctorAvailable ? "Available" : "Not Available"}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {Number(doctor.experience) > 0 ? `${doctor.experience} Years Experience` : "New Specialist"}
                  </span>
                </div>

                <div className="mb-8">
                  <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">About</h3>
                  <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                    {doctor.bio || "No biography available for this doctor."}
                  </p>
                </div>
                
                 <div className="mb-8">
                  <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Contact Info</h3>
                   <p className="text-gray-600 dark:text-gray-300">{doctor.phone || "No contact info available"}</p>
                 </div>
              </div>

              <div>
                {isDoctorAvailable ? (
                   <Link to="/appointmentForm">
                    <button className="w-full rounded-xl bg-blue-600 py-4 text-lg font-bold text-white shadow-lg transition-transform hover:scale-[1.02] hover:bg-blue-700 md:w-auto md:px-12">
                      Book Appointment
                    </button>
                  </Link>
                ) : (
                  <button
                    disabled
                    className="w-full cursor-not-allowed rounded-xl bg-gray-300 py-4 text-lg font-bold text-gray-500 dark:bg-slate-800 dark:text-gray-600 md:w-auto md:px-12"
                  >
                    Currently Unavailable
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
