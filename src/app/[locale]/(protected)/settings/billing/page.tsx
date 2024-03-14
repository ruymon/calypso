import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRightIcon,
  BriefcaseIcon,
  CalendarRangeIcon,
  CloudSunIcon,
  CrownIcon,
  FullscreenIcon,
  GalleryHorizontalEnd,
  MegaphoneIcon,
  MoonStarIcon,
  RadioIcon,
  RouteIcon,
  SparklesIcon,
  UsersIcon,
} from "lucide-react";
import { setStaticParamsLocale } from "next-international/server";
import Image from "next/image";

interface AppSettingsProPageProps {
  params: {
    locale: string;
  };
}

export default function AppSettingsProPage({
  params: { locale },
}: AppSettingsProPageProps) {
  setStaticParamsLocale(locale);
  return (
    <>
      <section className="relative flex flex-col gap-6 rounded-xl p-6">
        <div className="flex w-3/4 flex-col gap-4">
          <Badge className="w-fit" variant="secondary">
            <SparklesIcon className="mr-1 h-3 w-3 shrink-0" />
            Novidade
          </Badge>

          <header className="flex flex-col gap-1">
            <h1 className="text-5xl font-extrabold text-primary-foreground">
              Skyscope{" "}
              <span className="font-black uppercase text-primary-foreground">
                pro
              </span>
            </h1>

            <span className="w-3/4 text-primary-foreground/90">
              Tenha tudo que você precisa para levar sua simulação para o
              próximo nível
            </span>
          </header>
        </div>

        <div className="flex flex-col text-primary-foreground">
          <span className="text-sm">Apenas</span>
          <h2 className="text-3xl font-extrabold">
            R$ 9,99
            <span className="text-sm font-normal opacity-80">/mês</span>
          </h2>
        </div>

        <div className="flex items-center gap-4">
          <Button size="lg" variant="secondary">
            <ArrowRightIcon className="mr-2 h-4 w-4" />
            Comece agora
          </Button>

          <div className="flex w-4/12 items-center gap-2 text-sm">
            <figure className="flex -space-x-4">
              <Avatar className="h-8 w-8 rounded-full border-4 border-primary">
                <AvatarImage
                  src="https://mighty.tools/mockmind-api/content/human/57.jpg"
                  alt="Filipe's Avatar"
                />
                <AvatarFallback>FF</AvatarFallback>
              </Avatar>

              <Avatar className="h-8 w-8 rounded-full border-4 border-primary">
                <AvatarImage
                  src="https://mighty.tools/mockmind-api/content/human/7.jpg"
                  alt="Filipe's Avatar"
                />
                <AvatarFallback>FF</AvatarFallback>
              </Avatar>

              <Avatar className="h-8 w-8 rounded-full border-4 border-primary">
                <AvatarImage
                  src="https://mighty.tools/mockmind-api/content/human/43.jpg"
                  alt="Filipe's Avatar"
                />
                <AvatarFallback>FF</AvatarFallback>
              </Avatar>
            </figure>

            <span className="text-xs text-primary-foreground/75">
              Junte-se a milhares de usuários que já são{" "}
              <strong className="text-primary-foreground">PRO</strong>
            </span>
          </div>
        </div>

        <figure className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r  from-primary from-25% via-primary/80 via-75% to-primary/50" />
        <Image
          src="https://images.unsplash.com/photo-1571306603861-20c055ab2e5c"
          fill
          alt="Banner"
          objectFit="cover"
          className="absolute inset-0 -z-20 rounded-xl"
        />
      </section>

      <section className="flex flex-col gap-6">
        <header className="flex flex-col">
          <h3 className="text-2xl font-bold text-foreground">Recursos</h3>
          <span className="text-sm text-muted-foreground">
            Desbloqueie recursos exclusivos para melhorar sua experiência.
          </span>
        </header>

        <div className="grid grid-cols-2 gap-6">
          <div className="flex gap-4">
            <figure className="flex items-center justify-center rounded-sm bg-primary/10 p-2 text-primary">
              <MegaphoneIcon className="h-6 w-6" />
            </figure>

            <header className="flex flex-col">
              <h4 className="font-semibold text-accent-foreground">
                Alertas no telefone
                <Badge className="ml-2">
                  <SparklesIcon className="mr-0.5 h-3 w-3 shrink-0" />
                  Novo
                </Badge>
              </h4>
              <span className="text-sm text-muted-foreground">
                Receba alertas no seu telefone sobre controladores online na sua
                rota, mudanças de clima e muito mais
              </span>
            </header>
          </div>

          <div className="flex gap-4">
            <figure className="flex items-center justify-center rounded-sm bg-primary/10 p-2 text-primary">
              <FullscreenIcon className="h-6 w-6" />
            </figure>

            <header className="flex flex-col">
              <h4 className="font-semibold text-accent-foreground">
                Screenshots
              </h4>
              <span className="text-sm text-muted-foreground">
                Registre os melhores momentos do seu voo com capturas de tela
              </span>
            </header>
          </div>

          <div className="flex gap-4">
            <figure className="flex items-center justify-center rounded-sm bg-primary/10 p-2 text-primary">
              <CrownIcon className="h-6 w-6" />
            </figure>

            <header className="flex flex-col">
              <h4 className="font-semibold text-accent-foreground">
                Insignia de Pro
              </h4>
              <span className="text-sm text-muted-foreground">
                Mostre para todos que você é um usuário Pro com uma insígnia
                exclusiva
              </span>
            </header>
          </div>

          <div className="flex gap-4">
            <figure className="flex items-center justify-center rounded-sm bg-primary/10 p-2 text-primary">
              <CalendarRangeIcon className="h-6 w-6" />
            </figure>

            <header className="flex flex-col">
              <h4 className="font-semibold text-accent-foreground">
                Estatísticas
              </h4>
              <span className="text-sm text-muted-foreground">
                Acompanhe os detalhes de todos os seus voos em um só lugar
              </span>
            </header>
          </div>

          <div className="flex gap-4">
            <figure className="flex items-center justify-center rounded-sm bg-primary/10 p-2 text-primary">
              <RouteIcon className="h-6 w-6" />
            </figure>

            <header className="flex flex-col">
              <h4 className="font-semibold text-accent-foreground">
                Rotas de voos reais
              </h4>
              <span className="text-sm text-muted-foreground">
                Simule voos reais operados por companhias aéreas
              </span>
            </header>
          </div>

          <div className="flex gap-4">
            <figure className="flex items-center justify-center rounded-sm bg-primary/10 p-2 text-primary">
              <CloudSunIcon className="h-6 w-6" />
            </figure>

            <header className="flex flex-col">
              <h4 className="font-semibold text-accent-foreground">
                Relatórios meteorológicos
              </h4>
              <span className="text-sm text-muted-foreground">
                Receba informações mais detalhadas sobre o clima em tempo real
              </span>
            </header>
          </div>

          <div className="flex gap-4">
            <figure className="flex items-center justify-center rounded-sm bg-primary/10 p-2 text-primary">
              <UsersIcon className="h-6 w-6" />
            </figure>

            <header className="flex flex-col">
              <h4 className="font-semibold text-accent-foreground">
                Voos em grupo
              </h4>
              <span className="text-sm text-muted-foreground">
                Crie um ambiente de voos em grupo com outros usuários PRO
              </span>
            </header>
          </div>

          <div className="flex gap-4">
            <figure className="flex items-center justify-center rounded-sm bg-primary/10 p-2 text-primary">
              <RadioIcon className="h-6 w-6" />
            </figure>

            <header className="flex flex-col">
              <h4 className="font-semibold text-accent-foreground">
                Widgets para transmissão
              </h4>
              <span className="text-sm text-muted-foreground">
                Detalhes do seu voo em tempo real para utilizar em transmissões
              </span>
            </header>
          </div>

          <div className="flex gap-4">
            <figure className="flex items-center justify-center rounded-sm bg-primary/10 p-2 text-primary">
              <GalleryHorizontalEnd className="h-6 w-6" />
            </figure>

            <header className="flex flex-col">
              <h4 className="font-semibold text-accent-foreground">
                Skyscope Recap
              </h4>
              <span className="text-sm text-muted-foreground">
                Receba um resumo semanal de todos os seus voos e estatísticas
                para compartilhar com amigos
              </span>
            </header>
          </div>

          <div className="flex gap-4">
            <figure className="flex items-center justify-center rounded-sm bg-primary/10 p-2 text-primary">
              <BriefcaseIcon className="h-6 w-6" />
            </figure>

            <header className="flex flex-col">
              <h4 className="font-semibold text-accent-foreground">
                Modo carreira
              </h4>
              <span className="text-sm text-muted-foreground">
                Desafie-se com objetivos e recompensas exclusivas
              </span>
            </header>
          </div>

          <div className="flex gap-4">
            <figure className="flex items-center justify-center rounded-sm bg-primary/10 p-2 text-primary">
              <MoonStarIcon className="h-6 w-6" />
            </figure>

            <header className="flex flex-col">
              <h4 className="font-semibold text-accent-foreground">
                Modo escuro
              </h4>
              <span className="text-sm text-muted-foreground">
                Desafie-se com objetivos e recompensas exclusivas
              </span>
            </header>
          </div>
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-sm flex-col items-center gap-6 rounded-lg p-4 text-center">
        <header className="flex flex-col items-center gap-1">
          <h3 className="text-2xl font-bold text-foreground">
            Pronto para o futuro?
          </h3>
          <span className="w-3/4 text-sm text-muted-foreground">
            Desbloqueie recursos exclusivos para melhorar sua experiência.
          </span>
        </header>

        <Button variant="default" className="w-fit">
          <CrownIcon className="mr-2 h-4 w-4" />
          Assinar Skyscope Pro
        </Button>
      </section>
    </>
  );
}
