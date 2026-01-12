const express = require("express");
const dotenv = require("dotenv");
const errorHandler = require("./src/middlewares/errorHandler");

const admissionRoutes = require("./src/routes/admission.route");
const appointmentRoutes = require("./src/routes/appointment.route");
const bedRoutes = require("./src/routes/bed.route");
const billingRoutes = require("./src/routes/billing.route");
const departmentRoutes = require("./src/routes/department.route");
const doctorRoutes = require("./src/routes/doctor.route");
const medicalRoutes = require("./src/routes/medicalRecord.route");
const medicationRoutes = require("./src/routes/medication.route");
const notificationRoutes = require("./src/routes/notification.route");
const nurseRoutes = require("./src/routes/nurse.route");
const patientRoutes = require("./src/routes/patient.route");
const paymentRoutes = require("./src/routes/payment.route");
const prescriptionRoutes = require("./src/routes/prescription.route");
const userRoutes = require("./src/routes/user.route");
const wardRoutes = require("./src/routes/ward.route");

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/admissions", admissionRoutes);
app.use("/appointments", appointmentRoutes);
app.use("/beds", bedRoutes);
app.use("/billings", billingRoutes);
app.use("/departments", departmentRoutes);
app.use("/doctors", doctorRoutes);
app.use("/medical-records", medicalRoutes);
app.use("/medications", medicationRoutes);
app.use("/notifications", notificationRoutes);
app.use("/nurses", nurseRoutes);
app.use("/patients", patientRoutes);
app.use("/payments", paymentRoutes);
app.use("/prescriptions", prescriptionRoutes);
app.use("/users", userRoutes);
app.use("/wards", wardRoutes);

app.use(errorHandler);

app.get("/", (req, res, next) => {
	res.send("API is running");
});

module.exports = app;