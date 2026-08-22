from odoo import models, fields


class HRMSNotification(models.Model):
    _name = 'hrms.notification'
    _description = 'HRMS Notification'

    employeeId = fields.Many2one(
        'hr.employee',
        string='Employee'
    )

    notificationType = fields.Selection(
        [
            ('leave_submitted', 'Leave Request Submitted'),
            ('leave_approved', 'Leave Approved'),
            ('leave_rejected', 'Leave Rejected'),
            ('payroll_updated', 'Payroll Updated'),
            ('new_leave', 'New Leave Request'),
            ('checkin_missing', 'Employee Has Not Checked In'),
            ('profile_incomplete', 'Incomplete Employee Profile'),
        ],
        string='Notification Type',
        required=True
    )

    message = fields.Text(
        string='Message',
        required=True
    )

    status = fields.Selection(
        [
            ('unread', 'Unread'),
            ('read', 'Read')
        ],
        string='Status',
        default='unread'
    )