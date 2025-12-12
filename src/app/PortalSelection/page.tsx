"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  ArrowLeft,
  Users,
  ShieldCheck,
  MonitorCog,
} from "lucide-react";

export default function WelcomePage() {
  const router = useRouter();

  function handleAdminLoginPortal() {
    router.push("/admin-login");
  }
  function handleHrLoginPortal() {
    router.push("/hr-login");
  }
  function handleEmployeeLoginPortal() {
    router.push("/employee-login");
  }
  function handleProjectManagerLoginPortal(){
    router.push("/project-manager-login")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800">
            Welcome to Portal
          </h1>

          <Button
            variant="outline"
            className="flex items-center gap-2"
            onClick={() => router.push("/")}
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Website
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Select Your Portal
          </h2>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto">
            Choose the appropriate portal to begin your journey. Tailored
            interfaces for each user role.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <Card
            className="border-blue-200 hover:shadow-lg transition cursor-pointer bg-blue-50"
            onClick={handleAdminLoginPortal}
          >
            <CardHeader>
              <CardTitle className="text-xl font-bold text-blue-700">
                Admin Portal
              </CardTitle>
              <CardDescription>
                Core focus: System-wide management
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-3">
              <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
                <li>
                  Overview metrics (total employees, active projects, attendance
                  summary)
                </li>
                <li>
                  Manage users (create/edit/deactivate employees, HR, PMs)
                </li>
                <li>Role & permission control</li>
                <li>Company-wide announcements</li>
                <li>View reports (attendance, project allocation, leaves)</li>
                <li>Department management (optional but common)</li>
              </ul>

              <Button className="w-full flex items-center justify-between group mt-4">
                Access Admin Portal
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </Button>
            </CardContent>
          </Card>

          {/* Card 2 */}
          <Card
            className="border-green-200 hover:shadow-lg transition cursor-pointer bg-green-50"
            onClick={handleHrLoginPortal}
          >
            <CardHeader>
              <CardTitle className="text-xl font-bold text-green-700">
                HR Portal
              </CardTitle>
              <CardDescription>
                Core focus: Employee & attendance operations
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-3">
              <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
                <li>Employee directory (view/manage profiles)</li>
                <li>Attendance overview & manual correction</li>
                <li>Leave management panel (approve/reject leaves)</li>
                <li>Recruitment pipeline (candidates list & status)</li>
                <li>Announcements management</li>
                <li>HR reports (joinings, exits, attendance summary)</li>
              </ul>

              <Button className="w-full flex items-center justify-between group mt-4">
                Access HR Portal
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </Button>
            </CardContent>
          </Card>

          {/* Card 3 */}
          <Card
            className="border-purple-200 hover:shadow-lg transition cursor-pointer bg-purple-50"
            onClick={handleProjectManagerLoginPortal}
          >
            <CardHeader>
              <CardTitle className="text-xl font-bold text-purple-700">
                Project Manager Portal
              </CardTitle>
              <CardDescription>
                Core focus: Projects & team tracking
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-3">
              <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
                <li>List of assigned projects</li>
                <li>Create/update project tasks</li>
                <li>Assign tasks to employees</li>
                <li>Team workload overview</li>
                <li>Track project progress</li>
                <li>View team attendance & leave status (to plan tasks)</li>
                <li>Upload documents or project guidelines</li>
              </ul>

              <Button className="w-full flex items-center justify-between group mt-4">
                Access Project Manager Portal
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </Button>
            </CardContent>
          </Card>

          {/* Card 4 */}
          <Card
            className="border-red-200 hover:shadow-lg transition cursor-pointer bg-red-50"
            onClick={handleEmployeeLoginPortal}
          >
            <CardHeader>
              <CardTitle className="text-xl font-bold text-red-700">
                Employee Portal
              </CardTitle>
              <CardDescription>Core focus: Daily workflow</CardDescription>
            </CardHeader>

            <CardContent className="space-y-3">
              <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
                <li>Clock-in / Clock-out attendance button</li>
                <li>Leave request panel</li>
                <li>View assigned tasks</li>
                <li>Task status update</li>
                <li>Notifications & announcements</li>
                <li>Basic profile view/edit</li>
                <li>Project documents/resources (if assigned)</li>
              </ul>

              <Button className="w-full flex items-center justify-between group mt-4">
                Access Employee Portal
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
