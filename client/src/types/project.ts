export enum ProjectStatus {
  Planning = 'planning',
  Active = 'active',
  WrappingUp = 'wrapping_up',
  OnHold = 'on_hold',
  Completed = 'completed',
  Canceled = 'cancelled',
}

export type Dimensions = {
  length: number;
  width: number;
  height?: number;
  unit: "cm" | "in" | "m" | "ft";
}

export interface ProjectData {
  id: number;
  userId: number;
  userName: string;
  projectName: string;
  description?: string;
  dimensions?:Dimensions;
  createdAt: Date;
  updatedAt?: Date;
  startDay?: Date;
  projectEndDate?: Date;
  projectBudget?: number;
  materials?: Material[];
  status: ProjectStatus;
}
