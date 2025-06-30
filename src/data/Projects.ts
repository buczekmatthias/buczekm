import { getProjectStackContent, type StackItem } from "@/data/Stack.ts";

const getProjects = () =>
  <
    {
      name: string;
      description: string;
      links: { github: string; website: string };
      stack: StackItem[];
    }[]
  >[
    {
      name: "dottopic",
      description: "Blog application limiting posting articles to limited users. Full CRUDs and admin management.",
      links: {
        github: "https://github.com/buczekmatthias/dottopic",
        website: "",
      },
      stack: getProjectStackContent(["laravel", "vue", "tailwind", "inertia", "postgresql", "git"]),
    },
    {
      name: "MemoryDazzle",
      description: "Social media platform application allowing following users, posting text and files, reacting and commenting to posts and grouping them",
      links: {
        github: "https://github.com/buczekmatthias/MemoryDazzle",
        website: "",
      },
      stack: getProjectStackContent(["laravel", "vue", "tailwind", "inertia", "postgresql", "git"]),
    },
    {
      name: "Card tracker",
      description: "Card tracker for The Tower mobile game, based on previously made unmaintained stylesheet",
      links: {
        github: "https://github.com/buczekmatthias/card-tracker",
        website: "https://tower-card-tracker.vercel.app/",
      },
      stack: getProjectStackContent(["vue", "tailwind", "git"]),
    },
    {
      name: "Lab speedup calc",
      description: "Lab speed-up calculator for The Tower mobile game",
      links: {
        github: "https://github.com/buczekmatthias/lab-speedup-calc",
        website: "https://tower-lab-speedup-calc.vercel.app/",
      },
      stack: getProjectStackContent(["vue", "tailwind", "git"]),
    },
    {
      name: "Tower module tracker",
      description: "Module tracker for The Tower mobile game",
      links: {
        github: "https://github.com/buczekmatthias/tower-module-tracker",
        website: "https://tower-module-tracker.vercel.app/",
      },
      stack: getProjectStackContent(["vue", "tailwind", "git"]),
    },
  ];

export { getProjects };
