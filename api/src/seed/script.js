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
	randomDepartmentNames,
	randomRoomNames,
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
	} catch (error) {
		console.error(error.message);
	}
}

async function seedAppointments() {
	try {
	} catch (error) {
		console.error(error.message);
	}
}

async function seedBeds() {
	try {
	} catch (error) {
		console.error(error.message);
	}
}

async function seedBillings() {
	try {
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
	} catch (error) {
		console.error(error.message);
	}
}

async function seedMedicalRecords() {
	try {
	} catch (error) {
		console.error(error.message);
	}
}

async function seedMedications() {
	try {
	} catch (error) {
		console.error(error.message);
	}
}

async function seedNotifications() {
	try {
	} catch (error) {
		console.error(error.message);
	}
}

async function seedNurses() {
	try {
		for( let i = 0; i < 10; i++) {
			async function getRandomNurseId() {
				const nurses = await User.find({ role: "nurse" }).select("_id");

				if (nurses.length === 0) {
					return null;
				}

				const randomIndex = Math.floor(Math.random() * nurses.length);
				return nurses[randomIndex]._id.toString();
			}
			const nurseId = await getRandomNurseId();
			async function getRandomWardId() {
				const wards = await User.find({}).select("_id");

				if (wards.length === 0) {
					return null;
				}

				const randomIndex = Math.floor(Math.random() * wards.length);
				return wards[randomIndex]._id.toString();
			}
			const wardId = await getRandomWardId();
			await Nurse.create({
				user: nurseId,
				ward: wardId,
				shift: "",
				yearsOfExperience: Math.floor(Math.random() * 60),
			})
		}
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
	} catch (error) {
		console.error(error.message);
	}
}

async function seedPrescriptions() {
	try {
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
		// 	seedAdmissions(),
		// 	seedAppointments(),
		// 	seedBeds(),
		// 	seedBillings(),
		// await seedDepartments();
		// 	seedDoctors(),
		// 	seedMedicalRecords(),
		// 	seedMedications(),
		// 	seedNotifications(),
			await seedNurses();
		// await seedPatients();
		// 	seedPayments(),
		// 	seedPrescriptions(),
		// await seedUsers();
		// await seedWards();
		// ]);
	} catch (error) {
		console.error(error.message);
	}
}
// seed();

module.exports = seed;


