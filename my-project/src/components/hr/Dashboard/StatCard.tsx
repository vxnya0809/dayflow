import Card from "@/components/ui/Card";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: string;
  description: string;
  type?: "blue" | "green" | "orange" | "red";
}

export default function StatCard({
  title,
  value,
  icon,
  description,
  type = "blue",
}: StatCardProps) {
  const backgrounds = {
    blue: "bg-indigo-50 text-indigo-600",
    green: "bg-emerald-50 text-emerald-600",
    orange: "bg-orange-50 text-orange-600",
    red: "bg-red-50 text-red-600",
  };

  return (
    <Card className="p-5 transition hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="mt-2 text-3xl font-bold text-gray-900">{value}</p>
          <p className="mt-2 text-xs text-gray-500">{description}</p>
        </div>

        <div
          className={`flex h-11 w-11 items-center justify-center rounded-xl text-lg ${backgrounds[type]}`}
        >
          {icon}
        </div>
      </div>
    </Card>
  );
}