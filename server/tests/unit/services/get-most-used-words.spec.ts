import { GetMostUsedWordsService } from "../../../src/data/services"

describe("GetMostUsedWords", () => {
  const sut = new GetMostUsedWordsService()

  it("should return the most used words", () => {
    const texts = [
      "Isso é um teste...",
      "Este é apenas um teste.",
      "Outro teste para verificar...",
      "Apenas um teste de exemplo.",
    ]
    const totalWords = 5
    const result = sut.execute(texts, totalWords)

    expect(result).toEqual(["Teste", "Um", "Apenas", "É", "De"])
  })

  it("should return an empty array for empty input texts", () => {
    const totalWords = 3
    const result = sut.execute([], totalWords)
    expect(result).toEqual([])
  })

  it("should return fewer words if there are fewer unique words than the requested count", () => {
    const texts = ["Um Um Um Um", "dois doiS dois dOis@ dois"]

    const result = sut.execute(texts, 3)

    expect(result).toEqual(["Dois", "Um", "Dois@"])
  })
})