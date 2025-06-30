export interface StackItem {
  name: string;
  icon: string;
}

const baseStack = () =>
  <StackItem[]>[
    {
      name: "Laravel",
      icon: "devicon:laravel",
    },
    {
      name: "Inertia",
      icon: "simple-icons:inertia",
    },
    {
      name: "TypeScript",
      icon: "devicon:typescript",
    },
    {
      name: "PostgreSQL",
      icon: "devicon:postgresql",
    },
    {
      name: "Vue",
      icon: "devicon:vuejs",
    },
    {
      name: "Tailwind",
      icon: "devicon:tailwindcss",
    },
  ];

const getStack = () =>
  <StackItem[]>[
    ...baseStack(),
    {
      name: "CSS",
      icon: "devicon:css3",
    },
    {
      name: "Git",
      icon: "devicon:git",
    },
    {
      name: "HTML",
      icon: "devicon:html5",
    },
    {
      name: "JavaScript",
      icon: "devicon:javascript",
    },
    {
      name: "MySQL",
      icon: "devicon:mysql",
    },
    {
      name: "PHP",
      icon: "devicon:php",
    },
    {
      name: "SQLite",
      icon: "devicon:sqlite",
    },
    {
      name: "Symfony",
      icon: "devicon:symfony",
    },
  ];

const getProjectStackContent = (stack: string[]) => getStack().filter((item) => stack.includes(item.name.toLocaleLowerCase()));

export { baseStack, getStack, getProjectStackContent };
