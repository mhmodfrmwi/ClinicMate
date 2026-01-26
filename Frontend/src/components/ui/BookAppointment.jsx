import { Link } from "react-router-dom";
import { Button } from "./button";
const BookAppointment = ({ headerText, innerText, image }) => {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-teal-500 p-8 text-white shadow-2xl lg:p-16">
      {/* Decorative Circles */}
      <div className="absolute right-0 top-0 h-64 w-64 -translate-y-1/2 translate-x-1/2 rounded-full bg-white/10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 h-64 w-64 -translate-x-1/2 translate-y-1/2 rounded-full bg-white/10 blur-3xl"></div>

      <div className="relative z-10 flex flex-col-reverse items-center justify-between gap-8 lg:flex-row">
        <div className="lg:w-1/2">
          <h1 className="mb-6 text-4xl font-extrabold leading-tight lg:text-5xl">
            {headerText}
          </h1>
          {innerText && (
            <div className="mb-8 flex items-start gap-4 rounded-xl bg-white/10 p-4 backdrop-blur-sm">
              <img src={image} alt="Doctor Icon" className="h-12 w-12" />
              <p className="text-lg leading-relaxed">
                Simply browse through our extensive list of trusted doctors and
                schedule your appointment hassle-free.
              </p>
            </div>
          )}
          <Link to={"/appointmentForm"}>
            <Button className="h-14 rounded-full bg-white px-10 text-xl font-bold text-blue-600 shadow-lg transition-transform hover:scale-105 hover:bg-gray-50 dark:bg-slate-900 dark:text-blue-400">
              Book Appointment
            </Button>
          </Link>
        </div>
        
        {/* Only show image if specifically calling the top banner version or if we have a generic image for bottom */}
        {/* Adapting existing structure: The bottom usage in Home.jsx doesn't pass image/innerText, so we keep it simple there */}
        <div className="relative lg:w-1/2">
             <img
              src="assets/doc-header-img.png"
              alt="Doctor Consultation"
              className="hidden w-full max-w-md rounded-2xl shadow-2xl lg:block transform rotate-2 hover:rotate-0 transition-all duration-500"
            />
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
