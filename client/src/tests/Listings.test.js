import { render, screen } from "@testing-library/react";
import Listings from "../components/Listings";

describe("Listings Component", () => {
  test("renders listing items", () => {
    const listings = [
      { id: 1, title: "Luxury Villa", price: "$5000" },
      { id: 2, title: "Beach House", price: "$3500" }
    ];
    render(<Listings listings={listings} />);
    expect(screen.getByText("Luxury Villa")).toBeInTheDocument();
    expect(screen.getByText("Beach House")).toBeInTheDocument();
  });
});