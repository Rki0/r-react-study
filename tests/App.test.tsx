import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import App from "../src/App";

describe("Rendering Test", () => {
  test("Initial Rendering", () => {
    render(<App />);

    expect(screen.getByText("Apple (1)")).toBeInTheDocument();
    expect(screen.getByText("Banana (3)")).toBeInTheDocument();
    expect(screen.getByText("Orange (2)")).toBeInTheDocument();
  });

  test('When the user clicks the "+" button of specific merchandise, the number of it will increase by 1', () => {
    render(<App />);

    const appleItem = screen.getByText("Apple (1)");
    const appleButton = appleItem.querySelector("button") as HTMLElement;
    fireEvent.click(appleButton);

    expect(screen.getByText("Apple (2)")).toBeInTheDocument();
    expect(screen.getByText("Banana (3)")).toBeInTheDocument();
    expect(screen.getByText("Orange (2)")).toBeInTheDocument();
  });

  test(
    "If the user clicks the " +
      " buttons on multiple merchandise items, the number of selected items will increase correctly.",
    () => {
      render(<App />);

      const appleItem = screen.getByText("Apple (1)");
      const bananaItem = screen.getByText("Banana (3)");
      const orangeItem = screen.getByText("Orange (2)");

      const appleButton = appleItem.querySelector("button") as HTMLElement;
      const bananaButton = bananaItem.querySelector("button") as HTMLElement;
      const orangeButton = orangeItem.querySelector("button") as HTMLElement;

      fireEvent.click(appleButton);
      fireEvent.click(bananaButton);
      fireEvent.click(bananaButton);
      fireEvent.click(orangeButton);

      expect(screen.getByText("Apple (2)")).toBeInTheDocument();
      expect(screen.getByText("Banana (5)")).toBeInTheDocument();
      expect(screen.getByText("Orange (3)")).toBeInTheDocument();
    }
  );
});
