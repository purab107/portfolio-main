import { Badge } from "@/components/ui/badge";

const skillGroups = [
  {
    label: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "C", "C++", "SQL"],
  },
  {
    label: "Frontend / Mobile",
    skills: ["React Native", "Expo", "Next.js", "Angular", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "Express.js", "ASP.NET", "REST APIs", "Socket.IO"],
  },
  {
    label: "Database / ORM",
    skills: ["PostgreSQL", "Prisma ORM", "SQL Server", "Firebase"],
  },
  {
    label: "Tools",
    skills: ["Git", "GitHub", "Postman", "Cloudinary", "Razorpay", "VS Code"],
  },
  {
    label: "Research",
    skills: ["TensorFlow", "EfficientNet-B3", "Computer Vision", "Deep Learning"],
  },
];

export function Skills() {
  return (
    <section className="flex flex-col gap-4 pb-8">
      <h2 className="text-sm font-semibold text-zinc-50">Skills &amp; Technologies</h2>
      <div className="flex flex-col gap-3">
        {skillGroups.map(({ label, skills }) => (
          <div key={label} className="flex flex-col gap-1.5">
            <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-600">
              {label}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  variant={label === "Research" ? "outline" : "default"}
                  className="text-[11px] cursor-default"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
