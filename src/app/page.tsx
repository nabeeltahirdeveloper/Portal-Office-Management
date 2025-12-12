"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";


export default function Home() {
  const router = useRouter();
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex flex-col">

      {/* Navbar */}
      <header className="w-full border-b bg-white">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <h1 className="text-xl font-semibold">My Portal</h1>

          <Button
      variant="outline"
      onClick={() => router.push("/PortalSelection")}
    >
     <Users className="h-4 w-4" />
              <span>Login to App</span>
    </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Welcome to Your New adminDashboard
        </h2>

        <p className="text-gray-600 max-w-lg mb-8">
          Build beautiful, modern and functional adminDashboards using Next.js, 
          Tailwind CSS and Shadcn UI components. Everything starts here.
        </p>

        <div className="flex gap-4">
          <Button size="lg">Get Started</Button>
          <Button variant="outline" size="lg">Learn More</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} My Portal — All rights reserved.
      </footer>

    </main>
  );
}
