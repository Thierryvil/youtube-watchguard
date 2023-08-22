import { type VideoDataModelWithDuration } from "@/data/models/video"
import { convertISO8601ToSeconds } from "../../utils"

export interface SearchViewModel {
  videos: Video[]
  mostUsedWordsInTitles: string[]
  mostUsedWordsInDescriptions: string[]
  totalInSecondsToWatchAllVideos: number
}

export class Video {
  constructor(
    readonly id: string,
    readonly title: string,
    readonly duration: number,
    readonly thumbnail: string,
  ) {}

  static map(video: VideoDataModelWithDuration): Video {
    return {
      id: video.id,
      title: video.title,
      duration: convertISO8601ToSeconds(video.duration),
      thumbnail: video.thumbnail,
    }
  }

  static mapList(videos: VideoDataModelWithDuration[]): Video[] {
    return videos.map((video) => Video.map(video))
  }
}
