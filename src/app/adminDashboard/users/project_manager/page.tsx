"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";

type ProjectManagerUser = {
  id: string;
  fullName: string;
  email: string;
  phone: string;
};

export default function ProjectManagerUserPage() {
  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);
  const [projectManagerUser, setProjectManagerUsers] = useState<ProjectManagerUser[]>([]);
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);

  // Fetch HR users by role
  const fetchProjectManagerUsers = async () => {
    try {
      const res = await fetch("/api/users?role=project_manager");
      const data = await res.json();
      if (data.success) {
        setProjectManagerUsers(
          data.users.map((u: any) => ({
            id: u._id,
            fullName: u.fullName,
            email: u.email,
            phone: u.phone,
          }))
        );
      } else {
        toast.error("Failed to load project_manager");
      }
    } catch (err) {
      toast.error("Failed to load project_manager");
    }
  };

  useEffect(() => {
    fetchProjectManagerUsers();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const openEditForm = (user: ProjectManagerUser) => {
    setIsEditing(true);
    setShowForm(true);
    setEditId(user.id);
    setFormData({
      fullName: user.fullName,
      email: user.email,
      phone: user.phone,
      password: "",
      confirmPassword: "",
    });
  };

  const deleteUser = async (id: string) => {
    if (!confirm("Are you sure you want to delete this Project_Manager user?")) return;

    try {
      const res = await fetch(`/api/users/${id}`, { method: "DELETE" });
      const data = await res.json();

      if (data.success) {
        toast.success("Project_Manager deleted!");
        setProjectManagerUsers((prev) => prev.filter((u) => u.id !== id));
      } else {
        toast.error(data.message);
      }
    } catch {
      toast.error("Failed to delete user.");
    }
  };

  const validateForm = () => {
    if (!formData.fullName.trim()) return "Full name is required";
    if (!formData.email.trim()) return "Email is required";
    if (!/\S+@\S+\.\S+/.test(formData.email)) return "Enter a valid email";
    if (!formData.phone.trim()) return "Phone is required";
    if (!formData.password.trim() && !isEditing) return "Password is required";
    if (formData.password !== formData.confirmPassword)
      return "Passwords do not match";
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const error = validateForm();
    if (error) return toast.error(error);

    setLoading(true);
    try {
      let res;
      if (isEditing && editId) {
        res = await fetch(`/api/users/${editId}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...formData, role: "project_manager" }),
        });
      } else {
        res = await fetch("/api/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...formData, role: "project_manager" }),
        });
      }

      const data = await res.json();
      if (!data.success) return toast.error(data.message);

      if (isEditing && editId) {
        setProjectManagerUsers((prev) =>
          prev.map((u) =>
            u.id === editId
              ? {
                  ...u,
                  fullName: formData.fullName,
                  email: formData.email,
                  phone: formData.phone,
                }
              : u
          )
        );
        toast.success("Project_ManagerUser updated successfully!");
      } else {
        setProjectManagerUsers((prev) => [
          ...prev,
          {
            id: data.user._id,
            fullName: data.user.fullName,
            email: data.user.email,
            phone: data.user.phone,
          },
        ]);
        toast.success("Project_ManagerUser created successfully!");
      }

      setShowForm(false);
      setIsEditing(false);
      setEditId(null);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
      });
    } catch {
      toast.error("Failed to submit form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Project_Manager</h1>
        <button
          onClick={() => {
            setShowForm(!showForm);
            setIsEditing(false);
            setEditId(null);
            setFormData({
              fullName: "",
              email: "",
              phone: "",
              password: "",
              confirmPassword: "",
            });
          }}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          {showForm ? "Close Form" : "Create Manager"}
        </button>
      </div>

      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 max-w-3xl space-y-8"
        >
          <h2 className="text-3xl font-semibold text-gray-800 pb-3 border-b">
            {isEditing ? "Edit ProjectManager" : "Create New ProjectManager"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {["fullName", "email", "phone"].map((name) => (
              <div key={name} className="flex flex-col gap-1">
                <label className="font-medium text-gray-700">
                  {name.charAt(0).toUpperCase() + name.slice(1)}
                </label>
                <input
                  name={name}
                  type={name === "email" ? "email" : "text"}
                  value={formData[name as keyof typeof formData]}
                  onChange={handleChange}
                  placeholder={`Enter ${name}`}
                  className="p-3 border rounded-lg focus:outline-none focus:ring-2 transition-all focus:ring-blue-500 bg-gray-50"
                  required
                />
              </div>
            ))}

            {["password", "confirmPassword"].map((name) => (
              <div key={name} className="flex flex-col gap-1 relative">
                <label className="font-medium text-gray-700">
                  {name.charAt(0).toUpperCase() + name.slice(1)}
                </label>
                <input
                  name={name}
                  type={
                    showPassword[name as "password" | "confirmPassword"]
                      ? "text"
                      : "password"
                  }
                  value={formData[name as keyof typeof formData]}
                  onChange={handleChange}
                  placeholder={`Enter ${name}`}
                  className="p-3 border rounded-lg focus:outline-none focus:ring-2 transition-all focus:ring-blue-500 bg-gray-50"
                  required={!isEditing}
                />
                <button
                  type="button"
                  onClick={() =>
                    setShowPassword((prev) => ({
                      ...prev,
                      [name as "password" | "confirmPassword"]:
                        !prev[name as "password" | "confirmPassword"],
                    }))
                  }
                  className="absolute right-3 top-10 text-gray-600 hover:text-gray-800"
                >
                  {showPassword[name as "password" | "confirmPassword"]
                    ? "🙈"
                    : "👁️"}
                </button>
              </div>
            ))}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition disabled:bg-blue-400"
          >
            {loading
              ? isEditing
                ? "Updating..."
                : "Creating..."
              : isEditing
              ? "Update HR"
              : "Create HR"}
          </button>
        </form>
      )}

      <div className="space-y-6">
        {projectManagerUser.map((user) => (
          <div
            key={user.id}
            className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition flex flex-col md:flex-row md:justify-between md:items-center"
          >
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {user.fullName}
              </h3>
              <p className="text-gray-600 mb-1">
                <span className="font-medium">Email:</span> {user.email}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Phone:</span> {user.phone}
              </p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => openEditForm(user)}
                className="px-5 py-2 bg-yellow-500 text-white font-medium rounded-lg hover:bg-yellow-600 transition"
              >
                Edit
              </button>
              <button
                onClick={() => deleteUser(user.id)}
                className="px-5 py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
