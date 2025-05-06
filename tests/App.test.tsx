import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import App from "../src/App";

describe("Rendering Test", () => {
  test("Should use className, not class.", async () => {
    render(<App />);

    const today = new Date();

    function formatDate(date: Date) {
      return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
    }

    const element = screen.getByText(
      `Hello, Alice! Today is ${formatDate(today)}.`
    );

    expect(element).toBeInTheDocument();
  });
});
