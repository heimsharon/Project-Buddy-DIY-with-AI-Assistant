import { ProfileUpdateFormProps } from "@/types/profile-update";
import {
  ProfileAvatar,
  AvatarUpdateForm,
  EmailUpdateForm,
  PasswordUpdateForm,
  Settings
} from "./indexProfile";

interface ProfileFieldsProps {
  userName: string;
  email: string;
  avatar?: string;
  password: string;
  settings?: string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function ProfileFields ({
  userName,
  email,
  avatar,
  password,
  settings,
  onChange,

}: ProfileFieldsProps) {


}