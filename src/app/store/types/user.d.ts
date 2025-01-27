export type User = {
  _id: string;
  firstname: string;
  lastname: string;
  email: string;
  avatar: string;
  role: string;
  twoFactorAuth: boolean;
  ipAddress: string;
  lastLogin: string;
  is2FAVerified: boolean;
  resetCount: number;
  permissions: string[];
  removed: boolean;
  createdAt: string;
  updatedAt: string;
};

export type UserSignupBody = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  phone: string;
  country: string;
  dob: string;
  confirmPassword: string;
  acceptTerms: boolean;
  emailCode?: string;
  phoneCode?: string;
};

export type InitSignupVerificationBody = {
  email?: string;
  phone?: string;
};
export type SignupVerificationBody = {
  email?: string;
  phone?: string;
  code: string;
};

export type UserLoginBody = {
  email: string;
  password: string;
};

export type ChangePasswordBody = {
  password: string;
  newPassword: string;
};

export type UpdateProfileBody = {
  firstname: string;
  lastname: string;
  avatar: string;
};

export type ForgotPasswordBody = {
  email: string;
};

export type ResetPasswordBody = {
  password: string;
  resetToken: string;
};

export type Set2FABody = {
  status: "Enabled" | "Disabled";
};

export type Verify2FABody = {
  code: string;
};

export type InviteUserBody = {
  firstname: string;
  lastname: string;
  email: string;
  role: string;
};
