import Card from "@/components/ui/Card";

export default function AttendanceOverview() {
  return (
    <Card className="p-5">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-semibold text-gray-900">Attendance Overview</h2>
          <p className="mt-1 text-xs text-gray-500">
            Today's workforce attendance
          </p>
        </div>

        <span className="rounded-lg bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-600">
          Today
        </span>
      </div>

      <div className="mt-8 flex items-end gap-2">
        <p className="text-4xl font-bold text-gray-900">80%</p>
        <p className="pb-1 text-sm text-emerald-600">Present</p>
      </div>

      <div className="mt-5 h-3 overflow-hidden rounded-full bg-gray-100">
        <div
          className="h-full rounded-full bg-indigo-600"
          style={{ width: "80%" }}
        />
      </div>

      <div className="mt-6 grid grid-cols-3 gap-3">
        <div className="rounded-xl bg-emerald-50 p-3">
          <p className="text-xs text-gray-500">Present</p>
          <p className="mt-1 text-xl font-bold text-emerald-700">20</p>
        </div>

        <div className="rounded-xl bg-orange-50 p-3">
          <p className="text-xs text-gray-500">On Leave</p>
          <p className="mt-1 text-xl font-bold text-orange-700">3</p>
        </div>

        <div className="rounded-xl bg-red-50 p-3">
          <p className="text-xs text-gray-500">Absent</p>
          <p className="mt-1 text-xl font-bold text-red-700">2</p>
        </div>
      </div>
    </Card>
  );
}