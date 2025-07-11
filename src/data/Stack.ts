export interface StackItem {
  [key: string]: string;
}

const INCREMENT_LIMIT_VALUE: number = 4;

const stack: { [key: string]: StackItem } = {
  Frontend: {
    TypeScript: "simple-icons:typescript",
    JavaScript: "simple-icons:javascript",
    TailwindCSS: "simple-icons:tailwindcss",
    Vue: "simple-icons:vuedotjs",
    InertiaJS: "simple-icons:inertia",
    HTML: "simple-icons:html5",
    CSS: "simple-icons:css3",
  },
  Backend: {
    Laravel: "simple-icons:laravel",
    Symfony: "simple-icons:symfony",
    PHP: "simple-icons:php",
    PostgreSQL: "simple-icons:postgresql",
    MySQL: "simple-icons:mysql",
    SQLite: "simple-icons:sqlite",
  },
  Tools: {
    Git: "simple-icons:git",
    VSCode: "simple-icons:visualstudiocode",
  },
};

const getStack = (): { [key: string]: string } => Object.assign({}, ...Object.values(stack).map((group) => group));

const getProjectStackContent = (stack: string[]): StackItem => Object.fromEntries(Object.entries(getStack()).filter(([key, value]) => stack.includes(key.toLocaleLowerCase())));

const getGroupLength = (group: string): number => Object.keys(stack[group]).length;

const getRemainingItems = (group: string): number => {
  const diff = getGroupLength(group) - INCREMENT_LIMIT_VALUE;

  return diff < 0 ? 0 : diff;
};

const getEntries = (group: string, showAll: boolean = false): StackItem => {
  const entries = Object.entries(stack[group]).slice(0, showAll ? getGroupLength(group) : INCREMENT_LIMIT_VALUE);
  return Object.fromEntries(entries);
};

export { stack, getProjectStackContent, getRemainingItems, getEntries };
