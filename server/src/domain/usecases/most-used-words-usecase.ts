import { type MostUsedWordsInterface } from "../interfaces/usecases/most-used-words-interface"
import { convertToTitleCase } from "../../utils/string"

export class MostUsedWordsUseCase implements MostUsedWordsInterface {
  private readonly maxResults: number

  constructor(maxResults: number) {
    this.maxResults = maxResults
  }

  execute(texts: string[]): string[] {
    const wordFrequency = new Map<string, number>()

    texts.forEach((text) => {
      const words = text.split(/\s+/)

      let accumulatedWord = ""
      words.forEach((word) => {
        if (accumulatedWord !== undefined) {
          word = accumulatedWord + " " + word
          accumulatedWord = ""
        }
        const cleanedWord = word.replace(/[.]+$/, "").trim()
        const titleCasedWord = convertToTitleCase(cleanedWord)
        wordFrequency.set(
          titleCasedWord,
          (wordFrequency.get(titleCasedWord) ?? 0) + 1,
        )
      })
    })

    const sortedWords = [...wordFrequency.keys()].sort((a, b) => {
      const countDiff = wordFrequency.get(b)! - wordFrequency.get(a)!
      if (countDiff !== 0) {
        return countDiff
      }
      return a.localeCompare(b)
    })

    return sortedWords.slice(0, this.maxResults)
  }
}
