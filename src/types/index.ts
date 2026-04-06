// User

export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

// API Response

export interface UsersListResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
}

export interface SingleUserResponse {
  data: User;
}

export interface LoginResponse {
  token: string;
}

export interface RegisterResponse {
  id: number;
  token: string;
}

export interface APIErrorResponse {
  error: string;
}

export interface AuthUser {
  email: string;
}

export interface AuthContextType {
  user: AuthUser | null;
  token: string | null;
  login: (token: string, userData: AuthUser) => void;
  logout: () => void;
  isAuthenticated: boolean;
  loading: boolean;
}

// Toast

export type ToastType = 'success' | 'error';

export interface ToastItem {
    
}