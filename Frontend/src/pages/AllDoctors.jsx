import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDoctors } from "@/rtk/slices/doctorsSlice";
import { Link } from "react-router-dom";
import DoctorCard from "@/components/ui/DoctorCard";

const AllDoctors = () => {
  const dispatch = useDispatch();
  const { doctors, loading, error } = useSelector((state) => state.doctors);

  useEffect(() => {
    dispatch(fetchDoctors());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-50 py-12 dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h1 className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-4xl font-extrabold text-transparent dark:from-blue-400 dark:to-teal-300">
            Our Trusted Doctors
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Browse through our extensive list of specialists and book your appointment today.
          </p>
        </div>

        {loading ? (
          <div className="py-20 text-center">
             <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
             <p className="mt-4 text-gray-600 dark:text-gray-400">Loading doctors...</p>
          </div>
        ) : error ? (
          <div className="mx-auto max-w-lg rounded-xl bg-red-50 p-6 text-center text-red-600 dark:bg-red-900/20 dark:text-red-400">
            Error: {error}
          </div>
        ) : doctors.length === 0 ? (
          <div className="text-center text-lg text-gray-600 dark:text-gray-400">
            No doctors available at the moment.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {doctors.map((doctor) => (
              <Link key={doctor.id} to={`/${doctor.id}`} className="group block h-full">
                <DoctorCard
                  image={doctor.image.url}
                  isAvailable={doctor.availability.length > 2}
                  name={doctor.name}
                  apartment={doctor.specialization}
                  experience={doctor.experience}
                />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllDoctors;
