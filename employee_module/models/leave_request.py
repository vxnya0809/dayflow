from odoo import models, fields, api


class LeaveRequest(models.Model):
    _name = "leave.request"
    _description = "Leave Request"
    _order = "id desc"

    

    employeeId = fields.Many2one(
        "employee",
        string="Employee",
        required=True,
        ondelete="cascade"
    )

    leaveType = fields.Selection(
        [
            ("paid", "Paid Leave"),
            ("sick", "Sick Leave"),
            ("casual", "Casual Leave"),
        ],
        string="Leave Type",
        required=True
    )

    startDate = fields.Date(
        string="Start Date",
        required=True
    )

    endDate = fields.Date(
        string="End Date",
        required=True
    )

    duration = fields.Integer(
        string="Duration",
        compute="_compute_duration",
        store=True
    )

    reason = fields.Text(
        string="Reason",
        required=True
    )

    status = fields.Selection(
        [
            ("pending", "Pending"),
            ("approved", "Approved"),
            ("rejected", "Rejected"),
        ],
        string="Status",
        default="pending",
        required=True
    )

    @api.depends("startDate", "endDate")
    def _compute_duration(self):
        for record in self:
            if record.startDate and record.endDate:
                record.duration = (
                    record.endDate - record.startDate
                ).days + 1
            else:
                record.duration = 0