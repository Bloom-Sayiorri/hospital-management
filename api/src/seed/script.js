const { faker } = require("@faker-js/faker");
const Admission = require("../models/admission.model");
const Appointment = require("../models/appointment.model");
const Bed = require("../models/bed.model");
const Billing = require("../models/billing.model");
const Department = require("../models/department.model");
const Doctor = require("../models/doctor.model");
const MedicalRecord = require("../models/medicalRecord.model");
const Medication = require("../models/medication.model");
const Notification = require("../models/notification.model");
const Nurse = require("../models/nurse.model");
const Patient = require("../models/patient.model");
const Payment = require("../models/payment.model");
const Prescription = require("../models/prescription.model");
const User = require("../models/user.model");
const Ward = require("../models/ward.model");
const bcrypt = require("bcrypt");

const {
	generateAge,
	randomInsurer,
	randomAllergies,
	randomMedication,
	randomFamilyMedHistory,
	randomPastMedHistory,
	randomBloodType,
	randomRelation,
	randomRole,
	randomRoomNames,
	randomDiagnosis,
	randomReasons,
	randomNotes,
	randomStatus,
	randomTreatment,
	randomCost,
	randomBillingStatus,
	randomPaymentMethod,
	randomSpeciality,
	randomLicenseNumber,
	randomYoe,
	randomBio,
	randomSymptoms,
	randomAttachments,
	randomMedName,
	randomDescription,
	randomManufacturer,
	randomStock,
	randomTitle,
	randomMessage,
	randomType,
	randomRead,
} = require("../utils/seedHelpers");

const kenyaCities = [
	"Nairobi",
	"Mombasa",
	"Kisumu",
	"Nakuru",
	"Eldoret",
	"Thika",
	"Machakos",
	"Nyeri",
	"Meru",
	"Embu",
	"Kajiado",
	"Kericho",
	"Kakamega",
	"Bungoma",
	"Kitale",
	"Garissa",
	"Malindi",
	"Lamu",
	"Isiolo",
	"Marsabit",
	"Narok",
];

const city = faker.helpers.arrayElement(kenyaCities);

async function seedAdmissions() {
	try {
		await Admission.deleteMany();
		for (let i = 0; i < 20; i++) {
			async function getRandomPatientId() {
				const patients = await Patient.find({}).select("_id");
				if (!patients) {
					return "No patients found";
				}
				const randomId = Math.floor(Math.random() * patients.length);
				return patients[randomId]._id.toString();
			}
			const patientId = await getRandomPatientId();
			async function getRandomNurseId() {
				const nurses = await Patient.find({}).select("_id");
				if (!nurses) {
					return "No nurses found";
				}
				const randomId = Math.floor(Math.random() * nurses.length);
				return nurses[randomId]._id.toString();
			}
			const nurseId = await getRandomNurseId();
			async function getRandomDoctorId() {
				const doctors = await Patient.find({}).select("_id");
				if (!doctors) {
					return "No doctors found";
				}
				const randomId = Math.floor(Math.random() * doctors.length);
				return doctors[randomId]._id.toString();
			}
			const doctorId = await getRandomDoctorId();
			async function getRandomWardId() {
				const wards = await Patient.find({}).select("_id");
				if (!wards) {
					return "No wards found";
				}
				const randomId = Math.floor(Math.random() * wards.length);
				return wards[randomId]._id.toString();
			}
			const wardId = await getRandomWardId();
			async function getRandomBedId() {
				const beds = await Patient.find({}).select("_id");
				if (!beds) {
					return "No beds found";
				}
				const randomId = Math.floor(Math.random() * beds.length);
				return beds[randomId]._id.toString();
			}
			const bedId = await getRandomBedId();

			const states = ["none", "admitted", "discharged"];
			const status = states[Math.floor(Math.random() * states.length)];

			await Admission.create({
				patient: patientId,
				admittedBy: nurseId,
				doctorInCharge: doctorId,
				diagnosis: randomDiagnosis(),
				ward: wardId,
				bed: bedId,
				status: status,
				admittedAt: Date.now(),
				dischargedAt: null,
			});
		}
	} catch (error) {
		console.error(error.message);
	}
}

