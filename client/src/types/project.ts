import { Dimensions, UnitCoverage } from "./measurement-types";

export enum ProjectStatus {
  Planning = 'planning',
  Active = 'active',
  WrappingUp = 'wrapping_up',
  OnHold = 'on_hold',
  Completed = 'completed',
  Canceled = 'cancelled',
}

export interface BudgetItem {
  id: string;
  name: string;
  projectBudget: number;
  actualCost?: number;
  category: 'materials' | 'labor' | 'tools' | 'other';
}

export interface Task {
  id: string;
  description: string;
  projectEndDate?: Date;
  status: ProjectStatus;
  assignedTo?: string;
}

export interface Material {
  _id: string;
  name: string;
  category:
    | 'fencing'
    | 'paint'
    | 'drywall'
    | 'lumber'
    | 'concrete'
    | 'roofing'
    | 'plumbing'
    | 'electrical'
    | 'flooring'
    | 'insulation'
    | 'decking'
    | 'stain'
    | 'landscaping'
    | 'hardware'
    | 'tools'
    | 'HVAC'
    | 'siding'
    | 'masonry';
  unit: string;
  unitCoverage: UnitCoverage;
  quantity: number;
  priceUSD: number;
  vendor?: string;
  lastUpdated: Date;
}

export interface ProjectData {
  ticketNumber: string;
  userId: number;
  userName: string;
  projectName: string;
  description?: string;
  dimensions?: Dimensions;
  createdAt: Date;
  updatedAt?: Date;
  startDay?: Date;
  projectEndDate?: Date;
  projectBudget?: number;
  materialIds: [ID];
  status: ProjectStatus;
}
