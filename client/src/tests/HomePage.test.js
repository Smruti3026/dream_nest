import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import HomePage from "../pages/HomePage";

const mockStore = configureStore([]);
const store = mockStore({
  user: { name: "Test User", loggedIn: true }, // Mock your Redux state
});

describe("HomePage Component", () => {
  test("renders homepage content", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <HomePage />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText("Welcome to Home Rentals")).toBeInTheDocument();
  });
});
