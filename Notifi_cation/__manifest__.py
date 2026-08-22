{
    'name': 'DayFlow Notifications',
    'version': '1.0',
    'summary': 'Notifications, task clarification and HR availability',
    'category': 'Human Resources',
    'depends': [
        'hr',
        'hr_holidays',
    ],
    'data': [
        'security/ir.model.access.csv',
        'views/notification_views.xml',
        'views/task_views.xml',
        'views/hr_status_views.xml',
    ],
    'installable': True,
    'application': True,
}