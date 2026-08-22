{
    'name': 'Member 3 - Attendance Payroll',
    'version': '1.0',
    'summary': 'Attendance and Payroll Management',
    'category': 'Human Resources',

    'depends': [
        'hr',
        'hr_attendance',
        'hr_holidays',
        'hr_payroll',
    ],

    'data': [
        'security/ir.model.access.csv',
        'views/attendance_views.xml',
        'views/payroll_views.xml',
    ],

    'installable': True,
    'application': True,
}