const Employee = require("../models/employeModel")

const getEmployees = async (req, res) => {

    // Find All Employees
    const employees = await Employee.find()

    if (!employees) {
        res.status(404)
        res.json({
            message: "Empoyees Not Found!"
        })
    }

    res.status(200)
    res.json(employees)


}



const getEmployee = async (req, res) => {
    // Find Single Employee
    const employee = await Employee.findById(req.params.id)

    if (!employee) {
        res.status(404)
        res.json({
            message: "Empoyee Not Found!"
        })
    }

    res.status(200)
    res.json(employee)
}

const createEmployee = async (req, res) => {

    const { name, email, age, salary } = req.body

    if (!name || !email || !age || !salary) {
        res.status(400)
        res.json({
            message: "Please Fill All Details"
        })
    }

    // Create Employee
    const newEmployee = await Employee.create({ name, email, age, salary })

    if (!newEmployee) {
        res.status(400)
        res.json({
            message: "Employee Not Created"
        })
    }

    res.status(201)
    res.json(newEmployee)

}

const updateEmployee = async (req, res) => {

    // Update Single Employee
    const updatedEmployee = await Employee.findByIdAndUpdate(req.params.id, req.body)

    if (!updatedEmployee) {
        res.status(400)
        res.json({
            message: "Empoyees Not Updated!"
        })
    }

    res.status(200)
    res.json(updatedEmployee)

}

const removeEmployee = async (req, res) => {
    // Remove Employee
    await Employee.findByIdAndDelete(req.params.id)

    res.status(200)
    res.json({
        _id: req.params.id,
        message: "Employee Deleted!"
    })

}

module.exports = { getEmployees, createEmployee, getEmployee, updateEmployee, removeEmployee }