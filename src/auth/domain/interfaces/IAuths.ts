// AuthService
export interface AuthService {
  Register(request: RegisterRequest): Promise<RegisterResponse>;
  Login(request: LoginRequest): Promise<LoginResponse>;
  Validate(request: ValidateRequest): Promise<ValidateResponse>;
}

// Register
export interface RegisterRequest {
  email: string;
  password: string;
}

export interface RegisterResponse {
  status: number;
  error: string[];
}

// Login
export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  status: number;
  error: string[];
  token: string;
}

// Validate
export interface ValidateRequest {
  token: string;
}

export interface ValidateResponse {
  status: number;
  error: string[];
  userId: number;
}
