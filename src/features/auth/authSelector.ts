export const selectUser= (state: any) => state.auth.user;
export const selectIsAuthenticated = (state: any) => state.auth.isAuthenticated;
export const selectToken = (state: any) => state.auth.token;
export const selectAuthLoading = (state: any) => state.auth.loading;    
export const selectAuthError = (state: any) => state.auth.error;

// Role-based: dummyjson users have a 'role' field ('admin' | 'moderator' | 'user')
export const selectUserRole = (state: any) => state.auth.user?.role;
export const selectIsAdmin = (state: any) => state.auth.user?.role === 'admin';
