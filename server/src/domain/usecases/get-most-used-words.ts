export interface GetMostUsedWords {
  execute: (texts: string[], totalWords: number) => string[]
}
