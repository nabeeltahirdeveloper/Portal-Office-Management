"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";

function FullScreenLoader() {
  return (
    <div className="fixed inset-0 bg-white/70 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="flex flex-col items-center gap-3">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-gray-400 border-t-transparent" />
        <p className="text-sm font-medium text-gray-700">Signing you in…</p>
      </div>
    </div>
  );
}

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    emailOrPhone: "",
    password: "",
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Show toast on error change
  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  const validateForm = () => {
    if (!formData.emailOrPhone.trim()) return "Email or phone is required.";
    if (!formData.password.trim()) return "Password is required.";
    return null;
  };

 const handleLogin = async (e: React.FormEvent) => {
  e.preventDefault();
  setError("");

  const validationError = validateForm();
  if (validationError) {
    setError(validationError);
    return;
  }

  setLoading(true);

  try {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        emailOrPhone: formData.emailOrPhone,
        password: formData.password,
      }),
    });

    const data = await res.json();

    if (!data.success) {
      setError(data.message);
      setLoading(false);
      return;
    }

    // Check if the user is admin
    if (data.user.role !== "project_manager") {
      setError("You do not have Project-Manager Account access.");
      setLoading(false);
      return;
    }

    toast.success("Sign-in successfully");

    // Save login state and redirect
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userEmail", data.user.email);
    router.push("/pmDashboard");
  } catch (err) {
    setError("Something went wrong. Try again.");
    console.error("Request error:", err);
  } finally {
    setLoading(false);
  }
};


  return (
    <>
      {loading && <FullScreenLoader />}
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <Card className="w-full max-w-md mx-auto shadow-lg border rounded-xl">
          <CardHeader className="space-y-2 text-center pt-8 pb-4">
            <CardTitle className="text-2xl font-bold">
             Project-Manager Portal Sign In
            </CardTitle>
            <CardDescription className="text-gray-500">
              Securely manage users, roles, and system data with ease.
            </CardDescription>
          </CardHeader>

          <form onSubmit={handleLogin}>
            <CardContent className="space-y-5">
              <div className="space-y-1">
                <Label>Email or Phone</Label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                    <Mail className="h-4 w-4" />
                  </span>
                  <Input
                    type="text"
                    placeholder="Enter your email or phone"
                    className="pl-10"
                    value={formData.emailOrPhone}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        emailOrPhone: e.target.value,
                      }))
                    }
                    disabled={loading}
                  />
                </div>
              </div>

              <div className="space-y-1">
                <Label>Password</Label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                    <Lock className="h-4 w-4" />
                  </span>
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="pl-10 pr-10"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        password: e.target.value,
                      }))
                    }
                    disabled={loading}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-3 flex items-center text-gray-400"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <Checkbox
                    checked={formData.rememberMe}
                    onCheckedChange={(checked) =>
                      setFormData((prev) => ({ ...prev, rememberMe: checked }))
                    }
                  />
                  <Label className="text-sm cursor-pointer">Remember me</Label>
                </div>
                <button
                  type="button"
                  className="text-sm text-primary hover:underline"
                  onClick={() => alert("Forgot Password Clicked")}
                >
                  Forgot password?
                </button>
              </div>
            </CardContent>

            <CardFooter className="pt-0 flex flex-col gap-2">
              <Button type="submit" className="w-full py-2" disabled={loading}>
                {loading ? "Signing In..." : "Sign In"}
              </Button>

              {/* Sign Up link */}
              <p className="text-center text-sm text-gray-500">
                Don't have an account?{" "}
                <a
                  href="/register"
                  className="text-blue-500 hover:underline font-medium"
                >
                  Sign Up
                </a>
              </p>
            </CardFooter>
          </form>
        </Card>
      </div>
    </>
  );
}
