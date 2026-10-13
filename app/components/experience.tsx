import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const experiences = [
  {
    id: "hindustaan",
    role: "Full Stack Engineer",
    company: "Hindustaan Innovations Pvt. Ltd.",
    period: "July 2026 – Present",
    location: "Raipur, CG",
    bullets: [
      "Built Bhukkadh Rider app — food delivery rider workflows, GPS dispatch, OTP verification, earnings & wallet.",
      "Built Ghummakkadh Driver app — ride-hailing, live location, KYC onboarding, payout management.",
      "Built Miracal Chat & Business apps — real-time messaging, WebRTC calls, business analytics & catalog.",
      "Designed database schemas using Prisma ORM + PostgreSQL; contributed to backend API modifications.",
    ],
    tags: ["React Native", "Expo", "TypeScript", "Node.js", "Socket.IO", "PostgreSQL", "Prisma"],
  },
  {
    id: "skyvo",
    role: "Full Stack Web Development Trainee",
    company: "Skyvo Technologies Pvt. Ltd.",
    period: "May 2025 – July 2025",
    location: "Raipur, CG",
    bullets: [
      "Hands-on training in Angular, ASP.NET, SQL, and full-stack application development.",
      "Built industry-style projects following real-world development practices.",
      "Studied foundational AI/ML concepts through practical modules.",
    ],
    tags: ["Angular", "ASP.NET", "SQL", "TypeScript"],
  },
];

export function Experience() {
  return (
    <section className="flex flex-col gap-4 pb-8">
      <h2 className="text-sm font-semibold text-zinc-50">Experience</h2>
      <div className="flex flex-col gap-6">
        {experiences.map((exp, i) => (
          <div key={exp.id} className="flex flex-col gap-3">
            <div className="flex items-start justify-between gap-2">
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-medium text-zinc-200">
                  {exp.role}
                </span>
                <span className="text-xs text-zinc-500">
                  {exp.company} · {exp.location}
                </span>
              </div>
              <span className="text-xs text-zinc-600 whitespace-nowrap font-mono">
                {exp.period}
              </span>
            </div>
            <ul className="flex flex-col gap-1.5 pl-0">
              {exp.bullets.map((bullet, j) => (
                <li
                  key={j}
                  className="flex items-start gap-2 text-xs text-zinc-400 leading-relaxed"
                >
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-zinc-600 flex-shrink-0" />
                  {bullet}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-1.5">
              {exp.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-[10px]">
                  {tag}
                </Badge>
              ))}
            </div>
            {i < experiences.length - 1 && <Separator className="mt-2" />}
          </div>
        ))}
      </div>
    </section>
  );
}
