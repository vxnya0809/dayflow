import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { Employee } from "@/types/hr";

interface Props {
  employee: Employee;
}

export default function ApprovalHistoryTab({ employee }: Props) {
  if (employee.approvalHistory.length === 0) {
    return (
      <Card className="p-12 text-center">
        <div className="text-3xl">↺</div>

        <h2 className="mt-3 font-semibold text-gray-800">
          No approval history
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Approval activity will appear here.
        </p>
      </Card>
    );
  }

  return (
    <Card className="p-6">
      <h2 className="font-semibold text-gray-900">
        Approval History
      </h2>

      <div className="mt-8 space-y-6">
        {employee.approvalHistory.map((approval) => (
          <div key={approval.id} className="flex gap-4">
            <div className="relative flex flex-col items-center">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                ✓
              </div>

              <div className="absolute top-9 h-full w-px bg-gray-200" />
            </div>

            <div className="pb-4">
              <div className="flex flex-wrap items-center gap-2">
                <p className="font-semibold text-gray-800">
                  {approval.type}
                </p>

                <Badge variant="success">{approval.status}</Badge>
              </div>

              <p className="mt-1 text-sm text-gray-600">
                {approval.description}
              </p>

              <p className="mt-2 text-xs text-gray-400">
                {approval.date} • By {approval.approvedBy}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}