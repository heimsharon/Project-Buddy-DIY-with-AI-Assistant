export interface UserData {
  id: number;
  username: string;
  email: string;

  // User Authentication/Security
  passwordHash: string;
  cuid: string;
  emailVerified: boolean;
  emailVerifiedToken: string | null;
  resetToken: string | null;
  loginAttempts: number;

  // User Profile
  firstName: string | null;
  lastName: string | null;
  avatar?: string | null; 

  // User Timestamps
  isActive: boolean;
  isBlocked: boolean;
  blockedReason?: string | null;
  blockedByUserId?: number | null; // Admin/Mod Ref
  deletedByUserId?: number | null; // Admin/Mod Ref

   // other optional items
  // phoneNumber: string : null;
  // location: string;
  // timezone: string;
  // bio: string;
  // User Address
    //streetAddress: string | null;
    //city: string | null;
    //state: string | null;
    //zipCode: string | null;
    //county: string | null;
    //Service address?
    
// User Roll and Service Levels
  role:
  'GUEST' |
  'USER' |
  'SERVICE_PROVIDER' |
  'MODERATOR' |
  'ADMIN' |
  'SUPER_ADMIN';

  serviceLevel?:
    'FREE_TRIAL'|
    'MONTHLY' |
    'ANNUAL'
    null;

  // User TimeStamps
    createdAt: string;
    updatedAt: string;
    resetTokenExpire?: string | null;
    lockedUntil?:  string | null;
    blockedAt?: string | null;
    deletedAt?: string | null;

};