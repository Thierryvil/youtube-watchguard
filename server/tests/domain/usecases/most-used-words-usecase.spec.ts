import { MostUsedWordsUseCase } from "@/domain/usecases/most-used-words-usecase"

describe("MostUsedWordsUseCase", () => {
  const sut = new MostUsedWordsUseCase(5)

  it("should return the most used words", () => {
    const texts = [
      "Isso é um teste...",
      "Este é apenas um teste.",
      "Outro teste para verificar...",
      "Apenas um teste de exemplo.",
    ]

    const result = sut.execute(texts)

    expect(result).toEqual(["Teste", "Um", "Apenas", "É", "De"])
  })

  it("should return an empty array for empty input texts", () => {
    const result = sut.execute([])
    expect(result).toEqual([])
  })

  it("should return fewer words if there are fewer unique words than the requested count", () => {
    const texts = ["Um Um Um Um", "dois doiS dois dOis@ dois"]

    const result = sut.execute(texts)

    expect(result).toEqual(["Dois", "Um", "Dois@"])
  })
})
