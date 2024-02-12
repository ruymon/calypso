import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import {
  BadgeCheckIcon,
  BugIcon,
  CalendarDaysIcon,
  HeartHandshakeIcon,
  MapPinIcon,
} from "lucide-react";
import Image from "next/image";

interface AppSettingsHomePageProps {}

export default function AppSettingsHomePage({}: AppSettingsHomePageProps) {
  return (
    <>
      <section className="flex flex-col gap-4">
        <figure className="flex flex-col -space-y-12">
          <Image
            src="https://images.unsplash.com/photo-1571306603861-20c055ab2e5c"
            alt="User's background banner"
            width={1400}
            height={200}
            className="w-full rounded-lg h-32 object-cover object-center"
          />

          <Avatar className="w-20 h-20 rounded-4xl ml-4">
            <AvatarImage src="https://github.com/ruymon.png" />
            <AvatarFallback>RM</AvatarFallback>
          </Avatar>
        </figure>

        <header className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-4">
              <h2 className="text-foreground font-bold text-2xl">
                Ruy Monteiro
              </h2>

              <div className="flex items-center gap-2">
                <BadgeCheckIcon className="text-blue-500 w-5 h-5 shrink-0" />
                <HeartHandshakeIcon className="text-red-500 w-5 h-5 shrink-0" />
                <BugIcon className="text-purple-500 w-5 h-5 shrink-0" />
              </div>
            </div>
            <span className="text-accent-foreground">@ruymon</span>
          </div>

          <div className="flex items-center text-sm gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPinIcon className="w-4 h-4 shrink-0" />
              <span>São Paulo, Brasil</span>
            </div>

            <div className="flex items-center gap-2 text-muted-foreground">
              <CalendarDaysIcon className="w-4 h-4 shrink-0" />
              <span>Ingressou em junho de 2020</span>
            </div>
          </div>
        </header>
      </section>

      <Separator className="bg-accent/25" />

      <section className="flex flex-col gap-6">
        <h2 className="text-muted-foreground font-semibold uppercase text-xs">
          Password and security
        </h2>

        <div className="flex flex-col gap-8">
          <div className="flex gap-4 justify-between items-center w-full">
            <header className="flex flex-col gap-1 max-w-[75%]">
              <div className="flex items-center gap-2">
                <h3 className="text-secondary-foreground font-semibold">
                  Multi-factor authentication
                </h3>

                <Badge variant="muted" size="sm">
                  Not enabled
                </Badge>
              </div>

              <span className="text-sm text-muted-foreground">
                Proteja sua conta com camadas extras de segurança. Uma vez
                configurado, será necessário que você digite sua senha e um
                código de autenticação do seu telefone para fazer o login.
              </span>
            </header>

            <Switch />
          </div>

          <div className="flex gap-4 justify-between items-center w-full">
            <header className="flex flex-col gap-1 max-w-[75%]">
              <h3 className="text-secondary-foreground font-semibold">
                Reset password
              </h3>

              <span className="text-sm text-muted-foreground">
                Proteja sua conta com camadas extras de segurança. Uma vez
                configurado, será necessário que você digite sua senha e um
                código de autenticação do seu telefone para fazer o login.
              </span>
            </header>

            <Button variant="ghost">Reset password</Button>
          </div>
        </div>
      </section>

      <Separator className="bg-accent/25" />

      <section className="flex flex-col gap-6">
        <h2 className="text-muted-foreground font-semibold uppercase text-xs">
          Privacy and data
        </h2>

        <div className="flex gap-4 justify-between items-center w-full p-3 rounded-lg border border-destructive/50 bg-warning-gradient">
          <header className="flex flex-col gap-1 max-w-[75%]">
            <h3 className="text-secondary-foreground font-semibold">
              Delete my account
            </h3>

            <span className="text-sm text-muted-foreground">
              Note that deleting your account will also delete any organizations
              in which you are the only member
            </span>
          </header>

          <Button variant="outline-destructive">Delete account</Button>
        </div>
      </section>
    </>
  );
}
