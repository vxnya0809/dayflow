"use client";

import { useState } from "react";
import { Employee } from "@/types/hr";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

interface Props {
  employee: Employee;
}

export default function LeaveTab({ employee }: Props) {
  const [requests, setRequests] = useState(employee.leaveRequests);

  const [message, setMessage] = useState("");

  const approveLeave = (id: string) => {
    setRequests((current) =>
      current.map((request) =>
        request.id === id
          ? { ...request, status: "Approved" }
          : request
      )
    );

    setMessage("Leave request approved successfully.");

    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  const rejectLeave = (id: string) => {
    setRequests((current) =>
      current.map((request) =>
        request.id === id
          ? { ...request, status: "Rejected" }
          : request
      )
    );

    setMessage("Leave request rejected.");
    
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  return (
    <div className="space-y-6">
      {message && (
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-medium text-emerald-700">
          ✓ {message}
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-3">
        <BalanceCard
          title="Paid Leave"
          value={employee.leaveBalance.paid}
        />

        <BalanceCard
          title="Sick Leave"
          value={employee.leaveBalance.sick}
        />

        <BalanceCard
          title="Casual Leave"
          value={employee.leaveBalance.casual}
        />
      </div>

      <Card className="overflow-hidden">
        <div className="border-b border-gray-100 p-6">
          <h2 className="font-semibold text-gray-900">
            Leave Requests
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Review and manage employee leave requests.
          </p>
        </div>

        {requests.length === 0 ? (
          <div className="p-10 text-center text-sm text-gray-500">
            No leave requests found.
          </div>
        ) : (
          <div className="divide-y divide-gray-100">
            {requests.map((request) => (
              <div key={request.id} className="p-6">
                <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="font-semibold text-gray-900">
                        {request.leaveType}
                      </h3>

                      <Badge
                        variant={
                          request.status === "Pending"
                            ? "warning"
                            : request.status === "Approved"
                              ? "success"
                              : "danger"
                        }
                      >
                        {request.status}
                      </Badge>
                    </div>

                    <p className="mt-2 text-sm text-gray-500">
                      {request.startDate} – {request.endDate}
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Duration: {request.duration} day
                      {request.duration > 1 ? "s" : ""}
                    </p>

                    <div className="mt-4 rounded-xl bg-gray-50 p-4">
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                        Reason
                      </p>

                      <p className="mt-1 text-sm text-gray-700">
                        {request.reason}
                      </p>
                    </div>
                  </div>

                  {request.status === "Pending" && (
                    <div className="flex gap-2">
                      <Button
                        variant="success"
                        onClick={() => approveLeave(request.id)}
                      >
                        ✓ Approve
                      </Button>

                      <Button
                        variant="danger"
                        onClick={() => rejectLeave(request.id)}
                      >
                        ✕ Reject
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
}

function BalanceCard({
  title,
  value,
}: {
  title: string;
  value: number;
}) {
  return (
    <Card className="p-5">
      <p className="text-sm text-gray-500">{title}</p>

      <div className="mt-3 flex items-end gap-2">
        <p className="text-3xl font-bold text-gray-900">{value}</p>
        <span className="pb-1 text-xs text-gray-400">days available</span>
      </div>
    </Card>
  );
}