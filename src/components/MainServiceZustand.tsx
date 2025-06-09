import { useThemeStore } from "../store/ThemeStore";

interface Item {
  id: number;
  name: string;
  section: "B" | "C";
  role: "dev";
}

const items: Item[] = [
  {
    id: 1,
    name: "Kiyoung",
    section: "C",
    role: "dev",
  },
  {
    id: 2,
    name: "Saki",
    section: "C",
    role: "dev",
  },
  {
    id: 3,
    name: "Marina",
    section: "B",
    role: "dev",
  },
];

function MainServiceZustand() {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);

  return (
    <main>
      <h1>hello</h1>

      <p>This is {isDarkMode ? "Dark Mode" : "Light Mode"}</p>

      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              <p>{item.name}</p>
              <p>{item.section}</p>
              <p>{item.role}</p>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default MainServiceZustand;
