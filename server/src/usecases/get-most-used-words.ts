import { toTitleCase } from "../utils/to-title-case";

export function getMostUsedWords(texts: string[], count: number): string[] {
  const wordFrequency = new Map<string, number>();

  texts.forEach((text) => {
    const words = text.split(/\s+|\p{P}/u).filter((word) => word.length > 0);
    words.forEach((word) => {
      const cleanedWord = toTitleCase(word);
      const count = wordFrequency.get(cleanedWord) || 0;
      wordFrequency.set(cleanedWord, count + 1);
    });
  });

  const sortedWords = [...wordFrequency.keys()].sort((a, b) => {
    const countDiff = wordFrequency.get(b)! - wordFrequency.get(a)!;
    if (countDiff !== 0) {
      return countDiff;
    }
    return a.localeCompare(b);
  });

  const topWords = sortedWords.slice(0, count);
  return topWords;
}