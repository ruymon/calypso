import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { API_BASE_URL } from "@/constants/api";
import { getAccessToken } from "@/lib/auth";
import { getNameInitials } from "@/lib/utils";
import {
  BadgeCheckIcon,
  BugIcon,
  CalendarDaysIcon,
  HeartHandshakeIcon,
  MapPinIcon,
  UserRoundIcon,
} from "lucide-react";
import { UserProfile } from "../layout";

interface AppSettingsHomePageProps {}

async function fetchUserProfile(
  accessToken: string,
): Promise<UserProfile | null> {
  const url = `${API_BASE_URL}/users/profile`;

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

export default async function AppSettingsHomePage({}: AppSettingsHomePageProps) {
  const accessToken = await getAccessToken();

  if (!accessToken) return null;

  const userProfile = await fetchUserProfile(accessToken);

  return (
    <>
      <section className="flex flex-col gap-4">
      <Avatar className="h-20 w-20">
          <AvatarImage src={userProfile?.avatarUrl} alt="avatar" />
          <AvatarFallback>{userProfile?.name ? getNameInitials(userProfile?.name) : <UserRoundIcon className="w-4 h-4" />}</AvatarFallback>
        </Avatar>
        <header className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-bold text-foreground">
                {userProfile?.name || "Anonymous..."}
              </h2>

              <div className="flex items-center gap-2">
                <BadgeCheckIcon className="h-5 w-5 shrink-0 text-blue-500" />
                <HeartHandshakeIcon className="h-5 w-5 shrink-0 text-red-500" />
                <BugIcon className="h-5 w-5 shrink-0 text-purple-500" />
              </div>
            </div>
            <span className="text-accent-foreground">@seu_username</span>
          </div>

          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPinIcon className="h-4 w-4 shrink-0" />
              <span>São Paulo, Brasil</span>
            </div>

            <div className="flex items-center gap-2 text-muted-foreground">
              <CalendarDaysIcon className="h-4 w-4 shrink-0" />
              <span>Ingressou em junho de 2020</span>
            </div>
          </div>  
        </header>
      </section>

      <Separator className="bg-accent/25" />

      <section className="flex flex-col gap-6">
        <h2 className="text-xs font-semibold uppercase text-muted-foreground">
          Password and security
        </h2>

        <div className="flex flex-col gap-8">
          <div className="flex w-full items-center justify-between gap-4">
            <header className="flex max-w-[75%] flex-col gap-1">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-secondary-foreground">
                  Multi-factor authentication
                </h3>

                <Badge variant="outline">Not enabled</Badge>
              </div>

              <span className="text-sm text-muted-foreground">
                Proteja sua conta com camadas extras de segurança. Uma vez
                configurado, será necessário que você digite sua senha e um
                código de autenticação do seu telefone para fazer o login.
              </span>
            </header>

            <Switch />
          </div>

          <div className="flex w-full items-center justify-between gap-4">
            <header className="flex max-w-[75%] flex-col gap-1">
              <h3 className="font-semibold text-secondary-foreground">
                Reset password
              </h3>

              <span className="text-sm text-muted-foreground">
                Proteja sua conta com camadas extras de segurança. Uma vez
                configurado, será necessário que você digite sua senha e um
                código de autenticação do seu telefone para fazer o login.
              </span>
            </header>

            <Button variant="secondary">Reset password</Button>
          </div>
        </div>
      </section>

      <Separator className="bg-accent" />

      <section className="flex flex-col gap-6">
        <h2 className="text-xs font-semibold uppercase text-muted-foreground">
          Privacy and data
        </h2>

        <Card className="flex flex-row items-end justify-between gap-4">
          <CardHeader>
            <CardTitle className="text-base">Delete my account</CardTitle>

            <CardDescription className="text-sm">
              Note that deleting your account will also delete any organizations
              in which you are the only member
            </CardDescription>
          </CardHeader>

          <CardFooter>
            <Button variant="destructive">Delete account</Button>
          </CardFooter>
        </Card>
      </section>
    </>
  );
}
