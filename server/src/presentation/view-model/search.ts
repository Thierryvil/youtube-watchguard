import { type VideoDataModelWithDuration } from "@/data/models/video"

export interface SearchViewModel {
  videos: Video[][]
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
    return { ...video }
  }

  static mapList(videos: VideoDataModelWithDuration[][]): Video[][] {
    return videos.map((video) => video.map(Video.map))
  }
}
