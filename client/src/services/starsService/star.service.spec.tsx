import { StarService } from "./star.service";

describe(StarService, () => {
  let starService = new StarService();
  beforeEach(async () => {
    starService = new StarService();
  });

  it("should equal the correct number of full and empty star", () => {
    expect(starService.createStart(3)).toEqual({
      halfStars: 0,
      fullStars: 3,
      emptyStars: 2,
    });
  });

  it("should equal the correct number of full empty and halfstars", () => {
    expect(starService.createStart(3.8)).toEqual({
      halfStars: 1,
      fullStars: 3,
      emptyStars: 1,
    });

    expect(starService.createStart(3.4)).toEqual({
      halfStars: 0,
      fullStars: 3,
      emptyStars: 2,
    });

    expect(starService.createStart(3.5)).toEqual({
      halfStars: 1,
      fullStars: 3,
      emptyStars: 1,
    });
  });

  it("should display an error if argument higher than 5", () => {
    expect(() => starService.createStart(7)).toThrow(
      new Error("the num needs to be below 5")
    );
  });
});
