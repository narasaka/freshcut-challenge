import { getDayDiff } from "../src/lib/utils";

describe("getDayDiff", () => {
  it("should compute the absolute value", () => {
    expect(getDayDiff(new Date("05/07/2022"), new Date("06/07/2022"))).toEqual(
      getDayDiff(new Date("06/07/2022"), new Date("05/07/2022"))
    );
  });

  it("should compute 1 day difference", () => {
    expect(getDayDiff(new Date("08/07/2022"), new Date("08/06/2022"))).toBe(1);
  });

  it("should be able to say 0", () => {
    expect(getDayDiff(new Date("07/02/2022"), new Date("07/02/2022"))).toBe(0);
  });
});
