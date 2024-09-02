import { render, screen } from "@testing-library/react";
import Home from "../app/page";

describe("Home Page", () => {
  test('renders the "Create user" link', () => {
    render(<Home />);
    const linkElement = screen.getByText(/Create user/i);
    expect(linkElement).toBeInTheDocument();
  });
});
