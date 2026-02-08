export interface ProfileUpdateFormProps {
  email: string;
  password: string;
  avatar: string | null;
  onSubmitEmailChange: (email: string, password: string) => Promise<void>;
  onSubmitPasswordChange: (password: string) => Promise<void>;
  onSubmitAvatarChange: (avatar: string | null , password: string) => Promise<void>;
}

