import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import App from "../src/App";

describe("Rendering Test", () => {
  test("App should render Greeting", () => {
    render(<App />);

    const element = screen.getByText("Hello, World!");
    expect(element).toBeInTheDocument();
  });
});
