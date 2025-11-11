const getEmployees = (req, res) => {
    res.send("All Employees...")
}

const getEmployee = (req, res) => {
    res.send("Single Employee...")
}

const createEmployee = (req, res) => {
    res.send("Employee Created!")
}

const updateEmployee = (req, res) => {
    res.send("Employee Updated!")
}

const removeEmployee = (req, res) => {
    res.send("Employee Removed!")
}

module.exports = { getEmployees, createEmployee, getEmployee, updateEmployee, removeEmployee }