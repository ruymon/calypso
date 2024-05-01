export type ProfileStatus = "active" | "suspend" | "created";

export interface UserProfile {
  id: string;
  name?: string;
  email: string;
  avatarUrl?: string;
  ivaoId: string | null;
  vatsimId: string | null;
  posconId: string | null;
  navigraphId: string | null;
  simbriefId: string | null;
  status: ProfileStatus;
}
