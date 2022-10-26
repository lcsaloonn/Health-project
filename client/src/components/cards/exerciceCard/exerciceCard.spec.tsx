import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";

import { IExercice } from "utils/types/IExercice";
import ExerciceCard from "./exerciceCard";
import { MemoryRouter } from "react-router";

const mock: IExercice = {
  _id: "0000000000",
  title: "Curl poussé",
  idTitle: "Curl-pousse",
  description: "description",
  raiting: 3.5,
  bodyPart: "arms",
  imageUrl: "string",
};
describe(ExerciceCard, () => {
  const setup = () =>
    render(
      <>
        <MemoryRouter>
          <ExerciceCard props={mock} />
        </MemoryRouter>
      </>
    );

  it("should display correct props", () => {
    setup();
    const title = screen.getByTestId("title").textContent;
    const img = screen.getByRole("img");
    expect(title).toEqual("Curl poussé");
    expect(img).toHaveAttribute("src", "../assets/img/" + mock.imageUrl);
  });
});
