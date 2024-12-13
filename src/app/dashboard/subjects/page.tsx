import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Dashboard() {
  const subjects = [
    {
      id: 1,
      name: "Mathematics",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptatibus.",
      quizes: 4,
      assignments: 3,
      lessonPlans: 2,
      presentations: 1,
    },
    {
      id: 2,
      name: "Science",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptatibus.",
      quizes: 4,
      assignments: 3,
      lessonPlans: 2,
      presentations: 1,
    },
    {
      id: 3,
      name: "English",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptatibus.",
      quizes: 4,
      assignments: 3,
      lessonPlans: 2,
      presentations: 1,
    },
  ];
  return (
    <section className="grid grid-cols-1 gap-2 p-2 lg:grid-cols-2 xl:grid-cols-3">
      {subjects.map((subject) => SubjectCard({ subject }))}
      {subjects.map((subject) => SubjectCard({ subject }))}
      {subjects.map((subject) => SubjectCard({ subject }))}
    </section>
  );
}

type Subject = {
  id: number;
  name: string;
  description: string;
  quizes: number;
  assignments: number;
  lessonPlans: number;
  presentations: number;
};

const SubjectCard = ({ subject }: { subject: Subject }) => {
  return (
    <Card className="pt-3">
      <CardHeader>
        <CardTitle className="text-2xl">{subject.name}</CardTitle>
        <CardDescription>{subject.description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <span>Quizzes: {subject.quizes}</span>
        <span>Assignments: {subject.assignments}</span>
        <span>Lesson Plans: {subject.lessonPlans}</span>
        <span>Presentations: {subject.presentations}</span>
      </CardFooter>
    </Card>
  );
};
