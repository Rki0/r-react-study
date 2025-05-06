import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Item from "../src/components/Item";

describe("Rendering Test", () => {
  test("Render only the name property when the isPacked is false.", () => {
    render(<Item isPacked={false} name="No Name" />);

    const element = screen.getByText("No Name");

    expect(element).toBeInTheDocument();
  });

  test("Render the name property and check icon when the isPacked is true.", () => {
    render(<Item isPacked={true} name="No Name" />);

    const element = screen.getByText("No Name ✅");

    expect(element).toBeInTheDocument();
  });
});
