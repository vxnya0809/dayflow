import Link from "next/link";
import Card from "@/components/ui/Card";
import { Employee } from "@/types/hr";

interface Props {
  employees: Employee[];
}

export default function IncompleteProfiles({ employees }: Props) {
  const incomplete = employees.filter(
    (employee) => employee.profileCompletion < 100
  );

  return (
    <Card className="overflow-hidden">
      <div className="flex items-center justify-between border-b border-gray-100 p-5">
        <div>
          <h2 className="font-semibold text-gray-900">
            Incomplete Profiles
          </h2>
          <p className="mt-1 text-xs text-gray-500">
            Employees requiring profile updates
          </p>
        </div>

        <Link
          href="/hr/incomplete-profiles"
          className="text-xs font-semibold text-indigo-600 hover:text-indigo-700"
        >
          View All →
        </Link>
      </div>

      <div className="divide-y divide-gray-100">
        {incomplete.slice(0, 4).map((employee) => (
          <div
            key={employee.id}
            className="flex items-center justify-between p-4"
          >
            <div>
              <p className="text-sm font-semibold text-gray-800">
                {employee.name}
              </p>
              <p className="text-xs text-gray-500">
                {employee.department}
              </p>
            </div>

            <div className="w-32">
              <div className="mb-1 flex justify-between text-[10px]">
                <span className="text-gray-500">Profile</span>
                <span className="font-semibold">
                  {employee.profileCompletion}%
                </span>
              </div>

              <div className="h-1.5 overflow-hidden rounded-full bg-gray-100">
                <div
                  className="h-full rounded-full bg-orange-500"
                  style={{ width: `${employee.profileCompletion}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}