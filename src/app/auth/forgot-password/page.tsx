import { ForgotPasswordForm } from "@/components/app/auth/forgot-password-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forgot password",
};

interface ForgotPasswordPageProps { };

export default function ForgotPasswordPage({ }: ForgotPasswordPageProps) {
  return (
    <>
      <header className="flex flex-col mb-6">
        <h1 className="font-bold text-lg text-secondary-foreground">Password reset</h1>
        <span className="text-sm text-muted-foreground">Enter your details bellow</span>
      </header>

      <ForgotPasswordForm />
    </>
  );
};
