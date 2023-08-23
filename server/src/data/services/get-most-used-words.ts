import { convertToTitleCase } from "../../utils"
import { type GetMostUsedWords } from "../../domain/usecases"

export class GetMostUsedWordsService implements GetMostUsedWords {
  execute(texts: string[], totalWords: number): string[] {
    const wordFrequency = new Map<string, number>()

    texts = texts.filter((text) => text !== "")
    texts.forEach((text) => {
      const words = text.split(/\s+/)

      let accumulatedWord = ""
      words.forEach((word) => {
        if (accumulatedWord !== undefined) {
          word = accumulatedWord + " " + word
          accumulatedWord = ""
        }
        const cleanedWord = word.replace(/[.|,-]+$/, "").trim() // Updated regex here
        const titleCasedWord = convertToTitleCase(cleanedWord)
        if (titleCasedWord.length > 0) {
          wordFrequency.set(
            titleCasedWord,
            (wordFrequency.get(titleCasedWord) ?? 0) + 1,
          )
        }
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
