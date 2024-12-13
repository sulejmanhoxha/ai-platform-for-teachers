"use client";

import { authClient } from "@/lib/auth-client";

export default function ProfilePage() {
  const { data: session, isPending, error } = authClient.useSession();

  const stats = [
    {
      title: "Subjects",
      value: 8,
    },
    {
      title: "Quizzes",
      value: 10,
    },
    {
      title: "Assignments",
      value: 12,
    },
    {
      title: "Lesson Plans",
      value: 14,
    },
    {
      title: "Presentations",
      value: 16,
    },
  ];

  return (
    <div className="py-20">
      <img
        src="https://github.com/creativetimofficial/soft-ui-dashboard-tailwind/blob/main/build/assets/img/team-2.jpg?raw=true"
        className="mx-auto block max-w-[150px] rounded-full border-none"
      />

      <h3 className="mb-2 mt-4 text-center text-2xl font-bold leading-normal">
        {session?.user.name}
      </h3>

      <div className="mt-6 flex justify-center">
        {stats.map((stat) => (
          <Stat key={stat.title} {...stat} />
        ))}
      </div>
    </div>
  );
}

const Stat = ({ title, value }: { title: string; value: number }) => {
  return (
    <>
      <div className="p-3 text-center">
        <span className="block text-xl font-bold uppercase tracking-wide">
          {value}
        </span>
        <span className="text-sm">{title}</span>
      </div>
    </>
  );
};
