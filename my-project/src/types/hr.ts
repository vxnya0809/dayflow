export type EmployeeStatus = "Active" | "On Leave" | "Inactive";

export type LeaveType = "Paid Leave" | "Sick Leave" | "Casual Leave";

export type LeaveStatus = "Pending" | "Approved" | "Rejected";

export type PayrollStatus = "Processed" | "Pending";

export type TaskStatus = "Completed" | "In Progress" | "Pending";

export type DocumentStatus = "Verified" | "Missing" | "Pending";

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