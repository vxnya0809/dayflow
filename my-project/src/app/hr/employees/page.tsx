import EmployeeTable from "@/components/hr/Employees/EmployeeTable";
import { employees } from "@/data/mockHRData";

export default function EmployeesPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-8">
      <div>
        <p className="text-sm font-medium text-indigo-600">
          Workforce Management
        </p>

        <h1 className="mt-2 text-3xl font-bold text-gray-900">
          Employees
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Manage employee profiles and access their complete HR information.
        </p>
      </div>

      <EmployeeTable employees={employees} />
    </div>
  );
}