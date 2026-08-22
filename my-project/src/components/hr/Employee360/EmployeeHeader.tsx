"use client";

import Link from "next/link";
import { Employee } from "@/types/hr";
import Button from "@/components/ui/Button";

interface Props {
  employee: Employee;
}

export default function EmployeeHeader({ employee }: Props) {
  return (
    <div className="space-y-4">
      <Link
        href="/hr/employees"
        className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-indigo-600"
      >
        ← Back to Employees
      </Link>

      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-100 text-xl font-bold text-indigo-700">
              {employee.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>

            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {employee.name}
              </h1>

              <p className="mt-1 text-sm text-gray-500">
                {employee.designation} • {employee.department}
              </p>

              <p className="mt-1 text-xs text-gray-400">
                {employee.employeeId}
              </p>
            </div>
          </div>

          <Button variant="secondary">Edit Profile</Button>
        </div>

        <div className="mt-6">
          <div className="mb-2 flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              Profile Completion
            </p>

            <span className="text-sm font-bold text-indigo-600">
              {employee.profileCompletion}%
            </span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-gray-100">
            <div
              className="h-full rounded-full bg-indigo-600 transition-all"
              style={{
                width: `${employee.profileCompletion}%`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}