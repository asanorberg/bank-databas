import { render, screen } from "@testing-library/react";
import Home from "../app/page";

describe("Home Page", () => {
  test("renders the main container", () => {
    render(<Home />);
    const mainElement = screen.getByRole("main");
    expect(mainElement).toBeInTheDocument();
  });
});
