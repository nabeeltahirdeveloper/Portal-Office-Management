"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, User } from "lucide-react";

export default function adminDashboardPage() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Sidebar is assumed in layout */}

      <main className="flex-1 p-8">
        {/* Page Header */}
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-800">HR Dashboard</h1>

          <div className="flex items-center gap-3">
            {/* Add New Button with Icon */}
            <Button className="flex items-center gap-2">
              <Plus size={18} />
              Add New
            </Button>

            {/* Profile Button with Icon */}
            <Button variant="outline" className="flex items-center gap-2">
              <User size={18} />
              Profile
            </Button>
          </div>
        </div>

        {/* Content Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition">
            <CardHeader>
              <CardTitle>Users</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">1,245 active users</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition">
            <CardHeader>
              <CardTitle>Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">$12,340 this month</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition">
            <CardHeader>
              <CardTitle>Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">320 new orders</p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
