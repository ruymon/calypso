export type ProfileStatus = "active" | "suspend" | "created";

export interface UserProfile {
  id: string;
  name?: string;
  email: string;
  avatarUrl?: string;
  ivaoId?: string;
  vatsimId?: string;
  posconId?: string;
  navigraphId?: string;
  simbriefId?: string;
  status: ProfileStatus;
}
