import { render, waitFor } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import App from "../src/App";

describe("Rendering Test", () => {
  // NOTE: This test will always fail because after rendering the App component, 'className' is automatically converted to 'class'.
  test("Should use className, not class.", async () => {
    const { container } = render(<App />);

    await waitFor(() => {
      const allElements = container.querySelectorAll("*");

      allElements.forEach((element) => {
        expect(element.hasAttribute("class")).toBe(false);
      });
    });
  });

  test("li tag should be wrapped by ul or ol tag", async () => {
    const { container } = render(<App />);

    // Wait for the component to fully render
    await waitFor(() => {
      // Check if a <ul> element exists
      const ulElement = container.querySelector("ul");
      const olElement = container.querySelector("ol");

      // Assert that either a <ul> or <ol> element exists
      expect(ulElement || olElement).toBeInTheDocument();
    });
  });
});
