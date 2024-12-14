"use client";

import { toast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  title: z.string().min(1).max(100),
  description: z.string().min(1).max(300).optional(),
  duration: z.number().min(1).max(24),
  additional_instructions: z.string().min(1).max(1000).optional(),
});

export default function LessonPlanCreatePage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values);
      toast({
        description: (
          <pre className="mt-2 w-[340px] rounded-md p-4">
            <code className="text-white">
              {JSON.stringify(values, null, 2)}
            </code>
          </pre>
        ),
      });
    } catch (error) {
      toast({
        title: "Failed to submit the form. Please try again.",
        variant: "destructive",
      });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto max-w-sm space-y-8 px-4 py-10"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input
                  placeholder="FIST 2018 lesson plan"
                  type="text"
                  {...field}
                />
              </FormControl>
              <FormDescription>The title of this lesson plan.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="The lesson plan for the year 2022 of this subject."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Something that describes this lesson plan.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="duration"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Duration</FormLabel>
              <FormControl>
                <Input placeholder="" type="number" {...field} />
              </FormControl>
              <FormDescription>
                Choose the number of months the subject is taught.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="additional_instructions"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Additional instructions</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Ignore this and this chapter. The exam is 40 points, homework 20 points ..."
                  className="min-h-48"
                  {...field}
                  required={false}
                />
              </FormControl>
              <FormDescription>
                Give the AI model additional instructions to create a better
                output.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
