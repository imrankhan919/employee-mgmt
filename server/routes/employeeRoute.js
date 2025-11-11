const express = require('express')
const { getEmployees, createEmployee, getEmployee, updateEmployee, removeEmployee } = require('../controllers/employeeController')

const router = express.Router()

// METHOD : GET
// ENDPOINT : /api/employee
// DESC : FETCH ALL EMPLOYEES
router.get("/", getEmployees)

// METHOD : POST
// ENDPOINT : /api/employee
// DESC : CREATE EMPLOYEE
router.post("/", createEmployee)

// METHOD : GET
// ENDPOINT : /api/employee/:id
// DESC : GET SINGLE EMPLOYEE
router.get("/:id", getEmployee)

// METHOD : PUT
// ENDPOINT : /api/employee/:id
// DESC : UPDATE SINGLE EMPLOYEE
router.put("/:id", updateEmployee)

// METHOD : DELETE
// ENDPOINT : /api/employee/:id
// DESC : REMOVE SINGLE EMPLOYEE
router.delete("/:id", removeEmployee)


module.exports = router