// ⚠️ WARNING: This is a CLIENT-SIDE ONLY configuration
// For production, admin authorization MUST be handled on the backend
// with proper role-based access control (RBAC) and JWT validation

export const config = {
  // Admin email - should be moved to backend RBAC in production
  ADMIN_EMAIL: import.meta.env.VITE_ADMIN_EMAIL || "mamungolumolu@gmail.com",
};

// Helper function to check if user is admin (client-side only - NOT SECURE)
export const isAdmin = (userEmail) => {
  return userEmail === config.ADMIN_EMAIL;
};
