const bcrypt = require("bcrypt");
const { User } = require("../DB/user");
const { Clinic } = require("../DB/clinic");
const jwt = require("jsonwebtoken");

const registerClinicAdmin = async (data) => {
  const { userName, email, password, clinicName, address, phone } = data;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error("User with this email already exists.");
  }

  const newClinic = new Clinic({
    name: clinicName,
    address,
    phone,
  });
  const savedClinic = await newClinic.save();

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = new User({
    userName,
    email,
    password: hashedPassword,
    clinicId: savedClinic._id,
    isAdmin: true,
  });
  const savedUser = await user.save();

  const token = jwt.sign(
    {
      id: savedUser._id,
      email: savedUser.email,
      isAdmin: savedUser.isAdmin,
      clinicId: savedClinic._id,
    },
    process.env.JWT_SECRET_KEY,
    { expiresIn: "1d" }
  );

  return { user: savedUser, token };
};

const loginUser = async (data) => {
  const { email, password } = data;

  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Invalid email or password");
  }

  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) {
    throw new Error("Invalid email or password");
  }

  const token = jwt.sign(
    {
      id: user._id,
      isAdmin: user.isAdmin,
      clinicId: user.clinicId,
    },
    process.env.JWT_SECRET_KEY,
    { expiresIn: "1d" }
  );

  return { user, token };
};

module.exports = {
  registerClinicAdmin,
  loginUser,
};
