import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import App from "../src/App";

const shortText = "This is short text.";
const longText = "This is long text. lorem ipsum";

const showBtn = "Show";
const hideBtn = "Hide";

describe("Rendering Test", () => {
  test("shortText and Show button should be displayed at initial rendering phase", () => {
    render(<App />);

    expect(screen.getByText(shortText)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: showBtn })).toBeInTheDocument();
    expect(screen.queryByText(longText)).toBeNull();
  });

  test("When the user click the show button, the longText will be rendered and the button text will be Hide.", async () => {
    render(<App />);

    const button = screen.getByRole("button", { name: showBtn });
    fireEvent.click(button);

    expect(await screen.findByText(longText)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: hideBtn })).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: showBtn })).toBeNull();
  });

  test("When the user click the hide button, the shortText will be rendered and the button text will be Show.", async () => {
    render(<App />);

    const showButton = screen.getByRole("button", { name: showBtn });
    fireEvent.click(showButton);

    const hideButton = await screen.findByRole("button", { name: hideBtn });
    fireEvent.click(hideButton);

    expect(screen.getByRole("button", { name: showBtn })).toBeInTheDocument();
    expect(screen.queryByText(longText)).toBeNull();
    expect(screen.queryByRole("button", { name: hideBtn })).toBeNull();
  });
});
