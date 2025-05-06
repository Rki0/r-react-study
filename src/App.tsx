interface People {
  id: number;
  family_name: string;
  given_name: string;
  occupation: string;
}

const people: People[] = [
  {
    id: 1,
    family_name: "Pak",
    given_name: "Kiyoung",
    occupation: "Software Engineer",
  },
  {
    id: 2,
    family_name: "Horibe",
    given_name: "Sakiho",
    occupation: "Software Engineer",
  },
  {
    id: 3,
    family_name: "Toki",
    given_name: "Marina",
    occupation: "Software Engineer",
  },
];

function App() {
  // TODO: Create an array to render li tag using people array.
  const listItems = 

  return <ul>{listItems}</ul>;
}

export default App;
