import { type Video } from "./video"

export interface VideoProcessorResponse {
  videos: Video[][]
  mostUsedWordsInTitles: string[]
  mostUsedWordsInDescriptions: string[]
  totalInSecondsToWatchAllVideos: number
}
