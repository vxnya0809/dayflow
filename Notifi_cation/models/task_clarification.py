from odoo import models, fields


class TaskClarification(models.Model):
    _name = 'hrms.task.clarification'
    _description = 'Task Clarification'

    employeeId = fields.Many2one(
        'hr.employee',
        string='Employee',
        required=True
    )

    message = fields.Text(
        string='Employee Message',
        required=True
    )

    hrReply = fields.Text(
        string='HR Reply'
    )

    status = fields.Selection(
        [
            ('pending', 'Pending'),
            ('answered', 'Answered')
        ],
        string='Status',
        default='pending'
    )