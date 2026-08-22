import Link from "next/link";
import Card from "@/components/ui/Card";
import { employees } from "@/data/mockHRData";

export default function IncompleteProfilesPage() {
  const incomplete = employees.filter(
    (employee) => employee.profileCompletion < 100
  );

  return (
    <div className="mx-auto max-w-6xl space-y-8">
      <div>
        <p className="text-sm font-medium text-indigo-600">
          Employee Management
        </p>

        <h1 className="mt-2 text-3xl font-bold text-gray-900">
          Incomplete Profiles
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Review employees whose profiles need additional information.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {incomplete.map((employee) => (
          <Card key={employee.id} className="p-6">
            <div className="flex items-center justify-between">
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
                    {employee.department}
                  </p>
                </div>
              </div>

              <span className="text-lg font-bold text-orange-600">
                {employee.profileCompletion}%
              </span>
            </div>

            <div className="mt-5 h-2 rounded-full bg-gray-100">
              <div
                className="h-full rounded-full bg-orange-500"
                style={{
                  width: `${employee.profileCompletion}%`,
                }}
              />
            </div>

            <Link
              href={`/hr/employees/${employee.id}`}
              className="mt-5 block text-center text-sm font-semibold text-indigo-600"
            >
              Review Profile →
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}