import { convertToTitleCase } from "../../src/utils/string";

describe("ConvertToTitleCase", () => {
  it("should convert a string to title case", () => {
    const input = "this is a test";

    const result = convertToTitleCase(input);

    expect(result).toEqual("This Is A Test");
  });

  it("should handle words with mixed cases", () => {
    const input = "tHis iS A TeSt";
    const result = convertToTitleCase(input);
    expect(result).toEqual("This Is A Test");
  });

  it("should handle single-word input", () => {
    const input = "title";
    const result = convertToTitleCase(input);
    expect(result).toEqual("Title");
  });

  it("should handle input with leading or trailing spaces", () => {
    const input = "  leading space  ";
    const result = convertToTitleCase(input);
    expect(result).toEqual("  Leading Space  ");
  });

  it("should handle special characters", () => {
    const input = "@special!characters";
    const result = convertToTitleCase(input);
    expect(result).toEqual("@special!characters");
  });

  it("should handle empty input", () => {
    const input = "";
    const result = convertToTitleCase(input);
    expect(result).toEqual("");
  });
});
