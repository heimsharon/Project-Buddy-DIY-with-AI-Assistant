export interface ProfileUpdateFormProps {
  email: string;
  password: string;
  avatar: string | null;
  onEmailChange: (email: string, password: string) => Promise<void>;
  onPasswordChange: (password: string) => Promise<void>;
  onAvatarChange: (avatar: string | null , password: string) => Promise<void>;
}

