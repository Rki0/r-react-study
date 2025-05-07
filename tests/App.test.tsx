import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import App from "../src/App";

describe("Rendering Test", () => {
  test("Should display 0 at the initial rendering.", () => {
    render(<App />);
    expect(screen.getByText("Score: 0")).toBeInTheDocument();
  });

  test('If the user clicks the "+1" button, the score should increase by 1.', () => {
    render(<App />);

    const plusOneButton = screen.getByRole("button", { name: "+1" });
    const scoreHeading = screen.getByText("Score: 0");

    fireEvent.click(plusOneButton);

    expect(scoreHeading).toHaveTextContent("Score: 1");
  });

  test('If the user clicks the "+3" button, the score should increase by 3.', () => {
    render(<App />);
    const plusThreeButton = screen.getByRole("button", { name: "+3" });
    const scoreHeading = screen.getByText("Score: 0");

    fireEvent.click(plusThreeButton);

    expect(scoreHeading).toHaveTextContent("Score: 3");
  });

  test("When the '+1' and '+3' buttons are clicked multiple times, the score accumulates correctly.", () => {
    render(<App />);

    const plusOneButton = screen.getByRole("button", { name: "+1" });
    const plusThreeButton = screen.getByRole("button", { name: "+3" });
    const scoreHeading = screen.getByText("Score: 0");

    fireEvent.click(plusOneButton);
    fireEvent.click(plusThreeButton);
    fireEvent.click(plusOneButton);
    fireEvent.click(plusThreeButton);

    expect(scoreHeading).toHaveTextContent("Score: 8");
  });
});
