import Card from "@/components/ui/Card";
import { Employee } from "@/types/hr";

interface Props {
  employee: Employee;
}

export default function ProfileTab({ employee }: Props) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card className="p-6">
        <h2 className="font-semibold text-gray-900">
          Personal Information
        </h2>

        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <Info label="Full Name" value={employee.name} />
          <Info label="Email" value={employee.email} />
          <Info label="Phone" value={employee.phone} />
          <Info label="Date of Birth" value={employee.dateOfBirth} />
          <div className="sm:col-span-2">
            <Info label="Address" value={employee.address} />
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="font-semibold text-gray-900">
          Employment Information
        </h2>

        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <Info label="Employee ID" value={employee.employeeId} />
          <Info label="Department" value={employee.department} />
          <Info label="Designation" value={employee.designation} />
          <Info label="Joining Date" value={employee.joiningDate} />
          <Info label="Manager" value={employee.manager} />
          <Info label="Employment Type" value={employee.employmentType} />
        </div>
      </Card>
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs font-medium text-gray-400">{label}</p>
      <p className="mt-1 text-sm font-medium text-gray-800">{value}</p>
    </div>
  );
}