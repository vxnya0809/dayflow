import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { Employee } from "@/types/hr";

interface Props {
  employee: Employee;
}

export default function DocumentsTab({ employee }: Props) {
  return (
    <Card className="divide-y divide-gray-100">
      {employee.documents.map((document) => (
        <div
          key={document.id}
          className="flex items-center justify-between p-5"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100">
              📄
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-800">
                {document.name}
              </p>

              <p className="mt-1 text-xs text-gray-400">
                {document.id}
              </p>
            </div>
          </div>

          <Badge
            variant={
              document.status === "Verified"
                ? "success"
                : document.status === "Missing"
                  ? "danger"
                  : "warning"
            }
          >
            {document.status}
          </Badge>
        </div>
      ))}
    </Card>
  );
}