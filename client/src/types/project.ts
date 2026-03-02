import { Dimensions, UnitCoverage } from "./measurement-types";

export enum ExteriorProjectType {  
  Deck/Patio = 'Deck/Patio', 
  Fencing = 'Fencing',
  Landscaping = 'Landscaping',
  Other = "Other",
  Pool = 'Pool',
  Roofing ='Roofing',  
  Windows = 'Windows',    
}

export enum InteriorProjectType {  
  Bathroom = 'Bathroom',
  Bedroom = 'Bedroom',
  Dining Room = 'Dining Room',
  HVAC = 'HVAC',
  Kitchen = 'Kitchen',  
  Living/Family Room = 'Living/Family Room',
  Other = 'Other',
}

export enum SubProjectType {
  Carpentry = 'Carpentry',
  Electrical = 'Electrical',
  Flooring = 'Flooring',
  Maintenance = 'Maintenance',
  Masonry = 'Masonry',
  NewBuild = 'NewBuild',
  Other = 'Other',
  Paint = 'Paint',
  Plumbing = 'Plumbing',
  Remodel = 'Remodel',  
  Resurface = 'Resurface'  
}

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
  imageUrl?: string;  
  unit: string;
  unitCoverage: UnitCoverage;
  quantity: number;
  priceUSD: number;
  vendor?: string;
  lastUpdated: Date;
}

export interface ProjectFormProps {
  values: ProjectData;
  onChange: (values: ProjectData) => void;
}

export interface Task {
  id: string;
  description: string;
  projectEndDate?: Date;
  status: ProjectStatus;
  assignedTo?: string;
}

export interface ProjectData {
  projectName: string;
  description?: string;
  startDay?:string | null;  
  projectEndDate?: string | null;

  projectType?: InteriorProjectType | ExteriorProjectType;
  subProjectType?: SubProjectType;
  
  dimensions?: Dimensions;
  materials: Material[];
  projectBudget?: number;
  
  status: ProjectStatus;
  errors?: string[]

  completedSteps: number[];
  currentStep?: number;
  stepData: Record<number, any>;
}