async function seedAppointments() {
	try {
		for (let i = 0; i < 20; i++) {
			async function getRandomDoctorId() {
				const doctors = await Patient.find({}).select("_id");
				if (!doctors) {
					return "No doctors found";
				}
				const randomId = Math.floor(Math.random() * doctors.length);
				return doctors[randomId]._id.toString();
			}
			const doctorId = await getRandomDoctorId();
			async function getRandomPatientId() {
				const patients = await Patient.find({}).select("_id");
				if (!patients) {
					return "No patients found";
				}
				const randomId = Math.floor(Math.random() * patients.length);
				return patients[randomId]._id.toString();
			}
			const patientId = await getRandomPatientId();
			await Appointment.create({
				doctor: doctorId,
				patient: patientId,
				notes: randomNotes(),
				reason: randomReasons(),
				status: randomStatus(),
			});
		}
	} catch (error) {
		console.error(error.message);
	}
}

async function seedBeds() {
	try {
		await Bed.deleteMany();
		for (let i = 0; i < 30; i++) {
			async function getRandomWard() {
				const wards = await Ward.find().select("_id");
				if (wards.length === 0) {
					return null;
				}

				const randomIndex = Math.floor(Math.random() * wards.length);
				return wards[randomIndex]._id.toString();
			}
			const wardId = await getRandomWard();
			const states = [true, false];
			const occupied = states[Math.floor(Math.random() * states.length)];

			await Bed.create({
				ward: wardId,
				bedNumber: Math.floor(Math.random() * 10) + 1,
				isOccupied: occupied,
			});
		}
	} catch (error) {
		console.error(error.message);
	}
}

async function seedBillings() {
	try {
		await Billing.deleteMany();
		for (let i = 0; i < 20; i++) {
			async function getRandomPatientId() {
				const patients = await Patient.find({}).select("_id");
				if (!patients) {
					return "No patients found";
				}
				const randomId = Math.floor(Math.random() * patients.length);
				return patients[randomId]._id.toString();
			}
			const patientId = await getRandomPatientId();

			await Billing.create({
				patient: patientId,
				treatments: randomTreatment(),
				cost: randomCost(),
				status: randomBillingStatus(),
				paymentMethod: randomPaymentMethod(),
			});
		}
	} catch (error) {
		console.error(error.message);
	}
}

async function seedDepartments() {
	try {
		await Department.deleteMany();
		// for (let i = 0; i < 10; i++) {
		async function getRandomDoctorId() {
			const doctors = await User.find({ role: "doctor" }).select("_id");

			if (doctors.length === 0) {
				return null;
			}

			const randomIndex = Math.floor(Math.random() * doctors.length);
			return doctors[randomIndex]._id.toString();
		}
		const doctorId = await getRandomDoctorId();

		await Department.create(
			{
				name: "Emergency/Accident & Emergency (A&E)",
				description: "Immediate care for acute injuries and illnesses.",
				headOfDepartment: doctorId,
			},
			{
				name: "Surgery (OR)",
				description: "General, orthopedic, cardiac, neurosurgery.",
				headOfDepartment: doctorId,
			},
			{
				name: "Intensive Care Units (ICU)",
				description: "Critical care for severe conditions (MICU, SICU, CVICU, NICU, PICU).",
				headOfDepartment: doctorId,
			},
			{
				name: "Maternity (L&D)",
				description: "Obstetrics & Gynecology (O&G) for childbirth and women's health.",
				headOfDepartment: doctorId,
			},
			{
				name: "Pediatrics (Peds/PICU)",
				description: "Medical care for children.",
				headOfDepartment: doctorId,
			},
			{
				name: "Cardiology",
				description: "Heart and vascular conditions.",
				headOfDepartment: doctorId,
			},
			{
				name: "Oncology",
				description: "Cancer diagnosis and treatment.",
				headOfDepartment: doctorId,
			},
			{
				name: "Neurology",
				description: "Brain, spinal cord, and nervous system disorders.",
				headOfDepartment: doctorId,
			},
			{
				name: "Psychiatry",
				description: "Mental health services.",
				headOfDepartment: doctorId,
			},
			{
				name: "Rehabilitation",
				description: "Physical therapy, occupational therapy.",
				headOfDepartment: doctorId,
			},
			{
				name: "Radiology/Imaging",
				description: "X-ray, CT, MRI, Ultrasound.",
				headOfDepartment: doctorId,
			},
			{
				name: "Pathology/Laboratories",
				description: "Analyzing blood, tissues, fluids.",
				headOfDepartment: doctorId,
			},
			{
				name: "Pharmacy",
				description: "Dispensing medications.",
				headOfDepartment: doctorId,
			},
			{
				name: "Blood Bank",
				description: "Blood storage and transfusions.",
				headOfDepartment: doctorId,
			},
			{
				name: "Nutrition & Dietetics",
				description: "Patient meal planning, dietary counseling.",
				headOfDepartment: doctorId,
			},
			{
				name: "Health Records",
				description: "Managing patient information.",
				headOfDepartment: doctorId,
			},
			{
				name: "IT (Information Technology)",
				description: "Managing hospital systems.",
				headOfDepartment: doctorId,
			},
			{
				name: "Biomedical Engineering",
				description: "Maintaining medical equipment.",
				headOfDepartment: doctorId,
			},
			{
				name: "Procurement",
				description: "Supplies and purchasing.",
				headOfDepartment: doctorId,
			},
			{
				name: "Accounts/Finance",
				description: "Billing and financial management.",
				headOfDepartment: doctorId,
			},
			{
				name: "Security & Facilities",
				description: "Maintaining the building and safety.",
				headOfDepartment: doctorId,
			}
		);
		// }
	} catch (error) {
		console.error(error.message);
	}
}

