import { convertToTitleCase } from "../../utils"
import { type GetMostUsedWords } from "../../domain/usecases"

export class GetMostUsedWordsService implements GetMostUsedWords {
  execute(texts: string[], totalWords: number): string[] {
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

    return sortedWords.slice(0, totalWords)
  }
}
