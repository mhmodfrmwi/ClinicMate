import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDoctors } from "@/rtk/slices/doctorsSlice";
import DoctorCard from "./DoctorCard";
import { Link } from "react-router-dom";

const DoctorsToBook = () => {
  const dispatch = useDispatch();

  const { doctors, loading, error } = useSelector((state) => state.doctors);

  useEffect(() => {
    dispatch(fetchDoctors());
  }, [dispatch]);

  return (
    <div className="glass mx-auto max-w-7xl rounded-2xl p-8 shadow-xl">
      <div className="mb-12 text-center">
        <h1 className="mb-4 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-4xl font-extrabold text-transparent">
          Top Doctors to Book
        </h1>
        <p className="text-lg text-gray-600">
          Simply browse through our extensive list of trusted doctors.
        </p>
      </div>

      {loading ? (
        <div className="text-center text-lg text-gray-600">
          Loading doctors...
        </div>
      ) : error ? (
        <div className="text-center text-lg text-red-600">Error: {error}</div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {doctors.map((doctor, index) => (
            <Link
              key={doctor.id}
              to={`/${doctor.id}`}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <DoctorCard
                image={doctor.image.url}
                isAvailable={doctor.availability.length > 2 ? true : false}
                name={doctor.name}
                apartment={doctor.specialization}
                experience={doctor.experience}
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default DoctorsToBook;
