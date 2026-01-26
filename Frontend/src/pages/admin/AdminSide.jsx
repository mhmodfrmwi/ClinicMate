import { Link, useLocation } from "react-router-dom";
import dashBoardIcon from "../../../assets/icons/dashboard-icon.svg";
import AppointmentsIcon from "../../../assets/icons/appointment-icon.svg";
import addDoctorIcon from "../../../assets/icons/add-doctor-icon.svg";
import allDoctorsIcon from "../../../assets/icons/doctor-icon.svg";

const AdminSide = () => {
  const location = useLocation();

  const menuItems = [
    {
      icon: dashBoardIcon,
      label: "Dashboard",
      link: "/admin",
    },
    {
      icon: AppointmentsIcon,
      label: "Appointments",
      link: "/admin/allAppointments",
    },
    {
      icon: addDoctorIcon,
      label: "Add Doctor",
      link: "/admin/addDoctor",
    },
    {
      icon: allDoctorsIcon,
      label: "Doctors List",
      link: "/admin/allDoctors",
    },
  ];

  return (
    <div className="glass hidden min-h-screen w-0 border-r border-white/20 text-gray-800 transition-all duration-500 ease-in-out dark:text-gray-200 lg:block lg:w-72">
      <div className="mt-6 space-y-4">
        {menuItems.map((item, idx) => {
          const isActive = location.pathname === item.link;
          return (
            <Link key={idx} to={item.link}>
              <div
                className={`mx-4 mb-2 flex items-center gap-4 rounded-xl px-4 py-3 transition-all duration-300 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                    : "hover:bg-blue-50 dark:hover:bg-slate-800"
                }`}
              >
                <img
                  src={item.icon}
                  alt={item.label}
                  className={`h-5 w-5 ${isActive ? "brightness-0 invert" : ""}`}
                />
                <h1
                  className={`text-md font-medium ${
                    isActive ? "text-white" : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  {item.label}
                </h1>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default AdminSide;
