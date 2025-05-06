import Avatar from "./components/Avatar";

interface Person {
  name: string;
  imageId: string;
  imgSrc: string;
}

function App() {
  const scientist: Person = {
    name: "Gregorio Y. Zara",
    imageId: "7vQD0fPs",
    imgSrc: "http://localhost:3000",
  };

  // TODO: Pass proper props.
  return <Avatar />;
}

export default App;
