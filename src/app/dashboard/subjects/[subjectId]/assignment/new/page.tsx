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
import { Slider } from "@/components/ui/slider";

const formSchema = z.object({
  title: z.string().min(1).max(100),
  description: z.string().min(1).max(300).optional(),
  difficulty: z.number().min(1).max(5),
  number_of_questions: z.number().min(1).max(5),
  chapter: z.string().min(1).max(100).optional(),
  number_of_assignments: z.number().min(1).max(5),
});

export default function CreateAssignmentPage() {
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
        className="mx-auto max-w-sm space-y-8 py-10"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input
                  placeholder="Mathematics Homework 1"
                  type="text"
                  {...field}
                />
              </FormControl>
              <FormDescription>Title of the assignment.</FormDescription>
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
                <Input
                  placeholder="Homework exercises for equasions."
                  type="text"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Something that describes this assignment.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="difficulty"
          render={({ field: { value, onChange } }) => (
            <FormItem>
              <FormLabel>Difficulty - {value}</FormLabel>
              <FormControl>
                <Slider
                  min={1}
                  max={5}
                  step={1}
                  defaultValue={[5]}
                  onValueChange={(vals) => {
                    onChange(vals[0]);
                  }}
                />
              </FormControl>
              <FormDescription>
                Adjust the difficulty of the assignment, from easy to hard.
                Minimun value is 1, maximum values is 5.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="number_of_questions"
          render={({ field: { value, onChange } }) => (
            <FormItem>
              <FormLabel>Number of questions - {value}</FormLabel>
              <FormControl>
                <Slider
                  min={1}
                  max={5}
                  step={1}
                  defaultValue={[5]}
                  onValueChange={(vals) => {
                    onChange(vals[0]);
                  }}
                />
              </FormControl>
              <FormDescription>
                Adjust the number of questions by sliding. Minimun value is 1,
                maximum values is 5.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="chapter"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Chapter</FormLabel>
              <FormControl>
                <Input placeholder="Equations" type="text" {...field} />
              </FormControl>
              <FormDescription>
                Specify to the AI model which chapter of the material should the
                assignment be about. If left blank, the assignment will be about
                the material in general.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="number_of_assignments"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Number of assignments</FormLabel>
              <FormControl>
                <Input placeholder="" type="number" {...field} />
              </FormControl>
              <FormDescription>
                Choose how many unique assignments you want (1 to 5). Each
                assignment will be different, so every student gets their own
                version. If you choose 1 then all the students will have the
                same assignment.
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
