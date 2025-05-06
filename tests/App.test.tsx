import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
// import App from "../src/App";
import Avatar from "../src/components/Avatar";

describe("Rendering Test", () => {
  test("renders the Avatar component with default size if size prop is not provided", () => {
    const person = {
      name: "Test User",
      imageId: "testId",
      imgSrc: "http://example.com/test.jpg",
    };

    render(<Avatar person={person} />);

    const avatarElement = screen.getByAltText("Test User");

    expect(avatarElement).toHaveAttribute("width", "100");
    expect(avatarElement).toHaveAttribute("height", "100");
  });

  test("renders the Avatar component with the specified size", () => {
    const person = {
      name: "Test User",
      imageId: "testId",
      imgSrc: "http://example.com/test.jpg",
    };

    render(<Avatar person={person} size={200} />);

    const avatarElement = screen.getByAltText("Test User");

    expect(avatarElement).toHaveAttribute("width", "200");
    expect(avatarElement).toHaveAttribute("height", "200");
  });

  test("renders the Avatar component with the correct alt text", () => {
    const person = {
      name: "Test User",
      imageId: "testId",
      imgSrc: "http://example.com/test.jpg",
    };

    render(<Avatar person={person} />);

    const avatarElement = screen.getByAltText("Test User");

    expect(avatarElement).toBeInTheDocument();
  });

  test("renders the Avatar component with the correct src", () => {
    const person = {
      name: "Test User",
      imageId: "testId",
      imgSrc: "http://example.com/test.jpg",
    };

    render(<Avatar person={person} />);

    const avatarElement = screen.getByAltText("Test User");

    expect(avatarElement).toHaveAttribute("src", "http://example.com/test.jpg");
  });
});
