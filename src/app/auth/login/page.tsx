import { LoginForm } from "@/components/app/auth/login-form";
import { buttonVariants } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Login",
};

interface LoginPageProps { };

export default function LoginPage({ }: LoginPageProps) {
  return (
    <>
      <header className="flex flex-col mb-6">
        <h1 className="font-bold text-lg text-secondary-foreground">Login</h1>
        <span className="text-sm text-muted-foreground">Enter your details bellow</span>
      </header>

      <LoginForm />

      <Link href="/auth/join" className={buttonVariants({ variant: 'outline', className: 'flex-col gap-0.5' })}>
        <span className="text-xs">No account?</span>
        <span className="text-sm font-medium text-accent-foreground">Join now</span>
      </Link>
    </>
  )
};
