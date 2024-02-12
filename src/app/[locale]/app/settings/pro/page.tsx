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
import Image from "next/image";

interface AppSettingsProPageProps {}

export default function AppSettingsProPage({}: AppSettingsProPageProps) {
  return (
    <>
      <section className="flex flex-col gap-6 relative rounded-xl p-6">
        <div className="flex flex-col gap-4 w-3/4">
          <Badge className="w-fit text-primary" size="sm">
            <SparklesIcon className="w-3 h-3 shrink-0 mr-1" />
            Novidade
          </Badge>

          <header className="flex flex-col gap-1">
            <h1 className="text-5xl font-extrabold text-primary-foreground">
              Skyscope{" "}
              <span className="uppercase font-black text-primary-foreground">
                pro
              </span>
            </h1>

            <span className="text-primary-foreground/90 w-3/4">
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

        <div className="flex gap-4 items-center">
          <Button size="lg" variant="primary-light">
            <ArrowRightIcon className="w-4 h-4 mr-2" />
            Comece agora
          </Button>

          <div className="flex items-center text-sm gap-2 w-4/12">
            <figure className="flex -space-x-4">
              <Avatar className="rounded-full border-4 border-primary w-8 h-8">
                <AvatarImage
                  src="https://mighty.tools/mockmind-api/content/human/57.jpg"
                  alt="Filipe's Avatar"
                />
                <AvatarFallback>FF</AvatarFallback>
              </Avatar>

              <Avatar className="rounded-full border-4 border-primary w-8 h-8">
                <AvatarImage
                  src="https://mighty.tools/mockmind-api/content/human/7.jpg"
                  alt="Filipe's Avatar"
                />
                <AvatarFallback>FF</AvatarFallback>
              </Avatar>

              <Avatar className="rounded-full border-4 border-primary w-8 h-8">
                <AvatarImage
                  src="https://mighty.tools/mockmind-api/content/human/43.jpg"
                  alt="Filipe's Avatar"
                />
                <AvatarFallback>FF</AvatarFallback>
              </Avatar>
            </figure>

            <span className="text-primary-foreground/75 text-xs">
              Junte-se a milhares de usuários que já são{" "}
              <strong className="text-primary-foreground">PRO</strong>
            </span>
          </div>
        </div>

        <figure className="absolute inset-0 bg-gradient-to-r from-primary from-25%  via-75% via-primary/80 to-primary/50 -z-10 rounded-xl" />
        <Image
          src="https://images.unsplash.com/photo-1571306603861-20c055ab2e5c"
          fill
          alt="Banner"
          objectFit="cover"
          className="-z-20 rounded-xl absolute inset-0"
        />
      </section>

      <section className="flex flex-col gap-6">
        <header className="flex flex-col">
          <h3 className="text-foreground font-bold text-2xl">Recursos</h3>
          <span className="text-sm text-muted-foreground">
            Desbloqueie recursos exclusivos para melhorar sua experiência.
          </span>
        </header>

        <div className="grid grid-cols-2 gap-6">
          <div className="flex gap-4">
            <figure className="bg-primary/10 flex items-center justify-center text-primary rounded-sm p-2">
              <MegaphoneIcon className="w-6 h-6" />
            </figure>

            <header className="flex flex-col">
              <h4 className="text-accent-foreground font-semibold">
                Alertas no telefone
                <Badge size="sm" variant="purple" className="py-0 px-0.5 ml-2">
                  <SparklesIcon className="w-3 h-3 shrink-0 mr-0.5" />
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
            <figure className="bg-primary/10 flex items-center justify-center text-primary rounded-sm p-2">
              <FullscreenIcon className="w-6 h-6" />
            </figure>

            <header className="flex flex-col">
              <h4 className="text-accent-foreground font-semibold">
                Screenshots
              </h4>
              <span className="text-sm text-muted-foreground">
                Registre os melhores momentos do seu voo com capturas de tela
              </span>
            </header>
          </div>

          <div className="flex gap-4">
            <figure className="bg-primary/10 flex items-center justify-center text-primary rounded-sm p-2">
              <CrownIcon className="w-6 h-6" />
            </figure>

            <header className="flex flex-col">
              <h4 className="text-accent-foreground font-semibold">
                Insignia de Pro
              </h4>
              <span className="text-sm text-muted-foreground">
                Mostre para todos que você é um usuário Pro com uma insígnia
                exclusiva
              </span>
            </header>
          </div>

          <div className="flex gap-4">
            <figure className="bg-primary/10 flex items-center justify-center text-primary rounded-sm p-2">
              <CalendarRangeIcon className="w-6 h-6" />
            </figure>

            <header className="flex flex-col">
              <h4 className="text-accent-foreground font-semibold">
                Estatísticas
              </h4>
              <span className="text-sm text-muted-foreground">
                Acompanhe os detalhes de todos os seus voos em um só lugar
              </span>
            </header>
          </div>

          <div className="flex gap-4">
            <figure className="bg-primary/10 flex items-center justify-center text-primary rounded-sm p-2">
              <RouteIcon className="w-6 h-6" />
            </figure>

            <header className="flex flex-col">
              <h4 className="text-accent-foreground font-semibold">
                Rotas de voos reais
              </h4>
              <span className="text-sm text-muted-foreground">
                Simule voos reais operados por companhias aéreas
              </span>
            </header>
          </div>

          <div className="flex gap-4">
            <figure className="bg-primary/10 flex items-center justify-center text-primary rounded-sm p-2">
              <CloudSunIcon className="w-6 h-6" />
            </figure>

            <header className="flex flex-col">
              <h4 className="text-accent-foreground font-semibold">
                Relatórios meteorológicos
              </h4>
              <span className="text-sm text-muted-foreground">
                Receba informações mais detalhadas sobre o clima em tempo real
              </span>
            </header>
          </div>

          <div className="flex gap-4">
            <figure className="bg-primary/10 flex items-center justify-center text-primary rounded-sm p-2">
              <UsersIcon className="w-6 h-6" />
            </figure>

            <header className="flex flex-col">
              <h4 className="text-accent-foreground font-semibold">
                Voos em grupo
              </h4>
              <span className="text-sm text-muted-foreground">
                Crie um ambiente de voos em grupo com outros usuários PRO
              </span>
            </header>
          </div>

          <div className="flex gap-4">
            <figure className="bg-primary/10 flex items-center justify-center text-primary rounded-sm p-2">
              <RadioIcon className="w-6 h-6" />
            </figure>

            <header className="flex flex-col">
              <h4 className="text-accent-foreground font-semibold">
                Widgets para transmissão
              </h4>
              <span className="text-sm text-muted-foreground">
                Detalhes do seu voo em tempo real para utilizar em transmissões
              </span>
            </header>
          </div>

          <div className="flex gap-4">
            <figure className="bg-primary/10 flex items-center justify-center text-primary rounded-sm p-2">
              <GalleryHorizontalEnd className="w-6 h-6" />
            </figure>

            <header className="flex flex-col">
              <h4 className="text-accent-foreground font-semibold">
                Skyscope Recap
              </h4>
              <span className="text-sm text-muted-foreground">
                Receba um resumo semanal de todos os seus voos e estatísticas
                para compartilhar com amigos
              </span>
            </header>
          </div>

          <div className="flex gap-4">
            <figure className="bg-primary/10 flex items-center justify-center text-primary rounded-sm p-2">
              <BriefcaseIcon className="w-6 h-6" />
            </figure>

            <header className="flex flex-col">
              <h4 className="text-accent-foreground font-semibold">
                Modo carreira
              </h4>
              <span className="text-sm text-muted-foreground">
                Desafie-se com objetivos e recompensas exclusivas
              </span>
            </header>
          </div>

          <div className="flex gap-4">
            <figure className="bg-primary/10 flex items-center justify-center text-primary rounded-sm p-2">
              <MoonStarIcon className="w-6 h-6" />
            </figure>

            <header className="flex flex-col">
              <h4 className="text-accent-foreground font-semibold">
                Modo escuro
              </h4>
              <span className="text-sm text-muted-foreground">
                Desafie-se com objetivos e recompensas exclusivas
              </span>
            </header>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center gap-6 w-full max-w-sm mx-auto text-center p-4 rounded-lg">
        <header className="flex flex-col items-center gap-1">
          <h3 className="text-foreground font-bold text-2xl">
            Pronto para o futuro?
          </h3>
          <span className="text-sm text-muted-foreground w-3/4">
            Desbloqueie recursos exclusivos para melhorar sua experiência.
          </span>
        </header>

        <Button variant="default" className="w-fit">
          <CrownIcon className="w-4 h-4 mr-2" />
          Assinar Skyscope Pro
        </Button>
      </section>
    </>
  );
}
