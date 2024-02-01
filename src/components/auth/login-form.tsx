"use client"

import { Button, buttonVariants } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useScopedI18n } from "@/locales/client"
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"
import { useForm } from "react-hook-form"
import * as z from "zod"

const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

export function LoginForm() {
  const t = useScopedI18n('auth.login');

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  function onSubmit(values: z.infer<typeof loginFormSchema>) {
    // TODO: Implement.
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
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

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input 
                    type="password" 
                    placeholder={t("password")}
                    autoComplete="current-password"
                    autoCapitalize="none"
                    autoCorrect="off" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-col gap-1">
          <Button type="submit">{t('signIn')}</Button>
          <Link href="/auth/forgot-password" className={buttonVariants({ variant: "link", className: "text-xs" })}>{t('forgotPassword')}</Link>
        </div>
      </form>
    </Form>
  )
}