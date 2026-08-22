{
    "name": "DayFlow Employee",
    "version": "1.0.0",
    "summary": "Employee Profile and Leave Management",
    "description": """
DayFlow Employee Module

Features:
- Employee profile
- Employee information
- Employee dashboard
- Leave application
- Leave history
- Leave status
- Animated employee interface
    """,
    "category": "Human Resources",
    "author": "DayFlow Team",
    "license": "LGPL-3",

    "depends": [
        "base",
    ],

    "data": [
        "security/ir.model.access.csv",
        "views/employee_views.xml",
        "views/leave_request_views.xml",
        "views/employee_dashboard.xml",
        "data/employee_demo.xml",
    ],

    "assets": {
        "web.assets_backend": [
            "employee_module/static/src/css/employee.css",
            "employee_module/static/src/js/employee.js",
        ],
    },

    "installable": True,
    "application": True,
}