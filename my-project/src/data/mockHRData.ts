export type EmployeeStatus = "Active" | "On Leave" | "Inactive";

export type LeaveType =
  | "Paid Leave"
  | "Sick Leave"
  | "Casual Leave";

export type LeaveStatus =
  | "Pending"
  | "Approved"
  | "Rejected";

export type PayrollStatus =
  | "Processed"
  | "Pending";

export type TaskStatus =
  | "Completed"
  | "In Progress"
  | "Pending";

export type DocumentStatus =
  | "Verified"
  | "Missing"
  | "Pending";

export interface LeaveRequest {
  id: string;
  employeeId: string;
  leaveType: LeaveType;
  startDate: string;
  endDate: string;
  duration: number;
  reason: string;
  status: LeaveStatus;
}

export interface Attendance {
  employeeId: string;
  present: number;
  absent: number;
  late: number;
  attendanceRate: number;
}

export interface Payroll {
  id: string;
  employeeId: string;
  month: string;
  basicSalary: number;
  allowances: number;
  deductions: number;
  netSalary: number;
  status: PayrollStatus;
}

export interface Task {
  id: string;
  employeeId: string;
  title: string;
  status: TaskStatus;
}

export interface EmployeeDocument {
  id: string;
  employeeId: string;
  name: string;
  status: DocumentStatus;
}

export interface Approval {
  id: string;
  employeeId: string;
  type: string;
  description: string;
  status: "Approved" | "Rejected";
  date: string;
  approvedBy: string;
}

export interface Employee {
  id: string;
  name: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  address: string;
  employeeId: string;
  department: string;
  designation: string;
  joiningDate: string;
  manager: string;
  employmentType: string;
  status: EmployeeStatus;
  profileCompletion: number;

  attendance: Attendance;

  leaveRequests: LeaveRequest[];

  leaveBalance: {
    paid: number;
    sick: number;
    casual: number;
  };

  payroll: Payroll;

  tasks: Task[];

  documents: EmployeeDocument[];

  approvalHistory: Approval[];
}

/* -------------------------------------------------------------------------- */
/* Employee Data                                                              */
/* -------------------------------------------------------------------------- */

