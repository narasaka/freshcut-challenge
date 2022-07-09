import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Home from "../src/pages";

describe("home", () => {
  it("should render", () => {
    render(<Home />);
  });
});
