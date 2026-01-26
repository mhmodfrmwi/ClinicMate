const express = require("express");
const { verifyAdmin } = require("../middlewares/verifyToken");
const {
  AddDoctor,
  GetDoctors,
  UpdateDoctor,
  DeleteDoctor,
  GetDoctorById,
} = require("../controllers/doctorsControllers");
const route = express.Router();

route.route("/doctors").post(verifyAdmin, AddDoctor).get(GetDoctors);
route
  .route("/doctors/:id")
  .put(verifyAdmin, UpdateDoctor)
  .delete(verifyAdmin, DeleteDoctor)
  .get(GetDoctorById);
module.exports = route;
