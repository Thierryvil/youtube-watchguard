import { getMostUsedWords } from "../../src/usecases/get-most-used-words";

describe("GetMostUsedWords", () => {
  it("should return the most used words", () => {
    const texts = [
      "Isso é um teste...",
      "Este é apenas um teste.",
      "Outro teste para verificar...",
      "Apenas um teste de exemplo.",
    ];

    const result = getMostUsedWords(texts, 5);

    expect(result).toEqual(["Teste", "Um", "Apenas", "É", "De"]);
  });

  it('should return an empty array for empty input texts', () => {
    const result = getMostUsedWords([], 5);
    expect(result).toEqual([]);
  });

  it('should return fewer words if there are fewer unique words than the requested count', () => {
    const texts = [
      'Um Um Um Um',
      'dois doiS dois dOis dois'
    ];

    const result = getMostUsedWords(texts, 5);

    expect(result).toEqual(['Dois', 'Um']);
  });

});
