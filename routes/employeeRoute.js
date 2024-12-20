import express from 'express';
const router = express.Router();
import authenticateUser from '../middleware/authenticateUser.js';
import findEmployee from '../middleware/findEmployee.js';
import * as employeeActions from '../controllers/employeeController.js';

router.route("/")
    .get(employeeActions.getAllEmployees)
    .post(authenticateUser, employeeActions.createEmployee);

router.route("/:id")
    .get(findEmployee, employeeActions.getEmployee)
    .patch(authenticateUser, findEmployee, employeeActions.updateEmployee)
    .delete(authenticateUser, findEmployee, employeeActions.deleteEmployee);

export default router;
