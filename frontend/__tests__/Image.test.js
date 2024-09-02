import { render, screen } from "@testing-library/react";
import Home from "../app/page";

describe("Home Page", () => {
  test("renders the image with correct alt text", () => {
    render(<Home />);
    const imageElement = screen.getByAltText("tree image");
    expect(imageElement).toBeInTheDocument();
  });
});
