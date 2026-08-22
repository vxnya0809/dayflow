from odoo import models, fields, api


class Attendance(models.Model):
    _name = 'attendance'
    _description = 'Employee Attendance'

    employeeId = fields.Many2one(
        'hr.employee',
        string='Employee',
        required=True
    )

    present = fields.Integer(
        string='Present',
        default=0
    )

    absent = fields.Integer(
        string='Absent',
        default=0
    )

    late = fields.Integer(
        string='Late',
        default=0
    )

    attendanceRate = fields.Float(
        string='Attendance Rate (%)',
        compute='_compute_attendance_rate',
        store=True
    )

    @api.depends('present', 'absent')
    def _compute_attendance_rate(self):
        for record in self:
            total = record.present + record.absent

            if total:
                record.attendanceRate = (
                    record.present / total
                ) * 100
            else:
                record.attendanceRate = 0.0