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

    expect(screen.getByText("TP Docker Swarm")).toBeInTheDocument();
  });

  it("appelle le backend et affiche le message avec l'instance", async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            message: "Bonjour depuis le backend Docker",
            instance: "backend-container-test",
          }),
      })
    );

    render(<App />);

    await userEvent.click(screen.getByText("Appeler le backend"));

    expect(await screen.findByTestId("backend-message")).toHaveTextContent(
      "Bonjour depuis le backend Docker"
    );
    expect(screen.getByTestId("backend-message")).toHaveTextContent(
      "backend-container-test"
    );
  });
});
