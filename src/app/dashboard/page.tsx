"use client";

import { signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div className="p-8">Loading dashboard...</div>;
  }

  if (!session) {
    return <div className="p-8">Please log in to see this page.</div>;
  }

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="flex items-center gap-4">
          <div className="text-sm">
            <span className="font-semibold">{session.user.name}</span>
            <span className="text-gray-500 ml-2">({session.user.role})</span>
          </div>
          <Button variant="outline" onClick={() => signOut()}>
            Log out
          </Button>
        </div>
      </div>
      
      <div className="rounded-lg border p-6 bg-white shrink-0">
        <h2 className="text-xl font-semibold mb-2">Welcome to the Project Manager!</h2>
        <p className="text-gray-600">
          This is a skeleton dashboard. We will build out Project creation, Task Tracking, and Role-Based views here next.
        </p>
      </div>
    </div>
  );
}
