import { OrbitIcon } from "lucide-react";

interface NavbarProps {};

export function Navbar({}: NavbarProps) {
  return (
    <nav className="flex items-center justify-between h-16 bg-background/50 backdrop-blur-md w-full absolute top-0 right-0 z-10">
      <header className="flex items-center">
        <figure className="w-16 h-16 flex items-center justify-center relative overflow-clip">
          <div className="p-1.5 w-fit h-fit rounded-lg bg-primary flex items-center justify-center">
            <OrbitIcon className="w-8 h-8 text-primary-foreground" />
          </div>
        </figure>

        <span className="text-2xl leading-none h-6 text-secondary-foreground font-bold">Ground Control</span>
      </header>




    </nav>
  );
};
