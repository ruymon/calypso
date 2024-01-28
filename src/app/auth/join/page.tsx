import { JoinForm } from "@/components/app/auth/join-form";
import { buttonVariants } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Join",
};

interface JoinPageProps { };

export default function JoinPage({ }: JoinPageProps) {
  return (
    <>
      <header className="flex flex-col mb-6">
        <h1 className="font-bold text-lg text-secondary-foreground">Join</h1>
        <span className="text-sm text-muted-foreground">Enter your details bellow</span>
      </header>

      <JoinForm />

      <Link href="/auth/login" className={buttonVariants({ variant: 'outline', className: 'flex-col gap-0.5' })}>
        <span className="text-xs">Have an account?</span>
        <span className="text-sm font-medium text-accent-foreground">Login</span>
      </Link>
    </>
  );
};
