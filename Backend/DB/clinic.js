const mongoose = require("mongoose");
const Joi = require("joi");

const clinicSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 100,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
    },
    subscriptionPlan: {
      type: String,
      enum: ["Free", "Basic", "Premium"], // عشان لو حبيت تعمل باقات بعدين
      default: "Free",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

// Validation Function
const validateClinic = (obj) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(100).required(),
    address: Joi.string().required(),
    phone: Joi.string().required(),
  });
  return schema.validate(obj);
};

const Clinic = mongoose.model("Clinic", clinicSchema);

module.exports = {
  Clinic,
  validateClinic,
};
