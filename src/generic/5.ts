export enum UserRole {
  Administrator = "admin",
  Editor = "editor",
  Visitor = "guest",
}

const roleDescriptions: Record<UserRole, string> = {
  [UserRole.Administrator]: "Administrator User",
  [UserRole.Editor]: "Content Editor",
  [UserRole.Visitor]: "Guest User",
};
