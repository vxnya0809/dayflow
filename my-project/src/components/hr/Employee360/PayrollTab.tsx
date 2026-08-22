import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { Employee } from "@/types/hr";
import { formatCurrency } from "@/lib/utils";

interface Props {
  employee: Employee;
}

export default function PayrollTab({ employee }: Props) {
  const payroll = employee.payroll;

  return (
    <Card className="p-6">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <div>
          <p className="text-xs uppercase tracking-wider text-gray-400">
            Latest Payroll
          </p>

          <h2 className="mt-1 text-xl font-bold text-gray-900">
            {payroll.month}
          </h2>
        </div>

        <Badge variant="success">{payroll.status}</Badge>
      </div>

      <div className="mt-8 space-y-4">
        <Row label="Basic Salary" value={formatCurrency(payroll.basicSalary)} />
        <Row label="Allowances" value={formatCurrency(payroll.allowances)} />
        <Row label="Deductions" value={formatCurrency(payroll.deductions)} />

        <div className="border-t border-gray-200 pt-5">
          <div className="flex justify-between">
            <span className="font-semibold text-gray-800">
              Net Salary
            </span>

            <span className="text-xl font-bold text-indigo-600">
              {formatCurrency(payroll.netSalary)}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between text-sm">
      <span className="text-gray-500">{label}</span>
      <span className="font-medium text-gray-800">{value}</span>
    </div>
  );
}