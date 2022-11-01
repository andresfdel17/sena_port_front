export interface Login {
  token: string;
  expiresAt: number;
}

export interface IAuthProvider {
  token: string | null;
  user: string;
  validateToken: () => void;
  isAutenticated: () => boolean;
  Login: (data: Login) => void;
  LogOut: () => void;
}
