export type AdminRole = 'super_admin' | 'admin' | 'support';

export interface AdminLoginRequest {
  email: string;
  password: string;
}

export interface AdminLoginResponse {
  token: string;
  expires_at: string;
  admin: {
    id: string;
    email: string;
    full_name: string;
    role: AdminRole;
  };
}

export interface Admin {
  id: string;
  email: string;
  full_name: string;
  role: AdminRole;
}