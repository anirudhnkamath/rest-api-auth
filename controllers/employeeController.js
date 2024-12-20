import Employee from '../models/employee.js';

// Create new employees
export const createEmployee = async (req, res) => {
    const employee = new Employee({
        name: req.body.name,
        salary: req.body.salary
    });

    try {
        await employee.save();
        res.status(201).json({ message: `New employee added with name ${req.body.name}` });
    } catch (err) {
        res.status(400).json({ err: err.message });
    }
};

// Get all employees
export const getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json(employees);
    } catch (err) {
        res.status(500).json({ err: err.message });
    }
};

// Get an employee by ID
export const getEmployee = async (req, res) => {
    res.status(200).json(res.employee);
    delete req.employee;
};

// Update an employee by ID
export const updateEmployee = async (req, res) => {
    if (req.body.name) res.employee.name = req.body.name;
    if (req.body.salary) res.employee.salary = req.body.salary;

    try {
        const updated = await res.employee.save();
        res.status(200).json({ message: `Updation of ${res.employee.name} successful` });
    } catch (err) {
        res.status(500).json({ message : err.message });
    }
};

// Delete an employee by ID
export const deleteEmployee = async (req, res) => {
    try {
        const employee = await Employee.findByIdAndDelete(res.employee.id);
        res.status(200).json({ message: `Successfully deleted ${res.employee.name}` });
    } catch (err) {
        res.status(500).json({ message : err.message });
    }
};
