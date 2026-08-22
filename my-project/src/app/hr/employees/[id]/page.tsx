import { notFound } from "next/navigation";
import { getEmployeeById } from "@/data/mockHRData";

import EmployeeHeader from "@/components/hr/Employee360/EmployeeHeader";
import EmployeeTabs from "@/components/hr/Employee360/EmployeeTabs";

import ProfileTab from "@/components/hr/Employee360/ProfileTab";
import AttendanceTab from "@/components/hr/Employee360/AttendanceTab";
import LeaveTab from "@/components/hr/Employee360/LeaveTab";
import PayrollTab from "@/components/hr/Employee360/PayrollTab";
import TasksTab from "@/components/hr/Employee360/TasksTab";
import DocumentsTab from "@/components/hr/Employee360/DocumentsTab";
import ApprovalHistoryTab from "@/components/hr/Employee360/ApprovalHistoryTab";

interface Props {
  params: Promise<{
    id: string;
  }>;
  searchParams: Promise<{
    tab?: string;
  }>;
}

export default async function Employee360Page({
  params,
  searchParams,
}: Props) {
  const { id } = await params;
  const { tab = "profile" } = await searchParams;

  const employee = getEmployeeById(id);

  if (!employee) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-7xl space-y-6">
      <EmployeeHeader employee={employee} />

      <EmployeeTabs activeTab={tab} />

      <div>
        {tab === "profile" && <ProfileTab employee={employee} />}

        {tab === "attendance" && (
          <AttendanceTab employee={employee} />
        )}

        {tab === "leave" && <LeaveTab employee={employee} />}

        {tab === "payroll" && <PayrollTab employee={employee} />}

        {tab === "tasks" && <TasksTab employee={employee} />}

        {tab === "documents" && (
          <DocumentsTab employee={employee} />
        )}

        {tab === "history" && (
          <ApprovalHistoryTab employee={employee} />
        )}
      </div>
    </div>
  );
}