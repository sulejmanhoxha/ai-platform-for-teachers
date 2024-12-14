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
  number_of_questions: z.number().min(3).max(7),
  chapter: z.string().min(1).max(100).optional(),
});

export default function MyForm() {
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
                <Input placeholder="Mathematics Quiz" type="text" {...field} />
              </FormControl>
              <FormDescription>Title of the quiz.</FormDescription>
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
                  placeholder="Quiz about the first chapter of the math book."
                  type="text"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Something that describes this quiz.
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
              <FormLabel>Price - {value}</FormLabel>
              <FormControl>
                <Slider
                  min={1}
                  max={5}
                  step={1}
                  defaultValue={[5]}
                  onValueChange={(vals: number[]) => {
                    onChange(vals[0]);
                  }}
                />
              </FormControl>
              <FormDescription>
                Adjust the difficulty of the quizz.
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
              <FormLabel>Price - {value}</FormLabel>
              <FormControl>
                <Slider
                  min={3}
                  max={7}
                  step={1}
                  defaultValue={[5]}
                  onValueChange={(vals) => {
                    onChange(vals[0]);
                  }}
                />
              </FormControl>
              <FormDescription>
                Adjust the number of questions by sliding.
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
                quiz be about. If left blank, the quiz will be about the
                material in general.
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
