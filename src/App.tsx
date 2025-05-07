import { useState } from "react";

function App() {
  // TODO: Implement click event handler to show longText.

  const shortText = "This is short text.";
  const longText = "This is long text. lorem ipsum";

  return (
    <div>
      <p>{shortText}</p>

      {/* TODO: If the longText is displayed, the button text should be "Hide". */}
      {/* NOTE: Toggle Button */}
      <button>Show</button>
    </div>
  );
}

export default App;
