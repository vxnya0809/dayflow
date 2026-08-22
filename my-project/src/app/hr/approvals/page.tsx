"use client";

import { useMemo, useState } from "react";
import { employees } from "@/data/mockHRData";

type RequestStatus = "Pending" | "Approved" | "Rejected";

type ApprovalRequest = {
  id: string;
  employeeId: string;
  employeeName: string;
  department: string;
  leaveType: string;
  startDate: string;
  endDate: string;
  duration: number;
  reason: string;
  status: RequestStatus;
};

export default function ApprovalsPage() {
  const initialRequests: ApprovalRequest[] = useMemo(() => {
    return employees.flatMap((employee) =>
      employee.leaveRequests.map((leave) => ({
        id: leave.id,
        employeeId: employee.employeeId,
        employeeName: employee.name,
        department: employee.department,
        leaveType: leave.leaveType,
        startDate: leave.startDate,
        endDate: leave.endDate,
        duration: leave.duration,
        reason: leave.reason,
        status: leave.status,
      }))
    );
  }, []);

  const [requests, setRequests] =
    useState<ApprovalRequest[]>(initialRequests);

  const [filter, setFilter] = useState<"All" | RequestStatus>("All");

  const filteredRequests = requests.filter((request) => {
    if (filter === "All") {
      return true;
    }

    return request.status === filter;
  });

  const pendingCount = requests.filter(
    (request) => request.status === "Pending"
  ).length;

  const approvedCount = requests.filter(
    (request) => request.status === "Approved"
  ).length;

  const rejectedCount = requests.filter(
    (request) => request.status === "Rejected"
  ).length;

  const updateRequestStatus = (
    id: string,
    status: "Approved" | "Rejected"
  ) => {
    setRequests((currentRequests) =>
      currentRequests.map((request) =>
        request.id === id
          ? {
              ...request,
              status,
            }
          : request
      )
    );
  };

  return (
    <main className="min-h-screen bg-slate-50 p-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-medium text-blue-600">
              HR Management
            </p>

            <h1 className="mt-1 text-3xl font-bold text-slate-900">
              Approvals
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Review and manage employee leave requests.
            </p>
          </div>

          <div className="rounded-xl bg-white px-5 py-4 shadow-sm ring-1 ring-slate-200">
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
              Pending Requests
            </p>

            <p className="mt-1 text-2xl font-bold text-orange-600">
              {pendingCount}
            </p>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <SummaryCard
            title="Pending"
            value={pendingCount}
            description="Waiting for approval"
            className="text-orange-600"
          />

          <SummaryCard
            title="Approved"
            value={approvedCount}
            description="Approved requests"
            className="text-green-600"
          />

          <SummaryCard
            title="Rejected"
            value={rejectedCount}
            description="Rejected requests"
            className="text-red-600"
          />
        </div>

        {/* Filters */}
        <div className="mb-6 rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
          <div className="flex flex-wrap gap-2">
            {(["All", "Pending", "Approved", "Rejected"] as const).map(
              (status) => (
                <button
                  key={status}
                  type="button"
                  onClick={() => setFilter(status)}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                    filter === status
                      ? "bg-blue-600 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {status}
                </button>
              )
            )}
          </div>
        </div>

        {/* Requests */}
        <section className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-200">
          <div className="border-b border-slate-200 px-6 py-5">
            <h2 className="text-lg font-semibold text-slate-900">
              Leave Requests
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              {filteredRequests.length} request
              {filteredRequests.length !== 1 ? "s" : ""} found
            </p>
          </div>

          {filteredRequests.length === 0 ? (
            <div className="px-6 py-16 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-2xl">
                ✓
              </div>

              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                No requests found
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                There are no leave requests in this category.
              </p>
            </div>
          ) : (
            <div className="divide-y divide-slate-200">
              {filteredRequests.map((request) => (
                <ApprovalRow
                  key={request.id}
                  request={request}
                  onApprove={() =>
                    updateRequestStatus(request.id, "Approved")
                  }
                  onReject={() =>
                    updateRequestStatus(request.id, "Rejected")
                  }
                />
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/* Summary Card                                                               */
/* -------------------------------------------------------------------------- */

function SummaryCard({
  title,
  value,
  description,
  className,
}: {
  title: string;
  value: number;
  description: string;
  className: string;
}) {
  return (
    <div className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
      <p className="text-sm font-medium text-slate-500">{title}</p>

      <p className={`mt-2 text-3xl font-bold ${className}`}>{value}</p>

      <p className="mt-1 text-xs text-slate-400">{description}</p>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Approval Row                                                               */
/* -------------------------------------------------------------------------- */

function ApprovalRow({
  request,
  onApprove,
  onReject,
}: {
  request: ApprovalRequest;
  onApprove: () => void;
  onReject: () => void;
}) {
  return (
    <div className="p-6">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        {/* Employee Information */}
        <div className="flex min-w-0 items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100 text-lg font-bold text-blue-700">
            {getInitials(request.employeeName)}
          </div>

          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-semibold text-slate-900">
                {request.employeeName}
              </h3>

              <StatusBadge status={request.status} />
            </div>

            <p className="mt-1 text-sm text-slate-500">
              {request.employeeId} • {request.department}
            </p>

            <p className="mt-3 text-sm text-slate-700">
              <span className="font-medium">{request.leaveType}</span>
              {" • "}
              {request.duration} day
              {request.duration !== 1 ? "s" : ""}
            </p>

            <p className="mt-1 text-sm text-slate-500">
              {formatDate(request.startDate)} →{" "}
              {formatDate(request.endDate)}
            </p>

            <p className="mt-2 text-sm text-slate-600">
              <span className="font-medium">Reason:</span>{" "}
              {request.reason}
            </p>
          </div>
        </div>

        {/* Actions */}
        {request.status === "Pending" ? (
          <div className="flex shrink-0 gap-2">
            <button
              type="button"
              onClick={onReject}
              className="rounded-lg border border-red-200 bg-white px-4 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50"
            >
              Reject
            </button>

            <button
              type="button"
              onClick={onApprove}
              className="rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-green-700"
            >
              Approve
            </button>
          </div>
        ) : (
          <div className="shrink-0">
            <span className="text-sm text-slate-400">
              Request processed
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Status Badge                                                               */
/* -------------------------------------------------------------------------- */

function StatusBadge({
  status,
}: {
  status: RequestStatus;
}) {
  const styles: Record<RequestStatus, string> = {
    Pending: "bg-orange-100 text-orange-700",
    Approved: "bg-green-100 text-green-700",
    Rejected: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`rounded-full px-2.5 py-1 text-xs font-medium ${styles[status]}`}
    >
      {status}
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/* Helpers                                                                    */
/* -------------------------------------------------------------------------- */

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function formatDate(date: string) {
  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return date;
  }

  return parsedDate.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}