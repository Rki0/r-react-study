const name = "Alice";

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
}

function App() {
  const today = new Date();

  // TODO: Hello, Alice! Today is Thursday.
  return <h1>Hello, ! Today is .</h1>;
}

export default App;
