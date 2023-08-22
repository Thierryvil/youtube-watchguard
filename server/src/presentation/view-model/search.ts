export interface SearchViewModel {
  videos: Video[][]
  mostUsedWordsInTitles: string[]
  mostUsedWordsInDescriptions: string[]
  totalInSecondsToWatchAllVideos: number
}

interface Video {
  id: string
  title: string
  duration: number
  thumbnail: string
}
