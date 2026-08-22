from odoo import models, fields


class Employee(models.Model):
    _name = "employee"
    _description = "Employee"

    

    name = fields.Char(
        string="Name",
        required=True
    )

    email = fields.Char(
        string="Email"
    )

    phone = fields.Char(
        string="Phone"
    )

    dateOfBirth = fields.Date(
        string="Date of Birth"
    )

    address = fields.Text(
        string="Address"
    )

    employeeId = fields.Char(
        string="Employee ID",
        required=True
    )

    department = fields.Char(
        string="Department"
    )

    designation = fields.Char(
        string="Designation"
    )

    joiningDate = fields.Date(
        string="Joining Date"
    )

    manager = fields.Char(
        string="Manager"
    )

    employmentType = fields.Selection(
        [
            ("full_time", "Full Time"),
            ("part_time", "Part Time"),
            ("contract", "Contract"),
            ("intern", "Intern"),
        ],
        string="Employment Type"
    )

    status = fields.Selection(
        [
            ("active", "Active"),
            ("inactive", "Inactive"),
            ("on_leave", "On Leave"),
        ],
        string="Status",
        default="active"
    )

    profileCompletion = fields.Integer(
        string="Profile Completion (%)",
        default=100
    )