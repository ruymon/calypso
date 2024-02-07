"use client"

import { Button, buttonVariants } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useScopedI18n } from "@/locales/client"
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"
import { useForm } from "react-hook-form"
import * as z from "zod"

const forgotPasswordFormSchema = z.object({
  email: z.string().email(),
})

export function ForgotPasswordForm() {
  const t = useScopedI18n('auth.forgotPassword');

  const form = useForm<z.infer<typeof forgotPasswordFormSchema>>({
    resolver: zodResolver(forgotPasswordFormSchema),
    defaultValues: {
      email: "",
    },
  })

  async function onSubmit(values: z.infer<typeof forgotPasswordFormSchema>) {
    // TODO: Implement send password reset email
    // try {
    //   await sendPasswordResetEmail(firebaseAuth, values.email)
    // } catch (error) {
    //   console.error(error)
    // }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
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
          <Button type="submit">{t('sendEmail')}</Button>
          <Link href="/auth/login" className={buttonVariants({ variant: "link", className: "text-xs" })}>{t('backToLogin')}</Link>
        </div>
      </form>
    </Form>
  )
}