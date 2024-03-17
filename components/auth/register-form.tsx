"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "../ui/input";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { RegisterSchema } from "../../schemas";
import { CardWrapper } from "./card-wrapper";
import { Button } from "../ui/button";
import { FormError } from "../form-error.tsx/form-error";
import { FormSuccess } from "../form-error.tsx/form-success";
import { register } from "../../actions/register";
import { useState, useTransition } from "react";

export const RegisterForm = () => {
const [error, setError] = useState<string | undefined>("");
const [success, setSuccess] = useState<string | undefined>("");


  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  const onSubmit = (values: z.infer<typeof RegisterSchema>) =>  {
    setError("");
    setSuccess("");

    startTransition(() => {
      register(values)
      .then ((data) => {
        setError(data.error);
        setSuccess(data.success)
      })
    });
  };
  // отправка данных пользователя в лог

  return (
    <CardWrapper
      headerLabel="Regestration"
      backButtonLabel="Bereits registriert?"
      backButtonHref="/auth/login"
      showSocial
    >
      <Form {...form}>
        <form 
        onSubmit={form.handleSubmit(onSubmit)} 
        className="space-y-6">

          <div className="space-y-4 m-3">

          <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="Till Lindemann"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />


            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="till.lindemann@example.com"
                      type="email"
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
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="******" type="password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button 
          disabled={isPending} 
          type="submit" 
          className="w-full">
            Registrieren
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
