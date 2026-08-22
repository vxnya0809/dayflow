import StatCard from "@/components/hr/Dashboard/StatCard";
import PendingApprovals from "@/components/hr/Dashboard/PendingApprovals";
import AttendanceOverview from "@/components/hr/Dashboard/AttendanceOverview";
import IncompleteProfiles from "@/components/hr/Dashboard/IncompleteProfiles";
import { employees } from "@/data/mockHRData";

export default function HRDashboardPage() {
  const pendingApprovals = employees.reduce(
    (total, employee) =>
      total +
      employee.leaveRequests.filter(
        (leave) => leave.status === "Pending"
      ).length,
    0
  );

  return (
    <div className="mx-auto max-w-7xl space-y-8">
      <div>
        <p className="text-sm font-medium text-indigo-600">
          Saturday, 22 August 2026
        </p>

        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
          Good morning, HR Admin 👋
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Here's what's happening across your workforce today.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Total Employees"
          value="25"
          icon="👥"
          description="+4.2% from last month"
          type="blue"
        />

        <StatCard
          title="Present Today"
          value="20"
          icon="✓"
          description="80% attendance"
          type="green"
        />

        <StatCard
          title="On Leave"
          value="3"
          icon="◷"
          description="Today"
          type="orange"
        />

        <StatCard
          title="Pending Approvals"
          value={pendingApprovals}
          icon="!"
          description="Requires your action"
          type="red"
        />
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <AttendanceOverview />
        <PendingApprovals employees={employees} />
      </div>

      <IncompleteProfiles employees={employees} />
    </div>
  );
}