from odoo import models, fields, api


class Payroll(models.Model):
    _name = 'payroll'
    _description = 'Employee Payroll'

    employeeId = fields.Many2one(
        'hr.employee',
        string='Employee',
        required=True
    )

    month = fields.Char(
        string='Month',
        required=True
    )

    basicSalary = fields.Float(
        string='Basic Salary',
        default=0.0
    )

    allowances = fields.Float(
        string='Allowances',
        default=0.0
    )

    deductions = fields.Float(
        string='Deductions',
        default=0.0
    )

    netSalary = fields.Float(
        string='Net Salary',
        compute='_compute_net_salary',
        store=True
    )

    status = fields.Selection(
        [
            ('draft', 'Draft'),
            ('processed', 'Processed'),
            ('paid', 'Paid')
        ],
        string='Status',
        default='draft'
    )

    @api.depends('basicSalary', 'allowances', 'deductions')
    def _compute_net_salary(self):
        for record in self:
            record.netSalary = (
                record.basicSalary
                + record.allowances
                - record.deductions
            )