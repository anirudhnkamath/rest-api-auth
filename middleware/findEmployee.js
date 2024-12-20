import Employee from "../models/employee.js";

const findEmployee = async (req, res, next) => {
    let employee;
    try{
        employee = await Employee.findById(req.params.id);
        if(!employee) return res.status(404).json({message: "Cannot find employee"});
    } catch(err) {
        return res.status(500).json({message: err.message});
    }
    res.employee = employee;
    next();
}

export default findEmployee;