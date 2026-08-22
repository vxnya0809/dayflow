"use client";

import { useState } from "react";

export default function HRHeader() {
  const [notifications, setNotifications] = useState(false);

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-gray-200 bg-white/95 px-4 backdrop-blur lg:px-8">
      <div className="lg:hidden">
        <span className="font-bold text-indigo-600">DAYFLOW</span>
      </div>

      <div className="hidden max-w-md flex-1 lg:block">
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            🔍
          </span>
          <input
            type="text"
            placeholder="Search employees..."
            className="w-full rounded-xl border border-gray-200 bg-gray-50 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-indigo-400 focus:bg-white"
          />
        </div>
      </div>

      <div className="ml-auto flex items-center gap-4">
        <div className="relative">
          <button
            onClick={() => setNotifications(!notifications)}
            className="relative rounded-xl p-2 text-gray-500 hover:bg-gray-100"
          >
            🔔
            <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" />
          </button>

          {notifications && (
            <div className="absolute right-0 top-12 w-72 rounded-xl border border-gray-200 bg-white p-4 shadow-xl">
              <p className="font-semibold text-gray-900">Notifications</p>
              <p className="mt-2 text-sm text-gray-500">
                2 leave requests require your attention.
              </p>
            </div>
          )}
        </div>

        <div className="flex items-center gap-3 border-l border-gray-200 pl-4">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 font-semibold text-indigo-700">
            HR
          </div>

          <div className="hidden md:block">
            <p className="text-sm font-semibold text-gray-800">HR Admin</p>
            <p className="text-xs text-gray-500">Administrator</p>
          </div>
        </div>
      </div>
    </header>
  );
}