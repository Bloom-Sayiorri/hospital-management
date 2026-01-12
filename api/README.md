Entities:

1. Patient: Stores information about patients such as patient ID, name, contact details, and address.
2. Doctor: Contains details about doctors including doctor ID, name, specialty, contact information, and department.
3. Appointment: Represents appointments made by patients with doctors. It includes attributes like appointment ID, appointment date and time, patient ID, doctor ID, and any additional notes.
4. Staff: Stores information about hospital staff members such as staff ID, name, position, and contact details.
5. Department: Contains details about different departments in the hospital. Each department has a department ID and name.
6. Medical Record: Stores medical records for patients, including patient ID, doctor ID, diagnosis, treatment, and other relevant medical information.

Relationships:

1. Patient-Appointment (Many-to-Many): A patient can have multiple appointments, and each appointment can involve multiple patients.
2. Doctor-Appointment (One-to-Many): A doctor can have multiple appointments, but each appointment is associated with only one doctor.
3. Doctor-Department (Many-to-One): Many doctors can work in one department, but each doctor belongs to only one department.
4. Staff-Department (Many-to-One): Many staff members can work in one department, but each staff member belongs to only one department.
5. Medical Record-Patient (One-to-One): Each patient has one medical record, and each medical record is associated with only one patient.

# Structure
✅ Core models
✅ Optional advanced models
✅ Fields for each model
✅ Relationships explained
✅ A clean ERD structure
✅ Prisma schema example (if you want it)

# Models
1️⃣ User

(For staff accounts: admin, doctor, nurse, receptionist)

Fields

id

name

email

password_hash

role (admin | doctor | nurse | receptionist | accountant)

phone

avatar_url

2️⃣ Patient

Fields

id

first_name

last_name

gender

date_of_birth

phone

email

address

emergency_contact_name

emergency_contact_phone

blood_type

allergies

notes

3️⃣ Doctor

(If you want doctors separate from user accounts)

Fields

id

user_id (FK → User)

specialization

years_of_experience

available_days

license_number

bio

4️⃣ Appointment

Fields

id

patient_id (FK → Patient)

doctor_id (FK → Doctor)

date

time

status (scheduled | completed | cancelled | no_show)

reason

notes

5️⃣ MedicalRecord

Fields

id

patient_id

doctor_id

diagnosis

symptoms

prescription

lab_results_id (optional)

visit_date

follow_up_required (boolean)

6️⃣ Prescription

Fields

id

patient_id

doctor_id

medication_name

dosage

frequency

duration

notes

date_issued

7️⃣ Medication

(If you want inventory)

Fields

id

name

description

stock

manufacturer

expiry_date

8️⃣ Billing

Fields

id

patient_id

appointment_id

amount

status (paid | pending | cancelled)

date

9️⃣ Payment

Fields

id

billing_id

amount

method (m-pesa, cash, card)

timestamp

🧪 OPTIONAL BUT IMPORTANT MODELS

These take your HMS from basic → professional.

🔬 LabTest

Fields

id

patient_id

test_type (blood test, MRI, X-ray, etc.)

doctor_id

requested_date

🧫 LabResult

Fields

id

lab_test_id (FK → LabTest)

result_text

result_file (PDF or image)

date_completed

notes

🛏️ Ward

Fields

id

name

type (general, ICU, maternity, etc.)

capacity

🛌 Bed

Fields

id

ward_id

bed_number

is_occupied

🏥 Admission

Fields

id

patient_id

ward_id

bed_id

admitted_at

discharged_at (NULL if still admitted)

diagnosis

notes

🧾 Insurance

Fields

id

patient_id

provider

policy_number

coverage_details

expiry_date

📌 RELATIONSHIPS

A Patient can have many Appointments

A Doctor can have many Appointments

A Patient can have many MedicalRecords

A MedicalRecord belongs to one Doctor

An Appointment may generate one Billing

A Billing has many Payments

A Patient can have many LabTests

A LabTest has one LabResult

A Ward has many Beds

A Bed may have one active Admission

A Patient can be Admitted many times (history)