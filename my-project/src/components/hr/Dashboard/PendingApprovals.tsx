"use client";

import Link from "next/link";
import { Employee } from "@/types/hr";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

interface Props {
  employees: Employee[];
}

export default function PendingApprovals({ employees }: Props) {
  const pending = employees.flatMap((employee) =>
    employee.leaveRequests
      .filter((leave) => leave.status === "Pending")
      .map((leave) => ({
        employee,
        leave,
      }))
  );

  return (
    <Card className="overflow-hidden">
      <div className="flex items-center justify-between border-b border-gray-100 p-5">
        <div>
          <h2 className="font-semibold text-gray-900">Pending Approvals</h2>
          <p className="mt-1 text-xs text-gray-500">
            Leave requests waiting for action
          </p>
        </div>

        <Badge variant="warning">{pending.length} Pending</Badge>
      </div>

      <div className="divide-y divide-gray-100">
        {pending.length === 0 ? (
          <div className="p-8 text-center text-sm text-gray-500">
            No pending requests 🎉
          </div>
        ) : (
          pending.map(({ employee, leave }) => (
            <div key={leave.id} className="p-5">
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo-100 font-semibold text-indigo-700">
                    {employee.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900">
                      {employee.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {employee.department} • {employee.employeeId}
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-800">
                    {leave.leaveType}
                  </p>
                  <p className="text-xs text-gray-500">
                    {leave.startDate} – {leave.endDate}
                  </p>
                </div>

                <div className="flex gap-2">
                  <Link
                    href={`/hr/employees/${employee.id}?tab=leave`}
                    className="rounded-lg border border-gray-200 px-3 py-2 text-xs font-medium text-gray-700 hover:bg-gray-50"
                  >
                    View
                  </Link>

                  <Link
                    href={`/hr/employees/${employee.id}?tab=leave`}
                    className="rounded-lg bg-emerald-600 px-3 py-2 text-xs font-medium text-white hover:bg-emerald-700"
                  >
                    Approve
                  </Link>
                </div>
              </div>

              <div className="mt-3 rounded-lg bg-gray-50 p-3 text-xs text-gray-600">
                <span className="font-semibold">Reason:</span>{" "}
                {leave.reason}
              </div>
            </div>
          ))
        )}
      </div>
    </Card>
  );
}