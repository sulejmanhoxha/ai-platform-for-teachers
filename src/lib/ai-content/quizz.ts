"use server";

import { TQuizzForm } from "@/app/dashboard/subjects/[subjectId]/(ai-content)/quizz/page";
// import { openai } from "@/lib/openai";
import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";

const model = openai("gpt-4o-mini");

export async function generateQuizzAction(data: TQuizzForm) {
  const { text } = await generateText({
    model,
    system:
      "You are an expert at creating mathematics quizzes for teachers. " +
      "Follow these detailed instructions when generating a quiz: " +
      "- The difficulty level will range from 1 (very easy) to 5 (very hard). " +
      "- The quiz will include between 3 and 7 questions, as specified in the prompt. " +
      "- A chapter may be provided to focus on specific topics; if not specified, create questions about general mathematics. " +
      "- Include a mix of True/False and Multiple-Choice questions. " +
      "- For True/False questions, present the statement as text followed by exactly two options: 'True' and 'False' on separate lines. " +
      "- For Multiple-Choice questions, list the options (e.g., A, B, C, D) as individual items. Ensure only one correct answer. " +
      "- Write the questions as H3 headers without numbering (e.g., do not use 'Question 1'). " +
      "- Separate each question with a horizontal rule (***). " +
      "- At the end of the quiz, provide the solutions in the same order as the questions." +
      "Respond using markdown only.",
    prompt: `Difficulty: ${data.difficulty}, Number of questions: ${data.number_of_questions}, Chapter: ${data.chapter}`,
  });

  return text;
}
