import BookAppointment from "@/components/ui/BookAppointment";
import Hero from "@/components/ui/Hero";
import DoctorsToBook from "@/components/ui/DoctorsToBook";
import Speciality from "@/components/ui/Speciality";

const Home = () => {
  return (
    <div className="bg-gray-50 dark:bg-slate-950">
      <Hero />
      <div className="mx-auto my-10 w-5/6">
        <Speciality />
        <DoctorsToBook />
        <BookAppointment
          headerText={"Book Appointment With 100+ Trusted Doctors"}
        />
      </div>
    </div>
  );
};
export default Home;
