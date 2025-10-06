import { getProjectStackContent, type StackItem } from "@/data/Stack.ts";

export interface ProjectType {
  name: string;
  description: string;
  links: { github: string; website: string };
  images: string[];
  stack: StackItem;
}

export const projects: ProjectType[] = [
  {
    name: "dottopic",
    description: "Blog application limiting posting articles to limited users. Full CRUDs and admin management.",
    links: {
      github: "https://github.com/buczekmatthias/dottopic",
      website: "",
    },
    images: [],
    stack: getProjectStackContent(["laravel", "vue", "tailwindcss", "inertiajs", "postgresql", "git"]),
  },
  {
    name: "MemoryDazzle",
    description: "Social media platform application allowing following users, posting text and files, reacting and commenting to posts and grouping them",
    links: {
      github: "https://github.com/buczekmatthias/MemoryDazzle",
      website: "",
    },
    images: [],
    stack: getProjectStackContent(["laravel", "vue", "tailwindcss", "inertiajs", "postgresql", "git"]),
  },
  // {
  //   name: "Card tracker",
  //   description: "Card tracker for TheTower mobile game",
  //   links: {
  //     github: "https://github.com/buczekmatthias/card-tracker",
  //     website: "https://tower-card-tracker.vercel.app/",
  //   },
  //   images: ["stats.png", "tracker.png", "tracker_slots.png", "tracker_card.png", "presets.png", "share.png"],
  //   stack: getProjectStackContent(["vue", "tailwindcss", "git"]),
  // },
  // {
  //   name: "Lab speedup calc",
  //   description: "Lab speed-up calculator for TheTower mobile game",
  //   links: {
  //     github: "https://github.com/buczekmatthias/lab-speedup-calc",
  //     website: "https://tower-lab-speedup-calc.vercel.app/",
  //   },
  //   images: ["app.png"],
  //   stack: getProjectStackContent(["vue", "tailwindcss", "git"]),
  // },
  // {
  //   name: "Tower module tracker",
  //   description: "Module tracker for TheTower mobile game",
  //   links: {
  //     github: "https://github.com/buczekmatthias/tower-module-tracker",
  //     website: "https://tower-module-tracker.vercel.app/",
  //   },
  //   images: ["modules.png", "bonuses.png", "share.png"],
  //   stack: getProjectStackContent(["vue", "tailwindcss", "git"]),
  // },
];
