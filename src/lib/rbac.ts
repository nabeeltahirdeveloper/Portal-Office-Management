export const Roles = {
  ADMIN: "ADMIN",
  HR: "HR",
  PM: "PM",
  EMPLOYEE: "EMPLOYEE",
};

export const Permissions = {
  MANAGE_USERS: "MANAGE_USERS",
  MANAGE_ROLES: "MANAGE_ROLES",
  VIEW_adminDashboard: "VIEW_adminDashboard",
};

export const RolePermissions = {
  ADMIN: ["MANAGE_USERS", "MANAGE_ROLES", "VIEW_adminDashboard"],
  HR: ["VIEW_adminDashboard"],
  PM: ["VIEW_adminDashboard"],
  EMPLOYEE: ["VIEW_adminDashboard"],
};

export function can(role: string, permission: string) {
  return RolePermissions[role]?.includes(permission);
}
