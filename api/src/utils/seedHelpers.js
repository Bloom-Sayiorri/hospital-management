// const { faker } = require("@faker-js/faker");

const generateAge = () => {
	min = 1;
	max = 100;
	return Math.floor(Math.random() * (max - min));
};

const randomInsurer = () => {
	const insurers = ["AAR", "APA", "Britam", "CIC", "Jubilee", "Old Mutual", "SHA", "UAP"];
	const insurer = Math.floor(Math.random() * insurers.length);
	return insurers[insurer];
};

function pickRandomItems(sourceArray, min = 1, max = 1) {
	const count = Math.floor(Math.random() * (max - min + 1)) + min;

	return [...sourceArray].sort(() => 0.5 - Math.random()).slice(0, count);
}

const randomAllergies = (max = 3) => {
	const allergens = [
		"Penicillin",
		"Aspirin",
		"Sulfa drugs",
		"Latex",
		"Peanuts",
		"Shellfish",
		"Eggs",
		"Milk",
		"Soy",
		"Wheat",
		"Tree nuts",
		"Iodine",
		"Contrast dye",
		"Morphine",
		"Codeine",
		"Ibuprofen",
		"Paracetamol",
		"Dust mites",
		"Pollen",
		"Animal dander",
	];
	return pickRandomItems(allergens);
};

const randomMedication = () => {
	const medications = [
		"Paracetamol",
		"Ibuprofen",
		"Amoxicillin",
		"Metformin",
		"Amlodipine",
		"Losartan",
		"Omeprazole",
		"Atorvastatin",
		"Insulin",
		"Salbutamol",
	];

	return pickRandomItems(medications);
};

const randomFamilyMedHistory = () => {
	const histories = [
		"Diabetes",
		"Hypertension",
		"Heart Disease",
		"Asthma",
		"Cancer",
		"Sickle Cell Disease",
		"Mental Illness",
		"Stroke",
		"Kidney Disease",
	];

	return pickRandomItems(histories);
};

const randomPastMedHistory = () => {
	const histories = [
		"Malaria",
		"Tuberculosis",
		"Pneumonia",
		"COVID-19",
		"Surgery",
		"Fracture",
		"Appendicitis",
		"Typhoid",
	];

	return pickRandomItems(histories);
};

const randomBloodType = () => {
	const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
	return bloodTypes[Math.floor(Math.random() * bloodTypes.length)];
};

const randomRelation = () => {
	const relations = ["aunt", "uncle", "cousin", "father", "mother", "sibling", "guradian"];
	return relations[Math.floor(Math.random() * relations.length)];
};

const randomRole = () => {
	const roles = ["doctor", "nurse", "staff"];
	return roles[Math.floor(Math.random() * roles.length)];
};

const randomRoomNames = () => {
	const roomNames = [
		"Emergency",
		"Surgery",
		"ICU - MICU",
		"ICU - SICU",
		"Maternity",
		"Pediatrics",
		"Cardiology",
		"Oncology",
		"Neurology",
		"Psychiatry",
		"Rehabilitation",
		"Radiology",
		"Pathology Lab",
		"Pharmacy",
		"Blood Bank",
		"Nutrition & Dietetics",
		"Health Records",
		"IT Office",
		"Biomedical Engineering",
		"Procurement Office",
		"Accounts Office",
		"Security Office",
	];
	const room = Math.floor(Math.random() * roomNames.length);
	return roomNames[room];
};

const randomDepartmentNames = () => {
	const departmentNames = [
		"Emergency/Accident & Emergency (A&E)",
		"Surgery (OR)",
		"Intensive Care Units (ICU)",
		"Maternity (L&D)",
		"Pediatrics (Peds/PICU)",
		"Cardiology",
		"Oncology",
		"Neurology",
		"Psychiatry",
		"Rehabilitation",
		"Radiology/Imaging",
		"Pathology/Laboratories",
		"Pharmacy",
		"Blood Bank",
		"Nutrition & Dietetics",
		"Health Records",
		"IT (Information Technology)",
		"Biomedical Engineering",
		"Procurement",
		"Accounts/Finance",
		"Security & Facilities",
	];
	const department = Math.floor(Math.random() * departmentNames.length);
	return departmentNames[department];
};

module.exports = {
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
	randomDepartmentNames,
};



