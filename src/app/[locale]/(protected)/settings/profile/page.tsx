import {
  PiAlertTriangleStroke,
  PiEnvelopeDefaultDuoSolid,
  PiUserDefaultDuoSolid,
} from "@/components/icons";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { API_BASE_URL } from "@/constants/api";
import { getAccessToken } from "@/lib/auth";
import { notFound } from "next/navigation";
import { DangerCollapsible } from "./_components/danger-collapsible";

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
}

interface SettingsProfilePageProps {}

async function fetchUserProfile(): Promise<UserProfile | null> {
  const url = `${API_BASE_URL}/users/profile`;

  const accessToken = await getAccessToken();

  if (!accessToken) {
    return null;
  }

  const options: RequestInit = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    next: {
      tags: ["user-profile"],
    },
  };

  const result = await fetch(url, options);
  const data = await result.json();

  if (result.status !== 200) {
    console.error("Error fetching user profile", data);
    return null;
  }

  return data;
}

export default async function SettingsProfilePage({}: SettingsProfilePageProps) {
  const userProfile = await fetchUserProfile();

  if (!userProfile) {
    return notFound();
  }

  return (
    <main className="mx-auto flex max-w-xl flex-1 flex-col gap-8">
      <header className="flex flex-col py-4">
        <h2 className="text-2xl font-bold text-foreground">Profile</h2>
        <span className="text-sm text-muted-foreground">
          Manage and update your profile settings
        </span>
      </header>

      <section className="flex flex-col gap-4">
        <Card>
          <CardHeader className="flex-row items-center gap-4">
            <PiEnvelopeDefaultDuoSolid className="h-5 w-5 text-primary" />

            <h3 className="font-semibold">email</h3>
          </CardHeader>
          <Separator />

          <CardContent className="flex flex-col gap-4 pt-4">
            <span className="font-medium text-accent-foreground">
              {userProfile.email}
            </span>

            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <PiAlertTriangleStroke className="h-3 w-3" />
              <span>You cannot change your email address</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex-row items-center gap-4">
            <PiUserDefaultDuoSolid className="h-5 w-5 text-primary" />

            <h3 className="font-semibold">name</h3>
          </CardHeader>
          <Separator />

          <CardContent className="flex flex-col gap-4 pt-4">
            {userProfile.name ? (
              <span className="font-medium text-accent-foreground">
                {userProfile.name}
              </span>
            ) : (
              <span className="font-medium italic text-muted-foreground">
                Not set
              </span>
            )}

            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <PiAlertTriangleStroke className="h-3 w-3" />
              <span>At the moment, you cannot change your name.</span>
            </div>
          </CardContent>
        </Card>

        <DangerCollapsible />
      </section>
    </main>
  );
}
