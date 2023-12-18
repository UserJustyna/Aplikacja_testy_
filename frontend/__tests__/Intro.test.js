import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/react/dont-cleanup-after-each";
import "@testing-library/jest-dom";
import Intro from "../src/components/Intro";

jest.mock("node-fetch");

describe("Intro Component Authentication Tests", () => {
  describe("Given the user is on the registration page", () => {
    beforeEach(() => {
      render(<Intro />);
      fireEvent.click(screen.getByText("Zarejestruj się"));
    });

    it("When the user submits valid registration data, Then they should be redirected to the home page", async () => {
      // Given
      const registrationData = {
        name: "John",
        email: "john@example.com",
        password: "password123",
      };

      // Mock the response for registration
      global.fetch = jest.fn(() =>
        Promise.resolve({
          json: () =>
            Promise.resolve({
              token:
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6IkpvaG4iLCJ1c2VySWQiOiI2NTVhMGY0MGMwNTI2MmM3MThiZDIxZWQiLCJuYW1lIjoidGVzdEB0ZXN0LnBsIiwicm9sZSI6ImFkbWluIiwiaXNBZG1pbiI6dHJ1ZSwiYWNjZXNzIjoiYXV0aCIsImlhdCI6MTcwMjgyMTg0MiwiZXhwIjoxNzAyODMyNjQyfQ.OVdtWzw7GEaxXHO5dRsPhEQrayjIROJxkHoalAc1hqg",
            }),
        })
      );

      // When
      fireEvent.change(screen.getByLabelText(/Imię/i), {
        target: { value: registrationData.name },
      });
      fireEvent.change(screen.getByLabelText(/E-mail/i), {
        target: { value: registrationData.email },
      });
      fireEvent.change(screen.getByLabelText(/Hasło/i), {
        target: { value: registrationData.password },
      });
      fireEvent.click(screen.getByText("Zarejestruj się"));

      // Then
      await waitFor(() => {
        expect(screen.getByText("REJESTRACJA")).toBeInTheDocument();
      });
    });

    it("When the user submits invalid registration data, Then they should stay on the registration page", async () => {
      // Given
      const invalidRegistrationData = {
        name: "",
        email: "invalid-email",
        password: "short",
      };

      global.fetch.mockResolvedValueOnce({
        status: 400,
      });

      // When
      fireEvent.change(screen.getByLabelText(/Imię/i), {
        target: { value: invalidRegistrationData.name },
      });
      fireEvent.change(screen.getByLabelText(/E-mail/i), {
        target: { value: invalidRegistrationData.email },
      });
      fireEvent.change(screen.getByLabelText(/Hasło/i), {
        target: { value: invalidRegistrationData.password },
      });
      fireEvent.click(screen.getByText("Zarejestruj się"));

      // Then
      expect(screen.getByText("Masz już konto?")).toBeInTheDocument();
    });
  });
});
