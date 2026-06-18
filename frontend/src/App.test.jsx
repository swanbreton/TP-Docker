import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

afterEach(() => {
  vi.restoreAllMocks();
});

describe("App", () => {
  it("affiche le titre principal", () => {
    render(<App />);

    expect(screen.getByText("TP Docker Compose")).toBeInTheDocument();
  });

  it("appelle le backend et affiche le message", async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            message: "Bonjour depuis le backend Docker",
          }),
      })
    );

    render(<App />);

    await userEvent.click(screen.getByText("Appeler le backend"));

    expect(await screen.findByTestId("backend-message")).toHaveTextContent(
      "Bonjour depuis le backend Docker"
    );
  });
});