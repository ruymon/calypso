"use client"

import { Button, buttonVariants } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"
import { useForm } from "react-hook-form"
import * as z from "zod"

const forgotPasswordFormSchema = z.object({
  email: z.string().email(),
})

export function ForgotPasswordForm() {
  const form = useForm<z.infer<typeof forgotPasswordFormSchema>>({
    resolver: zodResolver(forgotPasswordFormSchema),
    defaultValues: {
      email: "",
    },
  })

  function onSubmit(values: z.infer<typeof forgotPasswordFormSchema>) {
    // TODO: Implement.
    console.log(values)
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
                  placeholder="Email"
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
          <Button type="submit">Reset password</Button>
          <Link href="/auth/login" className={buttonVariants({ variant: "link", className: "text-xs" })}>Back to login</Link>
        </div>
      </form>
    </Form>
  )
}