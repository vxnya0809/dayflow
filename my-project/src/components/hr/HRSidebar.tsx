"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  {
    label: "Dashboard",
    href: "/hr/dashboard",
    icon: "▣",
  },
  {
    label: "Employees",
    href: "/hr/employees",
    icon: "♙",
  },
  {
    label: "Approvals",
    href: "/hr/approvals",
    icon: "✓",
  },
  {
    label: "Incomplete Profiles",
    href: "/hr/incomplete-profiles",
    icon: "⚠",
  },
];

export default function HRSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-40 hidden h-screen w-64 border-r border-gray-200 bg-white lg:block">
      <div className="flex h-full flex-col">
        <div className="border-b border-gray-100 px-6 py-6">
          <div className="text-xl font-bold text-indigo-600">DAYFLOW</div>
          <p className="mt-1 text-xs text-gray-500">
            Human Resource Management
          </p>
        </div>

        <nav className="flex-1 px-4 py-6">
          <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-wider text-gray-400">
            Main
          </p>

          <div className="space-y-1">
            {menuItems.map((item) => {
              const active = pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${
                    active
                      ? "bg-indigo-50 text-indigo-700"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <span>{item.icon}</span>
                  {item.label}
                </Link>
              );
            })}
          </div>

          <p className="mb-3 mt-8 px-3 text-[10px] font-bold uppercase tracking-wider text-gray-400">
            Management
          </p>

          <div className="space-y-1">
            <Link
              href="/hr/employees"
              className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-gray-600 hover:bg-gray-50"
            >
              ◷ Attendance
            </Link>

            <Link
              href="/hr/approvals"
              className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-gray-600 hover:bg-gray-50"
            >
              ◫ Leave
            </Link>

            <Link
              href="/hr/employees"
              className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-gray-600 hover:bg-gray-50"
            >
              ₹ Payroll
            </Link>
          </div>
        </nav>

        <div className="border-t border-gray-100 p-4">
          <button className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm text-gray-600 hover:bg-gray-50">
            ⚙ Settings
          </button>
        </div>
      </div>
    </aside>
  );
}