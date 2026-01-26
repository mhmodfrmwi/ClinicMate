const express = require("express");
const { verifyToken, verifyAdmin } = require("../middlewares/verifyToken");
const {
  GetAppointments,
  AddAppointment,
  GetAppointmentById,
  UpdateAppointment,
  DeleteAppointment,
} = require("../controllers/appointmentsController");
const route = express.Router();

route
  .route("/appointments")
  .get(verifyToken, GetAppointments)
  .post(verifyToken, AddAppointment);
route
  .route("/appointments/:id")
  .get(GetAppointmentById)
  .put(UpdateAppointment)
  .delete(verifyAdmin, DeleteAppointment);

module.exports = route;
