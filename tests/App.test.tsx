import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import App from "../src/App";

interface People {
  id: number;
  family_name: string;
  given_name: string;
  occupation: string;
}

const mockPeople: People[] = [
  {
    id: 1,
    family_name: "Pak",
    given_name: "Kiyoung",
    occupation: "Software Engineer",
  },
  {
    id: 2,
    family_name: "Horibe",
    given_name: "Sakiho",
    occupation: "Software Engineer",
  },
  {
    id: 3,
    family_name: "Toki",
    given_name: "Marina",
    occupation: "Software Engineer",
  },
];

describe("Rendering Test", () => {
  test("should use li tag", () => {
    render(<App />);

    const listItems = screen.getAllByRole("listitem");

    expect(listItems.length).toBe(mockPeople.length);
  });
});
