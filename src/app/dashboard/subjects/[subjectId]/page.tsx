import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default async function SubjectDetailsPage({
  params,
}: {
  params: Promise<{ subjectId: string }>;
}) {
  const subjectId = (await params).subjectId;

  const quizzes = [
    {
      title: "Mathematics Quiz 1",
      description: "This is the description of the quiz 1.",
    },
    {
      title: "Mathematics Quiz 2",
      description: "This is the description of the quiz 2.",
    },
    {
      title: "Mathematics Quiz 3",
      description: "This is the description of the quiz 3.",
    },
    {
      title: "Mathematics Quiz 4",
      description: "This is the description of the quiz 4.",
    },
  ];

  const presentations = [
    {
      title: "Mathematics Presentation 1",
      description: "This is the description of the presentation 1.",
    },
    {
      title: "Mathematics Presentation 2",
      description: "This is the description of the presentation 2.",
    },
    {
      title: "Mathematics Presentation 3",
      description: "This is the description of the presentation 3.",
    },
    {
      title: "Mathematics Presentation 4",
      description: "This is the description of the presentation 4.",
    },
  ];

  const assignments = [
    {
      title: "Mathematics Assignment 1",
      description: "This is the description of the assignment 1.",
    },
    {
      title: "Mathematics Assignment 2",
      description: "This is the description of the assignment 2.",
    },
    {
      title: "Mathematics Assignment 3",
      description: "This is the description of the assignment 3.",
    },
    {
      title: "Mathematics Assignment 4",
      description: "This is the description of the assignment 4.",
    },
  ];

  const lessonPlans = [
    {
      title: "Mathematics Lesson Plan 1",
      description: "This is the description of the lesson plan 1.",
    },
    {
      title: "Mathematics Lesson Plan 2",
      description: "This is the description of the lesson plan 2.",
    },
    {
      title: "Mathematics Lesson Plan 3",
      description: "This is the description of the lesson plan 3.",
    },
    {
      title: "Mathematics Lesson Plan 4",
      description: "This is the description of the lesson plan 4.",
    },
  ];
  return (
    <Tabs defaultValue="account" className="min-h-full w-full">
      <TabsList className="grid h-fit w-full grid-cols-2 gap-2 sm:grid-cols-4">
        <TabsTrigger value="quizzes">Quizzes</TabsTrigger>
        <TabsTrigger value="presentations">Presentations</TabsTrigger>
        <TabsTrigger value="assignments">Assignments</TabsTrigger>
        <TabsTrigger value="lesson-plans">Lesson Plans</TabsTrigger>
      </TabsList>
      <TabsContent value="quizzes" className="px-4">
        <Table>
          <TableCaption>A list of your recent quizzes.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {quizzes.map((quizz, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{quizz.title}</TableCell>
                <TableCell>{quizz.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TabsContent>
    </Tabs>
  );
}
