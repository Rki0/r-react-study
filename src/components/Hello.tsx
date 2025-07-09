import { useState } from "react";

function Hello() {
  const [isHello, setIsHello] = useState(false);

  const getHello = () => {
    console.log("re-evaluated");
    setIsHello(true);
  };

  console.log("re-render: Hello.tsx");

  return (
    <div>
      <h1>Hello</h1>

      <button onClick={getHello}>Are you hello?</button>

      {isHello && <div>You got a hello</div>}
    </div>
  );
}

export default Hello;
