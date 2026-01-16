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

function pickRandomItems(sourceArray, min = 1, max = 3) {
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

const randomDiagnosis = () => {
	const diagnoses = [
		"Malaria",
		"Typhoid Fever",
		"Pneumonia",
		"Tuberculosis",
		"COVID-19",
		"HIV/AIDS",
		"Urinary Tract Infection (UTI)",
		"Hypertension",
		"Coronary Artery Disease",
		"Heart Failure",
		"Arrhythmia",
		"Stroke",
		"Asthma",
		"Chronic Obstructive Pulmonary Disease (COPD)",
		"Acute Bronchitis",
		"Gastritis",
		"Peptic Ulcer Disease",
		"Appendicitis",
		"Hepatitis",
		"Irritable Bowel Syndrome (IBS)",
		"Migraine",
		"Epilepsy",
		"Parkinson's Disease",
		"Diabetes Mellitus Type 1",
		"Diabetes Mellitus Type 2",
		"Hyperthyroidism",
		"Hypothyroidism",
		"Fracture",
		"Osteoarthritis",
		"Rheumatoid Arthritis",
		"Lower Back Pain",
		"Pregnancy",
		"Pre-eclampsia",
		"Postpartum Hemorrhage",
		"Acute Otitis Media",
		"Bronchiolitis",
		"Failure to Thrive",
		"Depression",
		"Anxiety Disorder",
		"Bipolar Disorder",
		"Schizophrenia",
		"Breast Cancer",
		"Prostate Cancer",
		"Leukemia",
	];
	const diagnosis = diagnoses[Math.floor(Math.random() * diagnoses.length)];
	return diagnosis;
};

const randomNotes = () => {
	const notes = [
		"Patient presented with mild symptoms, currently stable.",
		"Vitals within normal limits on examination.",
		"Complains of intermittent pain; analgesics administered.",
		"No known drug allergies reported.",
		"Patient responding well to treatment.",
		"Symptoms improving since last review.",
		"Further diagnostic tests recommended.",
		"Patient admitted for observation.",
		"Condition stable, continue current management.",
		"Medication administered as prescribed.",
		"Patient reports no new complaints.",
		"Monitoring blood pressure and glucose levels.",
		"IV fluids started; patient tolerating well.",
		"Surgical site clean with no signs of infection.",
		"Patient educated on medication compliance.",
		"Dietary advice given and understood.",
		"Awaiting laboratory results.",
		"Discharge planning initiated.",
		"Follow-up appointment scheduled.",
		"Patient discharged in stable condition.",
	];
	return notes[Math.floor(Math.random() * notes.length)];
};

const randomReasons = () => {
	const reasons = [
		"Severe abdominal pain",
		"Chest pain",
		"Difficulty breathing",
		"High fever",
		"Loss of consciousness",
		"Severe headache",
		"Acute infection",
		"Traumatic injury",
		"Medical observation",
		"Monitoring of vital signs",
		"Uncontrolled blood pressure",
		"Uncontrolled blood sugar levels",
		"Dehydration",
		"Electrolyte imbalance",
		"Pre-operative assessment",
		"Post-operative care",
		"Emergency surgery",
		"Scheduled surgical procedure",
		"Labor and delivery",
		"Pregnancy complications",
		"Neonatal observation",
		"Pediatric illness requiring monitoring",
		"Exacerbation of chronic illness",
		"Cancer treatment",
		"Neurological evaluation",
		"Cardiac monitoring",
		"Psychiatric evaluation",
		"Referral from another facility",
		"Failed outpatient management",
		"Need for intravenous medication",
	];
	return reasons[Math.floor(Math.random() * reasons.length)];
};

const randomStatus = () => {
	const status = ["completed", "cancelled", "pending", "scheduled"];
	return status[Math.floor(Math.random() * status.length)];
};

const randomTreatment = (min = 1, max = 3) => {
	const treatments = [
		{ name: "General Consultation", cost: 1500 },
		{ name: "Emergency Consultation", cost: 3000 },
		{ name: "Blood Test (CBC)", cost: 2000 },
		{ name: "Malaria Test", cost: 1200 },
		{ name: "Urinalysis", cost: 1500 },
		{ name: "X-Ray", cost: 4000 },
		{ name: "CT Scan", cost: 25000 },
		{ name: "MRI Scan", cost: 45000 },
		{ name: "Intravenous Fluids", cost: 3500 },
		{ name: "Antibiotic Therapy", cost: 6000 },
		{ name: "Pain Management", cost: 2500 },
		{ name: "Oxygen Therapy", cost: 5000 },
		{ name: "Wound Dressing", cost: 2000 },
		{ name: "Minor Surgery", cost: 25000 },
		{ name: "Major Surgery", cost: 150000 },
		{ name: "Blood Transfusion", cost: 18000 },
		{ name: "Physiotherapy Session", cost: 3000 },
		{ name: "Dialysis Session", cost: 12000 },
		{ name: "Chemotherapy Session", cost: 80000 },
		{ name: "Normal Delivery", cost: 40000 },
		{ name: "Cesarean Section", cost: 120000 },
		{ name: "ICU Daily Charge", cost: 30000 },
		{ name: "General Ward Daily Charge", cost: 6000 },
	];
	const shuffled = treatments.sort(() => 0.5 - Math.random());
	const count = Math.floor(Math.random() * (max - min + 1)) + min;
	return shuffled.slice(0, count);
};

const randomCost = () => {
	const costs = [];
	return costs[Math.floor(Math.random() * costs.length)];
};

const randomBillingStatus = () => {
	const billingStatus = ["paid", "pending", "cancelled"];
	return billingStatus[Math.floor(Math.random() * billingStatus.length)];
};

const randomPaymentMethod = () => {
	const payments = ["cash", "card", "mobile money", "insurance"];
	return payments[Math.floor(Math.random() * payments.length)];
};

const randomSpeciality = () => {
	const specialities = [
		"General Practitioner",
		"Internal Medicine",
		"Cardiology",
		"Pediatrics",
		"General Surgery",
		"Orthopedic Surgery",
		"Neurosurgery",
		"Obstetrics & Gynecology",
		"Oncology",
		"Neurology",
		"Psychiatry",
		"Dermatology",
		"Radiology",
		"Anesthesiology",
		"Emergency Medicine",
		"Family Medicine",
		"Endocrinology",
		"Nephrology",
		"Pulmonology",
		"Gastroenterology",
	];
	return specialities[Math.floor(Math.random() * specialities.length)];
};

const randomLicenseNumber = () => {
	return Math.floor(Math.random() * 9999);
};
const randomYoe = () => {
	return Math.floor(Math.random() * 60);
};
const randomBio = () => {
	const bios = [
		"Experienced physician with a patient-centered approach to care.",
		"Dedicated to providing evidence-based medical treatment.",
		"Passionate about preventive healthcare and patient education.",
		"Skilled in managing both acute and chronic medical conditions.",
		"Strong background in hospital and clinical practice.",
		"Committed to improving patient outcomes through compassionate care.",
		"Experienced in multidisciplinary medical teams.",
		"Focused on continuous learning and professional development.",
		"Highly skilled in diagnostic evaluation and treatment planning.",
		"Known for clear communication and patient advocacy.",
	];
	return bios[Math.floor(Math.random() * bios.length)];
};

const randomSymptoms = () => {
	const symptoms = [
		"Fever",
		"Headache",
		"Chest pain",
		"Shortness of breath",
		"Abdominal pain",
		"Nausea",
		"Vomiting",
		"Diarrhea",
		"Fatigue",
		"Dizziness",
		"Cough",
		"Sore throat",
		"Body aches",
		"Joint pain",
		"Loss of appetite",
		"Weight loss",
		"Palpitations",
		"Blurred vision",
		"Back pain",
		"Swelling of limbs",
	];

	return [
		symptoms[Math.floor(Math.random() * symptoms.length)],
		symptoms[Math.floor(Math.random() * symptoms.length)],
		symptoms[Math.floor(Math.random() * symptoms.length)],
	];
};

const randomAttachments = () => {
	const attachments = [
		"lab_results.pdf",
		"xray_chest.png",
		"ct_scan_report.pdf",
		"mri_brain_scan.jpg",
		"ultrasound_report.pdf",
		"prescription_note.pdf",
		"discharge_summary.pdf",
		"referral_letter.pdf",
		"ecg_report.pdf",
		"blood_test_results.pdf",
	];
	return attachments[Math.floor(Math.random() * attachments.length)];
};

const randomMedName = () => {
	const itemNames = [
		"Paracetamol 500mg",
		"Amoxicillin 500mg",
		"Ibuprofen 400mg",
		"Metformin 500mg",
		"Amlodipine 10mg",
		"Ciprofloxacin 500mg",
		"Omeprazole 20mg",
		"Insulin Injection",
		"Salbutamol Inhaler",
		"Oral Rehydration Salts",
		"Vitamin C Tablets",
		"Iron Supplements",
		"Cough Syrup",
		"Antimalarial Tablets",
	];
	return itemNames[Math.floor(Math.random() * itemNames.length)];
};

const randomDescription = () => {
	const itemDescriptions = [
		"Used for pain relief and fever reduction.",
		"Broad-spectrum antibiotic for bacterial infections.",
		"Anti-inflammatory medication for pain and swelling.",
		"Used to manage blood sugar levels in diabetes.",
		"Prescribed for hypertension management.",
		"Antibiotic for treating severe infections.",
		"Reduces stomach acid production.",
		"Used in the management of diabetes mellitus.",
		"Relieves bronchospasm in asthma patients.",
		"Prevents dehydration caused by diarrhea.",
		"Boosts immunity and overall health.",
		"Used in the treatment of iron deficiency anemia.",
	];
	return itemDescriptions[Math.floor(Math.random() * itemDescriptions.length)];
};

const randomStock = () => {
	const stockStatuses = ["In-Stock", "Out-of-Stock"];
	return stockStatuses[Math.floor(Math.random * stockStatuses.length)];
};

const randomManufacturer = () => {
	const manufacturers = [
		"GlaxoSmithKline",
		"Pfizer",
		"AstraZeneca",
		"Sanofi",
		"Bayer",
		"Novartis",
		"Johnson & Johnson",
		"Cipla",
		"Sun Pharma",
		"Abbott Laboratories",
	];
	return manufacturers[Math.floor(Math.random() * manufacturers.length)];
};

const randomTitle = () => {
	const titles = [
		"Upcoming Appointment",
		"Appointment Reminder",
		"Lab Test Ready",
		"Billing Update",
		"Payment Confirmation",
		"Doctor Assigned",
		"Ward Transfer Notice",
		"Discharge Update",
		"Medication Reminder",
		"Follow-up Required",
		"Test Scheduled",
		"New Medical Report",
		"Appointment Rescheduled",
		"Insurance Update",
	];
	return titles[Math.floor(Math.random() * titles.length)];
};

const randomMessage = () => {
	const messages = [
		"Your appointment has been scheduled successfully.",
		"This is a reminder for your upcoming appointment.",
		"Your laboratory test results are now available.",
		"Your billing information has been updated.",
		"Your payment has been received successfully.",
		"A doctor has been assigned to oversee your care.",
		"You have been transferred to a different ward.",
		"Your discharge process has been initiated.",
		"Please remember to take your prescribed medication.",
		"A follow-up visit is required as advised by your doctor.",
		"Your medical test has been scheduled.",
		"A new medical report has been added to your records.",
		"Your appointment has been rescheduled.",
		"Your insurance details have been updated.",
	];
	return messages[Math.floor(Math.random() * messages.length)];
};

const randomType = () => {
	const types = ["appointment", "billing", "test", "general"];
	return types[Math.floor(Math.random() * types.length)];
};

const randomRead = () => {
	const reads = [true, false];
	return reads[Math.floor(Math.random() * reads.length)];
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
	randomDiagnosis,
	randomNotes,
	randomReasons,
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
	randomNotes,
	randomAttachments,
	randomMedName,
	randomDescription,
	randomStock,
	randomManufacturer,
	randomTitle,
	randomMessage,
	randomType,
	randomRead,
};