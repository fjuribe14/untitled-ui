"use client";

import { z } from "zod";
import {
  Form,
  FormItem,
  FormField,
  FormControl,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { CircleHelp } from "lucide-react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";

const FormSchema = z.object({
  email: z.string().min(2, {
    message: "email must be at least 2 characters.",
  }),
});

export function HeroForm({ className }: { className?: string }) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: { email: "" },
  });
  return (
    <Form {...form}>
      <form onSubmit={() => null} className={cn("text-start w-full space-y-6", className)}>
        <FormField
          name="email"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="flex w-full max-w-sm items-center space-x-2">
                  <div className="flex relative w-full">
                    <Input
                      {...field}
                      type="email"
                      className="flex-1"
                      placeholder="Enter your email"
                    />

                    <Button type="button" className="absolute right-0" disabled variant="link">
                      <CircleHelp />
                    </Button>
                  </div>
                  <Button type="submit" variant={"primary"}>
                    Get started
                  </Button>
                </div>
              </FormControl>
              <FormDescription className="text-sm text-neutral-300">
                We care about your data in our <span className="underline">privacy policy</span>.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
