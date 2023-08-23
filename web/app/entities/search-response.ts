export interface SearchResponse {
  videos: Video[][]
  mostUsedWordsInTitles: string[]
  mostUsedWordsInDescriptions: string[]
  totalInSecondsToWatchAllVideos: number
}

export interface Video {
  id: string,
  title: string,
  duration: number,
  thumbnail: string,
}