async function seedDoctors() {
	try {
		await Doctor.deleteMany();
		for (let i = 0; i < 20; i++) {
			async function getRandomDoctorId() {
				const doctors = await User.find({ role: "doctor" }).select("_id");

				if (doctors.length === 0) {
					return null;
				}

				const randomIndex = Math.floor(Math.random() * doctors.length);
				return doctors[randomIndex]._id.toString();
			}
			const doctorId = await getRandomDoctorId();

			async function getRandomDepartmentId() {
				const departments = await Department.find({}).select("_id");

				if (departments.length === 0) {
					return null;
				}

				const randomIndex = Math.floor(Math.random() * departments.length);
				return departments[randomIndex]._id.toString();
			}
			const departmentId = await getRandomDepartmentId();

			async function getRandomWardId() {
				const wards = await Ward.find().select("_id");
				if (!wards) {
					return "Wards not found.";
				}
				const randomIndex = Math.floor(Math.random() * wards.length);
				return wards[randomIndex]._;
			}
			const wardId = await getRandomWardId();

			await Doctor.create({
				user: doctorId,
				department: departmentId,
				speciality: randomSpeciality(),
				licenseNumber: randomLicenseNumber(),
				yearsOfExperience: randomYoe(),
				bio: randomBio(),
				assignedWards: wardId,
			});
		}
	} catch (error) {
		console.error(error.message);
	}
}

async function seedMedicalRecords() {
	try {
		await MedicalRecord.deleteMany();
		for (let i = 0; i < 20; i++) {
			async function getRandomPatientId() {
				const patients = await Patient.find({}).select("_id");

				if (patients.length === 0) {
					return null;
				}

				const randomIndex = Math.floor(Math.random() * patients.length);
				return patients[randomIndex]._id.toString();
			}
			const patientId = await getRandomPatientId();

			async function getRandomDoctorId() {
				const doctors = await User.find({ role: "doctor" }).select("_id");

				if (doctors.length === 0) {
					return null;
				}

				const randomIndex = Math.floor(Math.random() * doctors.length);
				return doctors[randomIndex]._id.toString();
			}
			const doctorId = await getRandomDoctorId();

			const randomVisitDate = faker.date.birthdate({ mode: "year", min: 2026, max: 2026 }).toISOString().split("T")[0];
			await MedicalRecord.create({
				patient: patientId,
				doctor: doctorId,
				diagnosis: randomDiagnosis(),
				symptoms: randomSymptoms(),
				visitDatedate: randomVisitDate,
				notes: randomNotes(),
				attachments: randomAttachments(),
			});
		}
	} catch (error) {
		console.error(error.message);
	}
}

