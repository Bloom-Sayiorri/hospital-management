const Department = require("../models/department.model")

const getAllDepartments = async (req, res, next) => {
	try {
		const departments = await Department.find({});
		if (departments.length === 0) {
			return res.status(200).json({ data: [], messages: "Failed to retrieve departments" });
		}
		res.status(200).json({
			data: departments,
			message: "Departments retrieved successfully",
			success: true,
		});
	} catch (error) {
		console.error(error.message);
		next(error);
	}
};

const getSingleDepartment = async (req, res, next) => {
	try {
		const department = await Department.findById(req.params.id);
		if (!department) {
			return res.status(404).json({ message: "Failed to retrieve department" });
		}
		res.status(200).json({
			data: department,
			message: "Department retrieved successfully",
			success: true,
		});
	} catch (error) {
		console.error(error.message);
		next(error);
	}
};

const createDepartment = async (req, res, next) => {
	try {
		const department = await Department.create(req.body);
		res.status(201).json({
			data: department,
			message: "Department created successfully",
			success: true,
		});
	} catch (error) {
		console.error(error.message);
		next(error);
	}
};

const updateDepartment = async (req, res, next) => {
	try {
		const { id } = req.params;
		const updates = { ...req.body };
		const options = { new: true, runValidators: true };
		const department = await Department.findByIdAndUpdate(id, updates, options);
		if (!department) {
			return res.status(404).json({ message: " Failed to retrieve department" });
		}
		res.status(200).json({
			data: department,
			message: "Department updated successfully",
			success: true,
		});
	} catch (error) {
		console.error(error.message);
		next(error);
	}
};

const deleteDepartment = async (req, res, next) => {
	try {
		const department = await Department.findByIdAndDelete(req.params.id);
		if (!department) {
			return res.status(404).json({ message: "Failed to retireve department" });
		}
		res.status(200).json({
			message: "Department deleted successfully",
			success: true,
		});
	} catch (error) {
		console.error(error.message);
		next(error);
	}
};

module.exports = {
    getAllDepartments,
    getSingleDepartment,
    createDepartment,
    updateDepartment,
    deleteDepartment
}