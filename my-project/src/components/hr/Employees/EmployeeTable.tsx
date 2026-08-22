"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Employee } from "@/types/hr";
import Badge from "@/components/ui/Badge";

interface Props {
  employees: Employee[];
}

export default function EmployeeTable({ employees }: Props) {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");

  const departments = [
    "All",
    ...Array.from(new Set(employees.map((e) => e.department))),
  ];

  const filteredEmployees = useMemo(() => {
    return employees.filter((employee) => {
      const matchesSearch =
        employee.name.toLowerCase().includes(search.toLowerCase()) ||
        employee.employeeId.toLowerCase().includes(search.toLowerCase()) ||
        employee.email.toLowerCase().includes(search.toLowerCase());

      const matchesDepartment =
        department === "All" || employee.department === department;

      return matchesSearch && matchesDepartment;
    });
  }, [employees, search, department]);

  return (
    <div>
      <div className="mb-5 flex flex-col gap-3 md:flex-row">
        <div className="relative flex-1">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            🔍
          </span>

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name, ID or email..."
            className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-10 pr-4 text-sm outline-none focus:border-indigo-400"
          />
        </div>

        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none"
        >
          {departments.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>

      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Employee
                </th>

                <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Department
                </th>

                <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Attendance
                </th>

                <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Profile
                </th>

                <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Status
                </th>

                <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {filteredEmployees.map((employee) => (
                <tr key={employee.id} className="hover:bg-gray-50">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-sm font-semibold text-indigo-700">
                        {employee.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-gray-900">
                          {employee.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {employee.employeeId}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-5 py-4 text-sm text-gray-600">
                    {employee.department}
                  </td>

                  <td className="px-5 py-4">
                    <span className="text-sm font-semibold text-gray-800">
                      {employee.attendance.attendanceRate}%
                    </span>
                  </td>

                  <td className="px-5 py-4">
                    <div className="w-24">
                      <div className="mb-1 text-xs text-gray-500">
                        {employee.profileCompletion}%
                      </div>

                      <div className="h-1.5 rounded-full bg-gray-100">
                        <div
                          className="h-full rounded-full bg-indigo-500"
                          style={{
                            width: `${employee.profileCompletion}%`,
                          }}
                        />
                      </div>
                    </div>
                  </td>

                  <td className="px-5 py-4">
                    <Badge
                      variant={
                        employee.status === "Active"
                          ? "success"
                          : employee.status === "On Leave"
                            ? "warning"
                            : "danger"
                      }
                    >
                      {employee.status}
                    </Badge>
                  </td>

                  <td className="px-5 py-4 text-right">
                    <Link
                      href={`/hr/employees/${employee.id}`}
                      className="text-sm font-semibold text-indigo-600 hover:text-indigo-800"
                    >
                      View →
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredEmployees.length === 0 && (
          <div className="p-12 text-center text-sm text-gray-500">
            No employees found.
          </div>
        )}
      </div>
    </div>
  );
}