import { convertISO8601ToSeconds } from "../../src/utils/";

describe("ConvertISO8601ToSeconds", () => {
  it("should convert ISO 8601 durations to seconds", () => {
    expect(convertISO8601ToSeconds("PT2H30M45S")).toBe(2 * 3600 + 30 * 60 + 45);
    expect(convertISO8601ToSeconds("PT3M15S")).toBe(3 * 60 + 15);
    expect(convertISO8601ToSeconds("PT1H")).toBe(1 * 3600);
    expect(convertISO8601ToSeconds("PT30S")).toBe(30);
  });

  it("should return 0 for invalid or missing input", () => {
    expect(convertISO8601ToSeconds("invalid")).toBe(0);
    expect(convertISO8601ToSeconds("")).toBe(0);
    expect(convertISO8601ToSeconds("PT")).toBe(0);
    expect(convertISO8601ToSeconds("PT45M1H")).toBe(0);
    expect(convertISO8601ToSeconds("PT30S1H")).toBe(0);
    expect(convertISO8601ToSeconds("PT30S30M")).toBe(0);
    expect(convertISO8601ToSeconds("PT30S30M1H")).toBe(0);
  });
});