async function seedMedications() {
	try {
		await Medication.deleteMany();
		for (let i = 0; i < 14; i++) {
			const randomExpiryDate = faker.date.birthdate({ mode: "year", min: 2026, max: 2028 }).toISOString().split("T")[0];
			const randomManufactureDate = faker.date
				.birthdate({ mode: "year", min: 2025, max: 2026 })
				.toISOString()
				.split("T")[0];
			await Medication.create({
				name: randomMedName(),
				description: randomDescription(),
				stock: randomStock(),
				manufacturer: randomManufacturer(),
				dateOfManufacture: randomManufactureDate,
				expiryDate: randomExpiryDate,
			});
		}
	} catch (error) {
		console.error(error);
	}
}

async function seedNotifications() {
	try {
		await Notification.deleteMany();
		for (let i = 0; i < 14; i++) {
			async function getRandomPatientId() {
				const patients = await Patient.find().select("_id");
				if (!patients) {
					return "No patients found";
				}
				const randomIndex = Math.floor(Math.random() * patients.length);
				return patients[randomIndex];
			}
			const patientId = await getRandomPatientId();

			async function getRandomAppointmentId() {
				const appointments = await Appointment.find().select("_id");
				if (!appointments) {
					return "No appointments found";
				}
				const randomIndex = Math.floor(Math.random() * appointments.length);
				return appointments[randomIndex];
			}
			const appointmentId = await getRandomAppointmentId();

			await Notification.create({
				patient: patientId,
				title: randomTitle(),
				message: randomMessage(),
				appointment: appointmentId,
				type: randomType(),
				iseRead: randomRead(),
			});
		}
	} catch (error) {
		console.error(error.message);
	}
}

async function seedNurses() {
	try {
		await Nurse.deleteMany();
		async function getRandomWardId() {
			const wards = await User.find({}).select("_id");

			if (wards.length === 0) {
				return null;
			}

			const randomIndex = Math.floor(Math.random() * wards.length);
			return wards[randomIndex]._id.toString();
		}
		const wardId = await getRandomWardId();
		const shifts = ["day", "night", "rotational"];
		const randomShift = shifts[Math.floor(Math.random() * shifts.length)];
		const nurses = await User.find({ role: "nurse" }).select("_id");

		if (nurses.length === 0) {
			return null;
		}

		const nurse = nurses.map((user) => ({
			user: user._id,
			ward: wardId,
			shift: randomShift,
			yearsOfExperience: Math.floor(Math.random() * 60),
		}));
		// console.log(nurse)
		await Nurse.create(nurse);
	} catch (error) {
		console.error(error.message);
	}
}

async function seedPatients() {
	try {
		await Patient.deleteMany();
		for (let i = 0; i < 30; i++) {
			async function getRandomDoctorId() {
				const doctors = await User.find({ role: "doctor" }).select("_id");

				if (doctors.length === 0) {
					return null;
				}

				const randomIndex = Math.floor(Math.random() * doctors.length);
				return doctors[randomIndex]._id.toString();
			}
			const doctorId = await getRandomDoctorId();

			const randomFirstName = faker.person.firstName();
			const randomLastName = faker.person.lastName();
			const randomName = `${randomFirstName} ${randomLastName}`;
			const randomEmail = faker.internet.email();
			const randomGender = faker.person.sex();
			const randomPhone = faker.phone.number({ style: "national" });
			const randomDob = faker.date.birthdate({ mode: "year", min: 1960, max: 2026 }).toISOString().split("T")[0];
			const randomJob = faker.person.jobTitle();
			await Patient.create({
				username: randomName,
				email: randomEmail,
				age: generateAge(),
				gender: randomGender,
				phone: randomPhone,
				dateOfBirth: randomDob,
				address: city,
				occupation: randomJob,
				emergencyContact: {
					name: randomName,
					relation: randomRelation(),
					phone: randomPhone,
				},
				doctorId: doctorId,
				insuranceProvider: randomInsurer(),
				insuranceNumber: Math.floor(Math.random() * 10),
				allergies: randomAllergies(),
				medication: randomMedication(),
				familyMedicalHistory: randomFamilyMedHistory(),
				pastMedicalHistory: randomPastMedHistory(),
				bloodType: randomBloodType(),
			});
		}
	} catch (error) {
		console.error(error.message);
	}
}

