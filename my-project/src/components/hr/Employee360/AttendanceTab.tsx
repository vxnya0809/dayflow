import Card from "@/components/ui/Card";
import { Employee } from "@/types/hr";

interface Props {
  employee: Employee;
}

export default function AttendanceTab({ employee }: Props) {
  const attendance = employee.attendance;

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Stat title="Present" value={attendance.present} />
        <Stat title="Absent" value={attendance.absent} />
        <Stat title="Late" value={attendance.late} />
        <Stat title="Attendance Rate" value={`${attendance.attendanceRate}%`} />
      </div>

      <Card className="p-6">
        <h2 className="font-semibold text-gray-900">
          Attendance Overview
        </h2>

        <div className="mt-6">
          <div className="mb-2 flex justify-between text-sm">
            <span className="text-gray-500">Monthly attendance</span>
            <span className="font-semibold">
              {attendance.attendanceRate}%
            </span>
          </div>

          <div className="h-3 rounded-full bg-gray-100">
            <div
              className="h-full rounded-full bg-indigo-600"
              style={{
                width: `${attendance.attendanceRate}%`,
              }}
            />
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="font-semibold text-gray-900">
          August 2026 Attendance
        </h2>

        <div className="mt-6 grid grid-cols-7 gap-2 text-center">
          {Array.from({ length: 31 }, (_, i) => {
            const day = i + 1;
            const weekend = [0, 6].includes(
              new Date(2026, 7, day).getDay()
            );

            return (
              <div
                key={day}
                className={`rounded-lg p-2 text-xs ${
                  weekend
                    ? "bg-gray-100 text-gray-400"
                    : "bg-emerald-50 text-emerald-700"
                }`}
              >
                {day}
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
}

function Stat({ title, value }: { title: string; value: string | number }) {
  return (
    <Card className="p-5">
      <p className="text-xs text-gray-500">{title}</p>
      <p className="mt-2 text-2xl font-bold text-gray-900">{value}</p>
    </Card>
  );
}