export const employees: Employee[] = [
  {
    id: "1",
    name: "Arun Kumar",
    email: "arun@dayflow.com",
    phone: "+91 9876543210",
    dateOfBirth: "1998-05-12",
    address: "Chennai, Tamil Nadu",
    employeeId: "EMP001",
    department: "Engineering",
    designation: "Software Engineer",
    joiningDate: "2024-06-10",
    manager: "Rahul Sharma",
    employmentType: "Full Time",
    status: "Active",
    profileCompletion: 95,

    attendance: {
      employeeId: "EMP001",
      present: 22,
      absent: 1,
      late: 2,
      attendanceRate: 95.65,
    },

    leaveRequests: [
      {
        id: "LR001",
        employeeId: "EMP001",
        leaveType: "Paid Leave",
        startDate: "2026-08-25",
        endDate: "2026-08-26",
        duration: 2,
        reason: "Personal work",
        status: "Pending",
      },
    ],

    leaveBalance: {
      paid: 12,
      sick: 8,
      casual: 6,
    },

    payroll: {
      id: "PAY001",
      employeeId: "EMP001",
      month: "August 2026",
      basicSalary: 45000,
      allowances: 8000,
      deductions: 3000,
      netSalary: 50000,
      status: "Processed",
    },

    tasks: [
      {
        id: "TASK001",
        employeeId: "EMP001",
        title: "Complete HR dashboard",
        status: "In Progress",
      },
      {
        id: "TASK002",
        employeeId: "EMP001",
        title: "Fix attendance module",
        status: "Completed",
      },
    ],

    documents: [
      {
        id: "DOC001",
        employeeId: "EMP001",
        name: "Aadhaar Card",
        status: "Verified",
      },
      {
        id: "DOC002",
        employeeId: "EMP001",
        name: "Offer Letter",
        status: "Verified",
      },
    ],

    approvalHistory: [
      {
        id: "APP001",
        employeeId: "EMP001",
        type: "Leave",
        description: "Paid leave request",
        status: "Approved",
        date: "2026-08-10",
        approvedBy: "HR Admin",
      },
    ],
  },

  {
    id: "2",
    name: "Priya Raj",
    email: "priya@dayflow.com",
    phone: "+91 9876543211",
    dateOfBirth: "1997-09-21",
    address: "Bangalore, Karnataka",
    employeeId: "EMP002",
    department: "Human Resources",
    designation: "HR Executive",
    joiningDate: "2023-08-15",
    manager: "Meena Krishnan",
    employmentType: "Full Time",
    status: "Active",
    profileCompletion: 90,

    attendance: {
      employeeId: "EMP002",
      present: 21,
      absent: 2,
      late: 1,
      attendanceRate: 91.3,
    },

    leaveRequests: [
      {
        id: "LR002",
        employeeId: "EMP002",
        leaveType: "Sick Leave",
        startDate: "2026-08-28",
        endDate: "2026-08-28",
        duration: 1,
        reason: "Medical appointment",
        status: "Pending",
      },
    ],

    leaveBalance: {
      paid: 10,
      sick: 7,
      casual: 5,
    },

    payroll: {
      id: "PAY002",
      employeeId: "EMP002",
      month: "August 2026",
      basicSalary: 40000,
      allowances: 7000,
      deductions: 2500,
      netSalary: 44500,
      status: "Processed",
    },

    tasks: [
      {
        id: "TASK003",
        employeeId: "EMP002",
        title: "Review employee documents",
        status: "Completed",
      },
      {
        id: "TASK004",
        employeeId: "EMP002",
        title: "Process leave requests",
        status: "In Progress",
      },
    ],

    documents: [
      {
        id: "DOC003",
        employeeId: "EMP002",
        name: "Aadhaar Card",
        status: "Verified",
      },
      {
        id: "DOC004",
        employeeId: "EMP002",
        name: "Experience Certificate",
        status: "Pending",
      },
    ],

    approvalHistory: [],
  },

  {
    id: "3",
    name: "Rahul Sharma",
    email: "rahul@dayflow.com",
    phone: "+91 9876543212",
    dateOfBirth: "1995-02-14",
    address: "Hyderabad, Telangana",
    employeeId: "EMP003",
    department: "Engineering",
    designation: "Senior Software Engineer",
    joiningDate: "2022-01-20",
    manager: "CTO",
    employmentType: "Full Time",
    status: "Active",
    profileCompletion: 98,

    attendance: {
      employeeId: "EMP003",
      present: 23,
      absent: 0,
      late: 1,
      attendanceRate: 95.8,
    },

    leaveRequests: [],

    leaveBalance: {
      paid: 15,
      sick: 10,
      casual: 7,
    },

    payroll: {
      id: "PAY003",
      employeeId: "EMP003",
      month: "August 2026",
      basicSalary: 65000,
      allowances: 12000,
      deductions: 5000,
      netSalary: 72000,
      status: "Processed",
    },

    tasks: [
      {
        id: "TASK005",
        employeeId: "EMP003",
        title: "Review application architecture",
        status: "Completed",
      },
      {
        id: "TASK006",
        employeeId: "EMP003",
        title: "Mentor junior developers",
        status: "In Progress",
      },
    ],

    documents: [
      {
        id: "DOC005",
        employeeId: "EMP003",
        name: "Aadhaar Card",
        status: "Verified",
      },
      {
        id: "DOC006",
        employeeId: "EMP003",
        name: "PAN Card",
        status: "Verified",
      },
    ],

    approvalHistory: [],
  },
];

/* -------------------------------------------------------------------------- */
/* Helper Functions                                                           */
/* -------------------------------------------------------------------------- */

export function getEmployeeById(
  id: string
): Employee | undefined {
  return employees.find(
    (employee) =>
      employee.id === id ||
      employee.employeeId === id
  );
}