import Appartment from "./Appartment";

const Speciality = () => {
  return (
    <div className="glass mx-auto max-w-7xl rounded-3xl bg-white/50 p-12 shadow-xl dark:bg-slate-900/50">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">
          Find by Speciality
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
          Simply browse through our extensive list of trusted doctors, schedule
          your appointment hassle-free.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        <Appartment
          image={"assets/General_physician.svg"}
          title={"General physician"}
        />
        <Appartment
          image={"assets/Gastroenterologist.svg"}
          title={"Gynecologist"}
        />
        <Appartment
          image={"assets/Gynecologist.svg"}
          title={"Gastroenterologist"}
        />
        <Appartment image={"assets/Neurologist.svg"} title={"Neurologist"} />
        <Appartment
          image={"assets/Pediatricians.svg"}
          title={"Pediatricians"}
        />
      </div>
    </div>
  );
};
export default Speciality;
