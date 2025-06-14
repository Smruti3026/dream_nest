// __tests__/Navbar.test.js
import { render, screen } from "@testing-library/react";
import Navbar from "../components/Navbar";
import { BrowserRouter } from "react-router-dom";

describe("Navbar Component", () => {
  test("renders Navbar with correct links", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Listings")).toBeInTheDocument();
  });
});