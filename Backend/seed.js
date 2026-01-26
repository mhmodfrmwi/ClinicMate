require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { Clinic } = require("./DB/clinic");
const { User } = require("./DB/user");
const { Doctor } = require("./DB/doctor");
const { Appointment } = require("./DB/appointment");

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to DB for seeding");

    // Clear existing data
    await Clinic.deleteMany({});
    await User.deleteMany({});
    await Doctor.deleteMany({});
    await Appointment.deleteMany({});
    console.log("Cleared existing data");

    // Create Clinic
    const clinic = await Clinic.create({
      name: "ClinicMate Main Hospital",
      address: "123 Health St, Wellness City",
      phone: "+1-212-456-7890",
      subscriptionPlan: "Premium"
    });
    console.log("Created Clinic");

    // Create Admin
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash("12345678", salt);

    const admin = await User.create({
      userName: "Admin User",
      email: "admin@clinicmate.com",
      password: hashedPassword,
      clinicId: clinic._id,
      isAdmin: true,
      type: "Doctor" 
    });
    console.log("Created Admin: admin@clinicmate.com / 12345678");

    // Create Patient
    const patient = await User.create({
      userName: "John Doe",
      email: "patient@clinicmate.com",
      password: hashedPassword,
      clinicId: clinic._id,
      isAdmin: false,
      type: "Patient"
    });
    console.log("Created Patient: patient@clinicmate.com / 12345678");

    // Default Images
    const docImages = [
       "https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5754.jpg",
       "https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg",
       "https://img.freepik.com/free-photo/portrait-african-american-doctor-with-stethoscope_23-2148858958.jpg",
       "https://img.freepik.com/free-photo/attractive-young-male-nutriologist-lab-coat-smiling-against-white-background_662251-2960.jpg",
       "https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg"
    ];

     // Create Doctors 
    const doctorSpecializations = [
      { name: "Dr. Richard James", spec: "General physician" },
      { name: "Dr. Emily Larson", spec: "Gynecologist" },
      { name: "Dr. Sarah Patel", spec: "Dermatologist" },
      { name: "Dr. Christopher Lee", spec: "Pediatricians" },
      { name: "Dr. Jennifer Garcia", spec: "Neurologist" },
      { name: "Dr. Andrew Williams", spec: "Gastroenterologist" },
       { name: "Dr. Christopher Davis", spec: "General physician" },
       { name: "Dr. Timothy White", spec: "Gynecologist" },
       { name: "Dr. Ava Johnson", spec: "Dermatologist" },
       { name: "Dr. Jeffrey King", spec: "Pediatricians" },
       { name: "Dr. Elizabeth Ross", spec: "Neurologist" },
       { name: "Dr. Patrick Harris", spec: "Gastroenterologist" },
       { name: "Dr. Chloe Evans", spec: "General physician" },
       { name: "Dr. Ryan Martinez", spec: "Gynecologist" },
       { name: "Dr. Amelia Hill", spec: "Dermatologist" }
    ];

    const docs = [];
    let imgIdx = 0;
    for (const d of doctorSpecializations) {
        const doc = await Doctor.create({
            name: d.name,
            specialization: d.spec,
            experience: `${Math.floor(Math.random() * 10) + 2} Years`,
            email: `${d.name.replace(/ /g, ".").replace("Dr..", "").toLowerCase()}@clinicmate.com`,
            phone: "+1-000-000-0000",
            availability: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            clinicId: clinic._id,
            image: {
                url: docImages[imgIdx % docImages.length],
                publicId: null
            }
        });
        docs.push(doc);
        imgIdx++;
    }
    console.log(`Created ${docs.length} Doctors`);

    process.exit();
  } catch (error) {
    console.error("Error seeding data:", error);
    process.exit(1);
  }
};

seedData();
