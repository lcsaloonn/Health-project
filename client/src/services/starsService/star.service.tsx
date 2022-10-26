export class StarService {
  numberstarMax = 5;

  createStart(num: number) {
    if (!this.verificationNumber(num))
      throw new Error("the num needs to be below 5");
    else {
      return this.numberOfStars(num);
    }
  }

  private verificationNumber(num: number): boolean {
    if (num > this.numberstarMax) return false;
    else return true;
  }

  private numberOfStars(num: number) {
    const fullStars = Math.floor(num);
    const halfStars = num - fullStars <= 0.4 ? 0 : 1;
    const emptyStars =
      fullStars + halfStars < 5 ? 5 - (fullStars + halfStars) : 0;
    return { halfStars, fullStars, emptyStars };
  }
}
