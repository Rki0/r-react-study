import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import App from "../src/App";

const name = "Kiyoung Park";
const email = "kiyoung.park@email.com";

const newName = "Hello";
const newEmail = "kiyoung.park@test.com";

describe("Rendering Test", () => {
  test("Should display default user info at initial rendering.", () => {
    render(<App />);

    expect(screen.getByDisplayValue(name)).toBeInTheDocument();
    expect(screen.getByDisplayValue(email)).toBeInTheDocument();
    expect(
      screen.getByText(`Inputted Info: ${name} (${email})`)
    ).toBeInTheDocument();
  });

  test("When the user update the name field, UI also will be updated.", () => {
    render(<App />);

    const nameInput = screen.getByLabelText("Name:");
    const infoParagraph = screen.getByText(`Inputted Info: ${name} (${email})`);

    fireEvent.change(nameInput, { target: { value: newName } });

    expect(nameInput).toHaveValue(newName);
    expect(infoParagraph).toHaveTextContent(
      `Inputted Info: ${newName} (${email})`
    );
  });

  test("When the user update the email field, UI also will be updated.", () => {
    render(<App />);

    const emailInput = screen.getByLabelText("E-mail:");
    const infoParagraph = screen.getByText(`Inputted Info: ${name} (${email})`);

    fireEvent.change(emailInput, {
      target: { value: newEmail },
    });

    expect(emailInput).toHaveValue(newEmail);
    expect(infoParagraph).toHaveTextContent(
      `Inputted Info: ${name} (${newEmail})`
    );
  });

  test("When the user update both name field and email field, UI also will be updated.", () => {
    render(<App />);

    const nameInput = screen.getByLabelText("Name:");
    const emailInput = screen.getByLabelText("E-mail:");
    const infoParagraph = screen.getByText(`Inputted Info: ${name} (${email})`);

    fireEvent.change(nameInput, { target: { value: newName } });
    fireEvent.change(emailInput, {
      target: { value: newEmail },
    });

    expect(nameInput).toHaveValue(newName);
    expect(emailInput).toHaveValue(newEmail);
    expect(infoParagraph).toHaveTextContent(
      `Inputted Info: ${newName} (${newEmail})`
    );
  });
});
