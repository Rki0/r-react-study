import { useState } from "react";

function App() {
  const [user, setUser] = useState({
    name: "Kiyoung Park",
    email: "kiyoung.park@email.com",
  });

  function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    user.name = e.target.value;
  }

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    user.email = e.target.value;
  }

  return (
    <>
      <label>
        Name:
        <input value={user.name} onChange={handleNameChange} />
      </label>
      <br />
      <label>
        E-mail:
        <input value={user.email} onChange={handleEmailChange} />
      </label>

      <p>
        Inputted Info: {user.name} ({user.email})
      </p>
    </>
  );
}

export default App;
