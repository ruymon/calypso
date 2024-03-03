import Balancer from "react-wrap-balancer";
import { GetStartedButton } from "./_components/get-started-button";

export default function Onboarding() {
  return (
    <>
      <header className="flex flex-col items-center text-center gap-1">
        <span className="w-fit bg-gradient-to-r mb-2 from-purple-300 to-indigo-400 bg-clip-text px-2 font-handwriting text-xl font-medium text-transparent">
          Get started
        </span>
        <Balancer as="h1" className="text-6xl font-extrabold text-foreground">Welcome to Skyscope</Balancer>
        <Balancer as="span" className="text-muted-foreground">
          We are excited to have you on board. Let's get you started with a few basic details.
        </Balancer>
      </header>

      <GetStartedButton />

    </>
  );  
};
