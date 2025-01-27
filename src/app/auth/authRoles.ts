export enum Permission {
  Merchant = "Merchant",
  Admin = "Admin",

  // General Permissions
  ReadHome = "home:read-home",

  // Users
  ReadUser = "users:read-user",
  ReadUsers = "users:read-users",
  EditUser = "users:edit-user",
  RemoveUser = "users:remove-user",
  ResetPassword = "users:reset-password",
  ResetTwoFactorAuth = "users:reset-two-factor-auth",
  AssignRole = "users:assign-role",
  InviteUser = "users:invite-user",

  // Roles
  CreateRole = "roles:create-role",
  ReadRoles = "roles:read-roles",
  ReadRole = "roles:read-role",
  EditRole = "roles:edit-role",
  RemoveRole = "roles:remove-role",
  ReadPermissions = "roles:read-permissions",

  // Charts
  CreateChart = "charts:create-chart",
  ReadCharts = "charts:read-charts",
  ReadChart = "charts:read-chart",
  EditChart = "charts:edit-chart",
  RemoveChart = "charts:remove-chart",
  DeleteChart = "charts:delete-chart",
  PackageChart = "charts:package-chart",

  // Projects
  CreateProject = "projects:create-project",
  ReadProjects = "projects:read-projects",
  ReadProject = "projects:read-project",
  EditProject = "projects:edit-project",
  RemoveProject = "projects:remove-project",
  DeleteProject = "projects:delete-project",
  ActivateProject = "projects:activate-project",
  DeactivateProject = "projects:deactivate-project",
}
