import Image from "next/image";

interface EventDetailsPageProps {}

export default function EventDetailsPage({}: EventDetailsPageProps) {
  return (
    <main className="z-10 flex h-screen max-w-lg flex-1 flex-col overflow-y-auto bg-background">
      <header className="flex- relative flex flex-col gap-2 bg-gradient-to-t from-background via-background/90 to-transparent p-6 pt-24">
        <h2 className="text-4xl font-bold">Lapland x-mas fly-in</h2>
        <span className="text-muted-foreground">
          Fly into the enchanting Lapland airports and experience the thrill of
          North-Wind, Snow, and the mesmerizing Northern Lights!
        </span>

        <Image
          src="https://media.discordapp.net/attachments/751056678732038254/1178670124765544551/Lapland_1.png?ex=65eef598&is=65dc8098&hm=636d16e9f3c48df6a7d9e3b291829e203bd15fbabeacbb26035b85e5568d975a"
          fill
          alt="Event banner image"
          className="-z-10 max-h-56 w-full object-cover"
        />
      </header>
    </main>
  );
}
