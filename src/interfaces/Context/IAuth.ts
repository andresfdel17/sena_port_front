export interface Login {
  token: string;
  expiresAt: number;
}

export interface IAuthProvider {
  token: string | null;
  user: User;
  validateToken(): void;
  isAutenticated(): boolean;
  Login(data: Login): void;
  LogOut(): void;
}

export interface User {
  [key: string] : any
}