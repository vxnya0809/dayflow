import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { Employee } from "@/types/hr";

interface Props {
  employee: Employee;
}

export default function TasksTab({ employee }: Props) {
  const completed = employee.tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const progress =
    employee.tasks.length === 0
      ? 0
      : Math.round((completed / employee.tasks.length) * 100);

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex justify-between">
          <div>
            <h2 className="font-semibold text-gray-900">
              Task Progress
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              {completed} of {employee.tasks.length} tasks completed
            </p>
          </div>

          <span className="text-2xl font-bold text-indigo-600">
            {progress}%
          </span>
        </div>

        <div className="mt-5 h-2 rounded-full bg-gray-100">
          <div
            className="h-full rounded-full bg-indigo-600"
            style={{ width: `${progress}%` }}
          />
        </div>
      </Card>

      <Card className="divide-y divide-gray-100">
        {employee.tasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center justify-between p-5"
          >
            <div className="flex items-center gap-3">
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-full ${
                  task.status === "Completed"
                    ? "bg-emerald-50 text-emerald-600"
                    : "bg-gray-100 text-gray-500"
                }`}
              >
                {task.status === "Completed" ? "✓" : "○"}
              </span>

              <span className="text-sm font-medium text-gray-800">
                {task.title}
              </span>
            </div>

            <Badge
              variant={
                task.status === "Completed"
                  ? "success"
                  : task.status === "In Progress"
                    ? "info"
                    : "neutral"
              }
            >
              {task.status}
            </Badge>
          </div>
        ))}
      </Card>
    </div>
  );
}