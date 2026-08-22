from odoo import models, fields


class HRStatus(models.Model):
    _name = 'hrms.hr.status'
    _description = 'HR Support Status'

    status = fields.Selection(
        [
            ('online', 'HR Online'),
            ('offline', 'HR Offline')
        ],
        string='HR Status',
        default='online',
        required=True
    )

    message = fields.Char(
        string='Support Message',
        default='HR Support'
    )