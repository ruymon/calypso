"use client";

import { PiSpinnerStroke } from "@/components/icons";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { passwordReset } from "@/lib/auth";
import { useScopedI18n } from "@/locales/client";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

const forgotPasswordFormSchema = z.object({
  email: z.string().email(),
});

export type ForgotPasswordFormType = z.infer<typeof forgotPasswordFormSchema>;

export function ForgotPasswordForm() {
  const t = useScopedI18n("auth.forgotPassword");
  const router = useRouter();

  const form = useForm<ForgotPasswordFormType>({
    resolver: zodResolver(forgotPasswordFormSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(data: ForgotPasswordFormType) {
    try {
      await passwordReset(data);

      toast.success(t("resetEmailSent"), {
        description: t("resetEmailSentIfAccountIsValid"),
      });

      router.push("/auth/login");
    } catch (error) {
      toast.error(t("resetError"), {
        description: t("resetErrorDescription"),
      });
    }
  }

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
  } = form;

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-5"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder={t("email")}
                  type="email"
                  autoCapitalize="none"
                  autoComplete="email"
                  autoCorrect="off"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-col gap-1">
          <Button disabled={isSubmitting} type="submit">
            {isSubmitting ? (
              <PiSpinnerStroke className="w-4 animate-spin" />
            ) : (
              t("sendEmail")
            )}
          </Button>
          <Link
            href="/auth/login"
            className={buttonVariants({
              variant: "link",
              className: "text-xs",
            })}
          >
            {t("backToLogin")}
          </Link>
        </div>
      </form>
    </Form>
  );
}
