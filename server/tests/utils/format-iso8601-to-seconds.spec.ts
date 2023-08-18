import { formatISO8601ToSeconds } from "../../src/utils/format-iso8601-to-seconds";

describe('FormatISO8601ToSeconds', () => {
  it('should convert ISO 8601 durations to seconds', () => {
    expect(formatISO8601ToSeconds('PT2H30M45S')).toBe(2 * 3600 + 30 * 60 + 45);
    expect(formatISO8601ToSeconds('PT3M15S')).toBe(3 * 60 + 15);
    expect(formatISO8601ToSeconds('PT1H')).toBe(1 * 3600);
    expect(formatISO8601ToSeconds('PT30S')).toBe(30);
  });

  it('should return 0 for invalid or missing input', () => {
    expect(formatISO8601ToSeconds('invalid')).toBe(0);
    expect(formatISO8601ToSeconds('')).toBe(0);
    expect(formatISO8601ToSeconds('PT')).toBe(0);
    expect(formatISO8601ToSeconds('PT45M1H')).toBe(0);
    expect(formatISO8601ToSeconds('PT30S1H')).toBe(0);
    expect(formatISO8601ToSeconds('PT30S30M')).toBe(0);
    expect(formatISO8601ToSeconds('PT30S30M1H')).toBe(0);

  });
});