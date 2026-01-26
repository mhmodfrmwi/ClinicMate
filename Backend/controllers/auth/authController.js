const asyncHandler = require("express-async-handler");
const { validateRegistration, validateLogin } = require("../../DB/user");
const authService = require("../../services/authService");

const Register = asyncHandler(async (req, res) => {
  const { error } = validateRegistration(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  try {
    const result = await authService.registerClinicAdmin(req.body);

    res.status(201).json({
      message: "Clinic & Admin registered successfully.",
      ...result,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

const Login = asyncHandler(async (req, res) => {
  const { error } = validateLogin(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  try {
    const result = await authService.loginUser(req.body);
    res.status(200).json({
      message: "Login successful.",
      ...result,
    });
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
});

module.exports = { Register, Login };
