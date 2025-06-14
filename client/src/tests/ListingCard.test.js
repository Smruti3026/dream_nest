import { render, screen } from "@testing-library/react";
import ListingCard from "../components/ListingCard";

describe("ListingCard Component", () => {
  test("renders listing card with title", () => {
    const listing = { title: "Cozy Apartment", price: "$1200" };
    render(<ListingCard listing={listing} />);
    expect(screen.getByText("Cozy Apartment")).toBeInTheDocument();
    expect(screen.getByText("$1200")).toBeInTheDocument();
  });
});