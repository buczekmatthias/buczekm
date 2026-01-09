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
    name: "GameSphere",
    description: "A template for community-driven platform where gamers can review games, discover new titles, track progress on upcoming games and discuss about games.",
    links: {
      github: "https://github.com/buczekmatthias/GameSphere",
      website: "",
    },
    images: ["homepage.png", "dashboard.png", "game.png", "discussion.png", "user_profile.png"],
    stack: getProjectStackContent(["laravel", "vue", "inertiajs", "tailwindcss", "typescript", "postgresql", "git"]),
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
];