async function seedPayments() {
	try {
		await Payment.deleteMany();
		const billings = await Billing.find().select("treatments paymentMethod");

		if (billings.length === 0) {
			console.log("No billings found");
			return;
		}
		for (const billing of billings) {
			const amount = billing.treatments.reduce((total, treatment) => total + treatment.cost, 0);

			const payment = {
				billing: billing._id,
				amount,
				paymentMethod: billing.paymentMethod,
			};
			await Payment.create(payment);
		}
	} catch (error) {
		console.error(error.message);
	}
}

async function seedPrescriptions() {
	try {
		await Prescription.deleteMany();
		const patients = await Patient.find().select("_id doctorId");
		const medications = await Medication.find().select("name");

		if (patients.length === 0 || medications.length === 0) {
			throw new Error("Patients or medications missing");
		}

		const dosages = ["250 mg", "500 mg", "750 mg", "1 g", "5 ml", "10 ml"];
		const frequencies = [
			"Once daily",
			"Twice daily",
			"Three times daily",
			"Every 6 hours",
			"Every 8 hours",
			"At night",
		];
		const durations = ["3 days", "5 days", "7 days", "10 days", "14 days", "1 month"];

		const prescriptions = [];

		for (let i = 0; i < 20; i++) {
			const patient = patients[Math.floor(Math.random() * patients.length)];
			const medication = medications[Math.floor(Math.random() * medications.length)];

			prescriptions.push({
				patient: patient._id,
				doctor: patient.doctorId,
				medicationName: medication.name,
				dosage: dosages[Math.floor(Math.random() * dosages.length)],
				frequency: frequencies[Math.floor(Math.random() * frequencies.length)],
				duration: durations[Math.floor(Math.random() * durations.length)],
				dateIssued: new Date(),
			});
		}

		await Prescription.insertMany(prescriptions);
	} catch (error) {
		console.error(error.message);
	}
}

async function seedUsers() {
	try {
		// await User.deleteMany();
		for (let i = 0; i < 10; i++) {
			const firstName = faker.person.firstName();
			const lastName = faker.person.lastName();
			const randomName = `${firstName} ${lastName}`;
			const randomEmail = `${randomName.split(" ").join("").toLowerCase()}@hotmail.com`;
			const randomPassword = faker.string.alphanumeric(8);
			const randomGender = faker.person.sex();
			const randomPhone = faker.phone.number({ style: "national" });
			const randomRoles = randomRole();
			console.log(randomPassword);
			const hashedPassword = await bcrypt.hash(randomPassword, 10);
			await User.create({
				username: randomName,
				email: randomEmail,
				password: hashedPassword,
				gender: randomGender,
				phone: randomPhone,
				role: randomRoles,
			});
		}
	} catch (error) {
		console.error(error.message);
	}
}

async function seedWards() {
	try {
		await Ward.deleteMany();
		for (let i = 0; i < 30; i++) {
			async function getRandomNurseId() {
				const nurses = await User.find({ role: "nurse" }).select("_id");

				if (nurses.length === 0) {
					return null;
				}

				const randomIndex = Math.floor(Math.random() * nurses.length);
				return nurses[randomIndex]._id.toString();
			}
			const nurseId = await getRandomNurseId();
			async function getRandomDepartmentId() {
				const departments = await Department.find({}).select("_id");

				if (departments.length === 0) {
					return null;
				}

				const randomIndex = Math.floor(Math.random() * departments.length);
				return departments[randomIndex]._id.toString();
			}
			const departmentId = await getRandomDepartmentId();

			await Ward.create({
				name: randomRoomNames(),
				room: Math.floor(Math.random() * 22) + 1,
				department: departmentId,
				capacity: Math.floor(Math.random() * 4) + 1,
				currentPatients: Math.floor(Math.random() * 20),
				// supervisor: nurseId,
			});
		}
	} catch (error) {
		console.error(error.message);
	}
}

async function seed() {
	try {
		// Promise.all([
		// await seedAdmissions();
		// await seedAppointments();
		// await seedBeds();
		// await seedBillings();
		// await seedDepartments();
		// await seedDoctors();
		// await seedMedicalRecords();
		// await seedMedications();
		// await seedNotifications();
		// await seedNurses();
		// await seedPatients();
		// await seedPayments();
		// await seedPrescriptions();
		// await seedUsers();
		// await seedWards();
		// ]);
	} catch (error) {
		console.error(error.message);
	}
}

module.exports = seed;