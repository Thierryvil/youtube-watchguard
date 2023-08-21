import { secondsInADay } from "../../src/utils/constants";
import { convertISO8601ToSeconds, convertSecondsToDays } from "../../src/utils/date";

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

describe("ConvertSecondsToDays", () => {
  it("should convert 86400 seconds to 1 day", () => {
    const seconds = 86400;
    const result = convertSecondsToDays(secondsInADay, seconds);
    expect(result).toEqual(1);
  });

  it("should convert 172800 seconds to 2 days", () => {
    const seconds = 172800;
    const result = convertSecondsToDays(secondsInADay, seconds);
    expect(result).toEqual(2);
  });

  it("should convert 3600 seconds to approximately 0.0416667 days", () => {
    const seconds = 3600;
    const result = convertSecondsToDays(secondsInADay, seconds);
    expect(result).toBeCloseTo(0.0416667, 6);
  });

  it("should return 0 when seconds are 0", () => {
    const seconds = 0;
    const result = convertSecondsToDays(secondsInADay, seconds);
    expect(result).toEqual(0);
  });

  it("should handle fractional seconds correctly", () => {
    const seconds = 12345.6789;
    const result = convertSecondsToDays(secondsInADay, seconds);
    expect(result).toBeCloseTo(0.1428474, 4);
  });
});
