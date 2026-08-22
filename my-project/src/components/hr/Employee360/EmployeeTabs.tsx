"use client";

import { useRouter, useSearchParams } from "next/navigation";

const tabs = [
  { id: "profile", label: "Profile", icon: "👤" },
  { id: "attendance", label: "Attendance", icon: "◷" },
  { id: "leave", label: "Leave", icon: "🏖" },
  { id: "payroll", label: "Payroll", icon: "₹" },
  { id: "tasks", label: "Tasks", icon: "✓" },
  { id: "documents", label: "Documents", icon: "📄" },
  { id: "history", label: "Approval History", icon: "↺" },
];

interface Props {
  activeTab: string;
}

export default function EmployeeTabs({ activeTab }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const changeTab = (tab: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", tab);

    router.push(`?${params.toString()}`, {
      scroll: false,
    });
  };

  return (
    <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
      <div className="flex min-w-max">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => changeTab(tab.id)}
            className={`flex items-center gap-2 border-b-2 px-5 py-4 text-sm font-medium transition ${
              activeTab === tab.id
                ? "border-indigo-600 text-indigo-600"
                : "border-transparent text-gray-500 hover:bg-gray-50 hover:text-gray-800"
            }`}
          >
            <span>{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}