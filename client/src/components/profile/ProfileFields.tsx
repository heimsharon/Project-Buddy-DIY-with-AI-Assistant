import { ProfileUpdateFormProps } from "@/types/profile-update";
import {
  ProfileAvatar,
  AvatarUpdateForm,
  EmailUpdateForm,
  PasswordUpdateForm,
  UserSettings
} from "./indexProfile";

interface ProfileFieldsProps {
  userName: string;
  email: string;
  avatar?: string;
  password: string;
  userSettings?: string[];
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function ProfileFields ({
  userName,
  email,
  avatar,
  password,
  userSettings,
  onChange,
}: ProfileFieldsProps) {


}