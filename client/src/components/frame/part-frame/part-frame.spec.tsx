import { render, screen } from "@testing-library/react";
import PartFrame from "./part-frame";

describe(PartFrame, () => {
  it("should display correct text", () => {
    const title = "titre";
    render(<PartFrame title={title} />);
    const test = screen.getByTestId("title").textContent;
    expect(test).toEqual(title);
  });
});
